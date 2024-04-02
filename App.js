import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 bg-white items-center justify-center">
      <Text className="text-2xl text-blue-600 font-semibold">Lets Started</Text>
      <StatusBar style="auto" />
    </View>
  );
}