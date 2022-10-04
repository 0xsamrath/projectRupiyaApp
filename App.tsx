import React from "react";
import "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";

const NavigationConfig = () => {
  return (
    <></>
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
