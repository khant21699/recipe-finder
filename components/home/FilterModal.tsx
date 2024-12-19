import React, { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { mealTypes } from "@/constants";
import RNPickerSelect from "react-native-picker-select";

const FilterModal = ({
  setSelectedMealType,
  selectedMealType,
}: {
  setSelectedMealType: (type: string) => void;
  selectedMealType: string | null;
}) => {
  const [tempMealType, setTempMealType] = useState<string | null>(
    selectedMealType
  );

  return (
    <View style={{ height: "auto", backgroundColor: "white", padding: 20 }}>
      <Text>Filter</Text>
      <RNPickerSelect
        onValueChange={(value) => setTempMealType(value)}
        items={mealTypes.map((type) => ({
          label: type,
          value: type,
        }))}
        value={tempMealType}
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

      <TouchableOpacity
        style={{
          backgroundColor: "#007AFF",
          padding: 10,
          borderRadius: 8,
          marginTop: 15,
          alignItems: "center",
        }}
        onPress={() => {
          if (tempMealType) {
            setSelectedMealType(tempMealType);
          }
        }}
      >
        <Text style={{ color: "white", fontSize: 16 }}>Apply</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FilterModal;
