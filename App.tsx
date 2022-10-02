import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import "react-native-gesture-handler";
import { View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialIcons";
import CourseScreen from "./src/view/screens/CourseScreen";
import HomeScreen from "./src/view/screens/HomeScreen";

const NavigationConfig = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerStyle: { elevation: 0 } }}>
        <Stack.Screen name="ㅤ" component={HomeScreen} />
        <Stack.Screen
          name="Course"
          options={({ navigation }) => ({
            headerLeft: () => (
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.goBack()}
              >
                <Icon
                  name="arrow-back-ios"
                  size={25}
                  style={{ marginLeft: 20 }}
                />
              </TouchableOpacity>
            ),
          })}
          component={CourseScreen}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Stack = createStackNavigator();
const App = () => {
  return (
      <SafeAreaProvider>
        <NavigationConfig />
      </SafeAreaProvider>
  );
};

export default App;
