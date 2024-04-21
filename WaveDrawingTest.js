import React, { useState, useEffect, useRef } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  Button,
  ImageBackground,
} from "react-native";
import { Camera } from "expo-camera";
import { MaterialIcons } from "@expo/vector-icons";
import { manipulateAsync, FlipType, SaveFormat } from "expo-image-manipulator";
import Config from "react-native-config";
import * as FileSystem from "expo-file-system";
import * as ImagePicker from "expo-image-picker";
import { useNavigation } from "@react-navigation/native";

const colorPalette = {
  primary: "#3498DB",
  secondary: "#EBF8FF",
  text: "#333",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: `linear-gradient(to bottom, ${colorPalette.secondary}, ${colorPalette.primary})`,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 40,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: colorPalette.text,
    marginBottom: 20,
    textAlign: "center",
  },
  description: {
    fontSize: 18,
    color: colorPalette.text,
    marginBottom: 40,
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  uploadButton: {
    backgroundColor: "#fff",
  },
  learnMoreButton: {
    borderWidth: 2,
    borderColor: colorPalette.primary,
    backgroundColor: "transparent",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: colorPalette.text,
    textAlign: "center",
  },
});

console.log("FaceRegistration.js");

export default function WaveDrawingTest() {
  const navigation = useNavigation();
  const [image, setImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // Simulate button loading state

  const pickImage = async () => {
    try {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        alert("Permission to access camera roll is required!");
        return;
      }
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.cancelled) {
        setImage(result["assets"][0]["uri"]);
      }
    } catch (error) {
      console.error("Error picking image:", error);
    }
  };

  const navigateToResults = () => {
    if (!image) {
      alert("Please select an image first.");
      return;
    }
    navigation.navigate("ResultsFromTest", {
      imageURI: image,
      type: "wave",
    });
  };

  return (
    <ImageBackground
      source={require("./img6.jpg")}
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      imageStyle={{ opacity: 0.1 }}
    >
      {/* Replace with your logo */}
      <Text style={styles.title}>Analyze Your Wave Drawings</Text>
      <Text style={styles.description}>
        Identify potential diagnosis and gain insights into your drawings.
      </Text>
      {image && (
        <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
      )}
      {/* Spacer to implement some spacing
       */}
      <View style={{ height: 20 }} />
      {/* Buttons */}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={[styles.button, styles.uploadButton]}
          onPress={pickImage}
        >
          {isLoading ? (
            <MaterialCommunityIcons
              name="progress-clock"
              size={24}
              color={colorPalette.primary}
            />
          ) : (
            <Text style={styles.buttonText}>Upload Image</Text>
          )}
        </TouchableOpacity>
        {image && (
          <TouchableOpacity
            style={[styles.button, { backgroundColor: "#51db92" }]}
            onPress={navigateToResults}
          >
            <Text style={[styles.buttonText, { color: "white" }]}>Analyze</Text>
          </TouchableOpacity>
        )}
      </View>
    </ImageBackground>
  );
}
