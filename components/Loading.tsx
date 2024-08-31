import { View, Text } from "react-native";
import React from "react";

const Loading = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <Text>Loading...</Text>
    </View>
  );
};

export default Loading;
