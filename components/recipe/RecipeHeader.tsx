// RecipeHeader.tsx
import React from "react";
import { View, Text, Image } from "react-native";
type Props = {
  image: string;
  title: string;
  cuisines: string[];
};
const RecipeHeader = ({ image, title, cuisines }: Props) => (
  <View style={{ position: "relative", width: "100%", aspectRatio: 1 }}>
    <Image
      style={{ width: "100%", height: "100%", resizeMode: "cover" }}
      source={{ uri: image }}
    />
    <View
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "rgba(0,0,0,0.5)",
        padding: 10,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          marginBottom: 10,
          flexWrap: "wrap",
          gap: 10,
        }}
      >
        {cuisines.map((c, index) => (
          <View
            key={index}
            style={{
              backgroundColor: "#fff",
              paddingHorizontal: 8,
              paddingVertical: 4,
              borderRadius: 4,
              alignSelf: "flex-start", // This is key for the 'fit-content' effect
            }}
          >
            <Text style={{ color: "#000" }}>{c}</Text>
          </View>
        ))}
      </View>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          color: "white",
        }}
      >
        {title}
      </Text>
    </View>
  </View>
);

export default RecipeHeader;
