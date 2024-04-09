import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { themeColors } from "../themes";
import { formatPrice } from "../utils/formatPrice";

const Cart = () => {
  return (
    <View className="absolute bottom-5 w-full z-50">
      <TouchableOpacity
        style={{ backgroundColor: themeColors.bgColor(1) }}
        className="flex-row justify-between items-center mx-5 rounded-full p-4 px-3 shadow-lg"
      >
        <View
          className="p-2 px-4 rounded-full"
          style={{ backgroundColor: "rgba(255, 255, 255, 0.3)" }}
        >
          <Text className="font-bold text-white text-lg">2</Text>
        </View>
        <Text className="flex-1 pl-3 font-bold text-white text-lg">
          {formatPrice(20000)}
        </Text>
        <Text className="pr-3 text-center font-bold text-white text-lg">
          View Cart
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Cart;
