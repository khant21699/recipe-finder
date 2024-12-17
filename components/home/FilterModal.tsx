import React, { useState } from "react";
import { Text, View } from "react-native";
import { mealTypes } from "@/constants";
import RNPickerSelect from "react-native-picker-select";

const FilterModal = ({
  setSelectedMealType,
}: {
  setSelectedMealType: (type: string) => void;
}) => {
  return (
    <View style={{ height: "auto", backgroundColor: "white", padding: 20 }}>
      <Text>Filter</Text>
      <RNPickerSelect
        onValueChange={(value) => setSelectedMealType(value)}
        items={mealTypes.map((type) => ({
          label: type,
          value: type,
        }))}
        style={{
          inputIOS: {
            fontSize: 16,
            paddingVertical: 12,
            paddingHorizontal: 10,
            borderWidth: 1,
            borderColor: "gray",
            borderRadius: 4,
            color: "black",
            marginTop: 10,
          },
          inputAndroid: {
            fontSize: 16,
            paddingHorizontal: 10,
            paddingVertical: 8,
            borderWidth: 1,
            borderColor: "gray",
            borderRadius: 4,
            color: "black",
            marginTop: 10,
          },
        }}
        placeholder={{ label: "Select a meal type...", value: null }}
      />
    </View>
  );
};

export default FilterModal;
