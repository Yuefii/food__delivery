import React, { useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Text,
} from "react-native";
import { categories } from "../constants/categories";

const Categories = () => {
  const [activeCatogory, setActiveCategory] = useState(null);

  return (
    <View className="mt-4">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="overflow-visible"
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
      >
        {categories.map((item, index) => {
          let isActived = item.id == activeCatogory;
          let btnClass = isActived ? "bg-gray-600" : "bg-gray-200";
          let txtClass = isActived
            ? "font-semibold text-gray-800"
            : "text-gray-500";
          return (
            <View key={index} className="flex justify-center items-center mr-6">
              <TouchableOpacity
                onPress={() => setActiveCategory(item.id)}
                className={"p-1 shadow" + btnClass}
              >
                <Image
                  style={{ width: 45, height: 45 }}
                  className="rounded-full"
                  source={item.img}
                />
              </TouchableOpacity>
              <Text className={"text-sm" + txtClass}>{item.name}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Categories;
