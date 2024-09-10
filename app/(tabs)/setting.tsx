import { View, Text } from "react-native";
import React from "react";

const setting = () => {
  const API_KEY = process.env.SPOONACULAR_API_KEY;

  return (
    <View>
      <Text>{API_KEY}</Text>
    </View>
  );
};

export default setting;
