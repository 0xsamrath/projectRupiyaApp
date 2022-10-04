import React from "react";
import "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/view/screens/HomeScreen";
import CourseScreen from "./src/view/screens/CourseScreen";

const Stack = createNativeStackNavigator();

const NavigationConfig = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Welcome" }}
        />
        <Stack.Screen
          name="Course"
          component={CourseScreen}
          options={{ title: "Course", headerBackTitle: "Back" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationConfig />
    </SafeAreaProvider>
  );
};

export default App;
