import React from "react";
import * as Icon from "react-native-feather";

import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { themeColors } from "../themes";
import Dishes from "../components/dishes";

const Restaurant = () => {
  const router = useNavigation();
  const { params } = useRoute();
  let item = params;
  return (
    <View>
      <ScrollView>
        <View className="relative">
          <Image className="w-full h-72" source={item.img} />
          <TouchableOpacity
            onPress={() => router.goBack()}
            className="absolute top-5 left-4 bg-slate-50 p-2 rounded-full shadow"
          >
            <Icon.ArrowLeft strokeWidth={3} stroke={themeColors.bgColor(1)} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
          }}
          className="bg-white -mt-12 pt-6"
        >
          <View className="px-5">
            <Text className="text-3xl font-semibold">{item.name}</Text>
            <View className="flex-row space-x-2 my-1">
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
            <Text className="text-gray-500 mt-2">{item.description}</Text>
          </View>
        </View>
        <View className="pb-36 bg-white">
          <Text className="px-4 py-4 text-2xl font-semibold">Menu</Text>
          {item.dishes.map((item, index) => {
            return <Dishes item={{ ...item }} index={index} />;
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default Restaurant;
