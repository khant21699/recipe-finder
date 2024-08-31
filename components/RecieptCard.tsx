import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Link } from "expo-router";

const RecieptCard = ({ recipe }: { recipe: Recipe }) => {
  return (
    <Link href={`/recipe/${recipe.id}` as any} asChild>
      <TouchableOpacity>
        <View
          style={{
            flex: 1,
            backgroundColor: "white",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 10,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: "#E0E0E0",
            // For iOS
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.2,
            shadowRadius: 5,

            // For Android
            elevation: 5,
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "bold", flex: 1 }}>
            {recipe.title}
          </Text>
          <Image
            source={{ uri: recipe.image }}
            style={{ width: 100, height: 100, borderRadius: 10 }}
          />
        </View>
      </TouchableOpacity>
    </Link>
  );
};

export default RecieptCard;
