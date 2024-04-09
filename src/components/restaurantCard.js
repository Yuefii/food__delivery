import React from "react";
import * as Icon from "react-native-feather";
import { View, TouchableWithoutFeedback, Image, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

const RestaurantCard = ({ item }) => {
  const router = useNavigation();
  return (
    <TouchableWithoutFeedback
      onPress={() => router.navigate("Restaurant", { ...item })}
    >
      <View className="mr-6 bg-white rounded-2xl shadow-lg">
        <Image className="h-36 w-64 rounded-t-2xl" source={item.img} />
        <View className="px-3 pb-4 space-y-2">
          <Text className="text-lg font-semibold pt-2">{item.name}</Text>
          <View className="flex-row items-center space-x-1">
            <Icon.Star height={20} width={20} color="orange" />
            <Text>
              <Text className="text-green-600">{item.stars}</Text>
              <Text className="text-gray-600">
                ({item.reviews} review) .
                <Text className="font-semibold">{item.category}</Text>
              </Text>
            </Text>
          </View>
          <View className="flex-row items-center space-x-1">
            <Icon.MapPin color="gray" width={15} height={15} />
            <Text className="text-gray-700 text-xs">{item.address}</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default RestaurantCard;
