// Home.tsx
import React, { useEffect, useState, useCallback } from "react";
import { SafeAreaView } from "react-native";
import { searchRecipes } from "@/composable/use-api";
import RecipeList from "@/components/home/RecipeList";
import SearchBar from "@/components/SearchBar";

const PAGE_SIZE = 10;

const Home = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchRecipes = useCallback(
    async (pageNumber: number, search: string = "") => {
      try {
        if (pageNumber === 1) {
          setLoading(true);
        } else {
          setLoadingMore(true);
        }
        const response = await searchRecipes({
          page: pageNumber,
          limit: PAGE_SIZE,
          query: search,
        });
        if (pageNumber === 1) {
          setRecipes(response.results);
        } else {
          setRecipes((prevRecipes) => [...prevRecipes, ...response.results]);
        }
        setHasMore(response.results.length >= PAGE_SIZE);
      } catch (error) {
        console.error("Failed to fetch recipes:fdfdfdfdfdfdfdfd", error);
      } finally {
        setLoading(false);
        setLoadingMore(false);
      }
    },
    []
  );

  useEffect(() => {
    fetchRecipes(1, searchTerm);
  }, [searchTerm, fetchRecipes]);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    setPage(1);
  };

  const handleScroll = (event: any) => {
    const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent;
    const isCloseToBottom =
      layoutMeasurement.height + contentOffset.y >= contentSize.height - 50;

    if (isCloseToBottom && !loading && !loadingMore && hasMore) {
      setPage((prevPage) => prevPage + 1);
      fetchRecipes(page + 1, searchTerm);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <SearchBar onSearch={handleSearch} />
      <RecipeList
        recipes={recipes}
        loading={loading}
        loadingMore={loadingMore}
        onScroll={handleScroll}
      />
    </SafeAreaView>
  );
};

export default Home;
