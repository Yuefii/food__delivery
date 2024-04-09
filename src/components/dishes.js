import React from "react";
import * as Icon from "react-native-feather";

import { Image, Text, TouchableOpacity, View } from "react-native";
import { formatPrice } from "../utils/formatPrice";
import { themeColors } from "../themes";

const Dishes = ({ item }) => {
  return (
    <View className="flex-row items-center bg-white p-3 rounded-3xl shadow-2xl mb-3 mx-2">
      <Image
        className="rounded-3xl"
        style={{ width: 100, height: 100 }}
        source={item.image}
      />
      <View className="flex flex-1 space-y-3">
        <View className="pl-3">
          <Text className="text-xl">{item.name}</Text>
          <Text className="text-gray-700">{item.description}</Text>
        </View>
        <View className="flex-row pl-3 justify-between items-center">
          <Text className="text-lg font-semibold text-gray-700">
            {formatPrice(item.price)}
          </Text>
          <View className="flex-row items-center">
            <TouchableOpacity
              className="p-1 rounded-full"
              style={{ backgroundColor: themeColors.bgColor(1) }}
            >
              <Icon.Minus
                stroke="white"
                strokeWidth={2}
                width={20}
                height={20}
              />
            </TouchableOpacity>
          </View>
          <Text>{0}</Text>
          <View className="flex-row items-center">
            <TouchableOpacity
              className="p-1 rounded-full"
              style={{ backgroundColor: themeColors.bgColor(1) }}
            >
              <Icon.Plus
                stroke="white"
                strokeWidth={2}
                width={20}
                height={20}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Dishes;
