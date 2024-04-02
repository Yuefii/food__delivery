import React from "react";
import Homescreen from "./src/screens/homescreen";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <stack.Screen name="Home" component={Homescreen} />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
