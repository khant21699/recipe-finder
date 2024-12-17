import React from "react";
import { ScrollView, Text, View, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

const SimilarRecipes = ({ similar }: { similar: Recipe[] }) => {
  const router = useRouter();

  return (
    <View style={{ padding: 20, width: "100%" }}>
      <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 20 }}>
        Similar Recipes
      </Text>
      <ScrollView horizontal>
        {similar.map((recipe) => (
          <TouchableOpacity
            key={recipe.id}
            style={{
              marginRight: 10,
              width: 100,
              aspectRatio: 1,
              backgroundColor: "#00000050",
              borderRadius: 10,
              padding: 10,
            }}
            onPress={() => router.push(`/recipe/${recipe.id}`)}
          >
            <Text
              style={{
                fontSize: 12,
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              {recipe.title}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default SimilarRecipes;
