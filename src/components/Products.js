import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { themeColors } from "../themes";
import RestaurantCard from "./restaurantCard";

const Products = ({ title, description, restaurants }) => {
  return (
    <View className="pt-4 rounded-t-full">
      <View className="flex-row justify-between items-center px-4">
        <View>
          <Text className="font-semibold text-lg">{title}</Text>
          <Text className="text-gray-600 text-xs">{description}</Text>
        </View>
        <TouchableOpacity>
          <Text style={{ color: themeColors.text }} className="font-semibold">
            See All
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        className="overflow-auto py-5"
      >
        {restaurants.map((item, index) => {
          return <RestaurantCard item={item} key={index} />;
        })}
      </ScrollView>
    </View>
  );
};

export default Products;
