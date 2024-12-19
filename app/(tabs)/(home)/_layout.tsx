// Home.tsx
import React, { useEffect, useState, useCallback } from "react";
import { SafeAreaView } from "react-native";
import { searchRecipes } from "@/composable/use-api";
import RecipeList from "@/components/home/RecipeList";
import SearchBar from "@/components/SearchBar";
import FilterModal from "@/components/home/FilterModal";

const PAGE_SIZE = 10;

const Home = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedMealType, setSelectedMealType] = useState<string | null>(null);
  const fetchRecipes = useCallback(
    async (pageNumber: number, search: string = "") => {
      try {
        console.log("fetchRecipes", pageNumber, search);
        if (pageNumber === 0) {
          setLoading(true);
        } else {
          setLoadingMore(true);
        }
        const response = await searchRecipes({
          offset: pageNumber,
          limit: PAGE_SIZE,
          query: search,
        });
        if (pageNumber === 0) {
          setRecipes(response.results);
        } else {
          setRecipes((prevRecipes) => [...prevRecipes, ...response.results]);
        }
        setHasMore(response.results.length >= PAGE_SIZE);
      } catch (error) {
        console.error("Failed to fetch recipes:", error);
      } finally {
        setLoading(false);
        setLoadingMore(false);
      }
    },
    []
  );

  useEffect(() => {
    fetchRecipes(0, searchTerm);
    setPage(0);
  }, [searchTerm, fetchRecipes]);

  useEffect(() => {
    if (selectedMealType) {
      fetchRecipes(0, selectedMealType);
    }
  }, [selectedMealType]);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    setPage(0);
    fetchRecipes(page, term);
    setPage((prevPage) => prevPage + 10);
  };

  const handleScroll = (event: any) => {
    const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent;
    const isCloseToBottom =
      layoutMeasurement.height + contentOffset.y >= contentSize.height - 50;

    if (isCloseToBottom && !loading && !loadingMore && hasMore) {
      setPage((prevPage) => prevPage + 10);
      fetchRecipes(page + 10, searchTerm);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <SearchBar
        onSearch={handleSearch}
        openFilter={() => setIsFilterOpen(!isFilterOpen)}
      />
      {isFilterOpen && (
        <FilterModal
          setSelectedMealType={setSelectedMealType}
          selectedMealType={selectedMealType}
        />
      )}
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
