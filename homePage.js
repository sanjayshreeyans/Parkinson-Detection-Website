import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

export default function HomePage() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["rgba(121, 201, 219, 0.8)", "transparent"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0.5, y: 0.5 }}
        style={styles.gradient}
      >
        <Text style={styles.logo}>ParkDetect AI</Text>
        <Text style={styles.description}>
          Simple yet powerful solution, allowing individuals worldwide to gain
          awareness of their condition promptly
        </Text>
        {/* Three content sections */}
        <View style={styles.sectionsContainer}>
          {/* First section */}
          <TouchableOpacity
            style={[styles.section, styles.pink]}
            onPress={() => navigation.navigate("UploadDrawing")}
          >
            <ImageBackground
              source={require("./picture1.jpg")}
              style={styles.imageBackground}
              imageStyle={{ opacity: 0.1 }}
            >
              <Text style={styles.sectionHeading}>Analyze Spirals</Text>
              <Text style={styles.sectionText}>
                Analyze spiral drawings to detect Parkinson's disease
              </Text>
            </ImageBackground>
          </TouchableOpacity>
          {/* Second section */}
          <TouchableOpacity
            style={[styles.section, styles.blue]}
            onPress={() => navigation.navigate("WaveDrawingTest")}
          >
            <ImageBackground
              source={require("./picture2.jpg")}
              style={styles.imageBackground}
              imageStyle={{ opacity: 0.1 }}
            >
              <Text style={styles.sectionHeading}>Analyze Waves</Text>
              <Text style={styles.sectionText}>
                Analyze wave drawings to detect Parkinson's disease
              </Text>
            </ImageBackground>
          </TouchableOpacity>
          {/* Third section */}
          <TouchableOpacity
            style={[styles.section, styles.green]}
            onPress={() => navigation.navigate("CommonDiagnosis")}
          >
            <ImageBackground
              source={require("./picture3.jpg")}
              style={styles.imageBackground}
              imageStyle={{ opacity: 0.3}}
            >
              <Text style={styles.sectionHeading}>Common Diagnosis</Text>
              <Text style={styles.sectionText}>
                Learn more about Parkinson's disease and its symptoms
              </Text>
            </ImageBackground>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  logo: {
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#20232a",
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    color: "#20232a",
    textAlign: "center",
  },
  sectionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 40,
    width: "100%",
  },
  section: {
    flex: 1,
    height: 200,
    width: 200,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    borderRadius: 10,
  },
  imageBackground: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  pink: {
    backgroundColor: "#ff7eb6",
    marginHorizontal: 10, // Increase horizontal margin for space between buttons
  },
  blue: {
    backgroundColor: "#6bcaff",
    marginHorizontal: 10, // Increase horizontal margin for space between buttons
  },
  green: {
    backgroundColor: "#51db92",
    marginHorizontal: 10, // Increase horizontal margin for space between buttons
  },
  sectionHeading: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10,
    color: "black",
  },
  sectionText: {
    fontSize: 20,
    fontWeight: "bold",

    textAlign: "center",
    color: "#0D4297",
  },
});
