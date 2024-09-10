import { View, Text } from "react-native";
import React from "react";
import BackButton from "./BackBtn";

type Props = {
  showBackBtn?: boolean;
};

const Loading = ({ showBackBtn = false }: Props) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      {showBackBtn && <BackButton />}
      <Text>Loading...</Text>
    </View>
  );
};

export default Loading;
