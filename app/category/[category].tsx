import { View, Text, FlatList, SafeAreaView } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import { searchRecipes } from "@/composable/use-api";
import RecipeCard from "@/components/RecieptCard";
import Loading from "@/components/Loading";
import BackButton from "@/components/BackBtn";

const Category = () => {
  const { category } = useLocalSearchParams<{ category: string }>();
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipes = async () => {
      setLoading(true);
      try {
        const data = await searchRecipes({ query: category });
        setRecipes(data.results);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, [category]);

  if (loading) {
    return <Loading />;
  }

  return (
    <SafeAreaView style={{ flex: 1, padding: 10 }}>
      <BackButton />
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          marginBottom: 10,
          textAlign: "center",
        }}
      >
        {typeof category === "string"
          ? category.split("=").pop()?.toUpperCase()
          : ""}{" "}
        RECIPES
      </Text>
      <FlatList
        style={{ marginTop: 30, paddingHorizontal: 10 }}
        data={recipes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <RecipeCard recipe={item} />}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
      />
    </SafeAreaView>
  );
};

export default Category;
