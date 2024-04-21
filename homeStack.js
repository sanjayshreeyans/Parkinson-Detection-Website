import { createStackNavigator } from "@react-navigation/stack";
// import button from rn
import { Button } from "react-native";

import UploadDrawing from "./SpiralDrawingTest";
import WaveDrawingTest from "./WaveDrawingTest";
import ResultsFromTest from "./ResultsFromTest";
import HomePage from "./homePage";
console.log("homeStack.js");
const Navigator = createStackNavigator();
import { NavigationContainer } from "@react-navigation/native";
const App = () => {
  return (
    <NavigationContainer>
      {/* //screenOptions={{ headerShown: false }} */}
      <Navigator.Navigator>
        {/* // Demo Screen */}
        {/* <Navigator.Screen name="demoScreen" component={demoScreen} options={{ title: 'Home', headerShown: false }} /> */}
        {/* // Home Page */}

        
        <Navigator.Screen
          name="HomePage"
          component={HomePage}
          options={{ title: "Home", headerShown: false }}
        />

        <Navigator.Screen
          name="UploadDrawing"
          component={UploadDrawing}
          options={{ title: "Upload Drawing", headerShown: false }}
        />

        <Navigator.Screen
          name="WaveDrawingTest"
          component={WaveDrawingTest}
          options={{ title: "Wave Drawing Test", headerShown: false }}
        />
        <Navigator.Screen
          name="ResultsFromTest"
          component={ResultsFromTest}
          options={{ title: "Results", headerShown: false }}
        />


        {/* // Upload Drawing */}

        {/* // Face Registration */}
      </Navigator.Navigator>
    </NavigationContainer>
  );
};

export default App;
