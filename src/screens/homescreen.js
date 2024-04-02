import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Homescreen = () => {
  return (
    <SafeAreaView className="flex-1 items-center justify-center">
      <Text className="font-semibold text-2xl text-red-600">HOME SCREEN</Text>
    </SafeAreaView>
  );
};

export default Homescreen;
