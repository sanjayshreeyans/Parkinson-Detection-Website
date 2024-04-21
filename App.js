// import * as React from "react";
// // // import { Text, View, StyleSheet, TextInput, Button, TouchableOpacity, NavigatingContainer } from 'react-native';
// // // import Constants from 'expo-constants';
// import { useFonts } from "expo-font";
// // // import { initializeApp } from 'firebase/app';
// import Navigator from "routes\homeStack.js";

// const App = () => {
//   return <Navigator />;
// };

// export default App;
import * as React from "react";
// // import { Text, View, StyleSheet, TextInput, Button, TouchableOpacity, NavigatingContainer } from 'react-native';
// // import Constants from 'expo-constants';
import { useFonts } from "expo-font";
// // import { initializeApp } from 'firebase/app';
import Navigator from "./homeStack";

const App = () => {
  return <Navigator />;
};
console.log("App.js");
export default App;
