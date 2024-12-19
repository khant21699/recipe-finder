import { Text, SafeAreaView } from "react-native";
import React, { useEffect, useState, useCallback } from "react";
import { useLocalSearchParams } from "expo-router";
import { searchRecipes } from "@/composable/use-api";
import RecipeList from "@/components/home/RecipeList";
import BackButton from "@/components/BackBtn";
import Loading from "@/components/Loading";

const PAGE_SIZE = 10;

const Category = () => {
  const { category } = useLocalSearchParams<{ category: string }>();
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  const fetchRecipes = useCallback(
    async (pageNumber: number) => {
      try {
        if (pageNumber === 0) {
          setLoading(true);
        } else {
          setLoadingMore(true);
        }
        const data = await searchRecipes({
          query: category,
          offset: pageNumber,
          limit: PAGE_SIZE,
        });
        if (pageNumber === 0) {
          setRecipes(data.results);
        } else {
          setRecipes((prevRecipes) => [...prevRecipes, ...data.results]);
        }
        setHasMore(data.results.length >= PAGE_SIZE);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      } finally {
        setLoading(false);
        setLoadingMore(false);
      }
    },
    [category]
  );

  useEffect(() => {
    fetchRecipes(0);
  }, [fetchRecipes]);

  const handleScroll = (event: any) => {
    const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent;
    const isCloseToBottom =
      layoutMeasurement.height + contentOffset.y >= contentSize.height - 50;

    if (isCloseToBottom && !loading && !loadingMore && hasMore) {
      setPage((prevPage) => prevPage + 10);
      fetchRecipes(page + 10);
    }
  };

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
      <RecipeList
        recipes={recipes}
        loading={loading}
        loadingMore={loadingMore}
        onScroll={handleScroll}
      />
    </SafeAreaView>
  );
};

export default Category;
