import React from "react";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const BackButton = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.goBack();
      }}
      style={{
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "black",
        position: "absolute",
        zIndex: 100,
        padding: 5,
        left: 10,
        borderRadius: 10,
        top: 70,
      }}
    >
      <Ionicons name="chevron-back" size={34} color="white" />
      {/* You can also add a "Back" text if you want next to the icon */}
    </TouchableOpacity>
  );
};

export default BackButton;
