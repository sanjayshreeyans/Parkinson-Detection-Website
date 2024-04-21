import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { useState, useEffect } from "react";


export default function ResultsFromTest() {
  const navigation = useNavigation();
  const route = useRoute();

  const [results, setResults] = useState("Waiting for results...");
  const [diagnosis, setDiagnosis] = useState(null);

  // Function to convert base64 string to Blob object
  const base64ToBlob = (base64String, contentType = "image/png") => {
    const [header, data] = base64String.split(";base64,");
    const decodedData = atob(data);
    const arrayBuffer = new ArrayBuffer(decodedData.length);
    const uint8Array = new Uint8Array(arrayBuffer);
    for (let i = 0; i < decodedData.length; i++) {
      uint8Array[i] = decodedData.charCodeAt(i);
    }
    return new Blob([arrayBuffer], { type: contentType });
  };

  useEffect(() => {
    const sendImage = async () => {
      try {
        const imageURI = route.params.imageURI;
        const type = route.params.type;

        // Create FormData and append the blob
        const formData = new FormData();
        formData.append("image", base64ToBlob(imageURI), "image.png");

        // Send FormData to the API
        const serverResponse = await fetch(
          `http://127.0.0.1:8000/api/diagnosis?type=${type}`,
          {
            method: "POST",
            body: formData,
          }
        );

        const data = await serverResponse.json();
        setResults(JSON.stringify(data, null, 2));

        // Set diagnosis based on data received
        const isParkinsons = data.diagnosis === "PARKINSON";
        setDiagnosis(isParkinsons ? "PARKINSON" : "HEALTHY");
      } catch (error) {
        console.error("Error:", error);
      }
    };

    sendImage();
  }, []);

  return (
    <ImageBackground
      source={require("./img7.jpeg")}
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      imageStyle={{ opacity: 0.1 }}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Your Results</Text>
        <View style={styles.resultsContainer}>
          {diagnosis && (
            <View style={styles.diagnosisContainer}>
              <View style={styles.diagnosisTextContainer}>
                <Text style={styles.diagnosisText}>Diagnosis:</Text>
                <Text style={styles.diagnosisLabel}>{diagnosis}</Text>
              </View>
              <Text style={styles.explanationText}>
                {diagnosis === "PARKINSON" ? (
                  <Text style={styles.explanationTextRed}>
                    Our analysis suggests the presence of Parkinson's disease in
                    your drawing. This is not a definitive diagnosis, and we
                    recommend consulting a medical professional for further
                    evaluation.
                  </Text>
                ) : (
                  <Text style={styles.explanationTextGreen}>
                    Our analysis did not detect any signs of Parkinson's disease
                    in your drawing. However, this is not a guarantee of
                    complete health, and regular checkups are always
                    recommended.
                  </Text>
                )}
              </Text>
            </View>
          )}
          {!diagnosis && <Text style={styles.resultsText}>{results}</Text>}
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("HomePage")}
          >
            <Text style={styles.buttonText}>Home</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const colorPalette = {
  primary: "#3498DB",
  secondary: "#EBF8FF",
  text: "#333",
  green: "#51db92",
  red: "#ff6347",
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 42,
    fontWeight: "bold",
    color: colorPalette.text,
    marginBottom: 30,
    textAlign: "center",
  },
  resultsContainer: {
    marginTop: 30,
    alignItems: "center",
  },
  resultsText: {
    fontSize: 24,
    color: colorPalette.text,
    marginBottom: 20,
  },
  diagnosisContainer: {
    alignItems: "center",
  },
  diagnosisTextContainer: {
    flexDirection: "row",
    marginBottom: 20,
    flexShrink: 1,
  },
  diagnosisText: {
    fontSize: 28,
    marginRight: 10,
    marginBottom: 20,
    color: "black",
  },
  diagnosisLabel: {
    fontSize: 32,
    fontWeight: "bold",
    color: "black",
  },
  explanationText: {
    fontSize: 20,
    textAlign: "center",
    paddingHorizontal: 20,
    marginBottom: 30,
    flexWrap: "wrap",
    color: "#fff",
  },
  explanationTextRed: {
    fontSize: 20,
    textAlign: "center",
    paddingHorizontal: 20,
    flexWrap: "wrap",
    maxWidth: 300,
    marginBottom: 30,
    color: "black",
  },
  explanationTextGreen: {
    fontSize: 20,
    textAlign: "center",
    paddingHorizontal: 20,
    flexWrap: "wrap",
    marginBottom: 30,
    color: "black",
  },
  buttonContainer: {
    marginTop: 30,
  },
  button: {
    backgroundColor: colorPalette.primary,
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "bold",
  },
});
