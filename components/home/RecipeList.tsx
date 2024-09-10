// RecipeList.tsx
import React from "react";
import { View, ScrollView, ActivityIndicator } from "react-native";
import RecieptCard from "@/components/RecieptCard";
import Loading from "@/components/Loading";

type RecipeListProps = {
  recipes: Recipe[];
  loading: boolean;
  loadingMore: boolean;
  onScroll: (event: any) => void;
};

const RecipeList: React.FC<RecipeListProps> = ({
  recipes,
  loading,
  loadingMore,
  onScroll,
}) => {
  if (loading) {
    return <Loading />;
  }

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: "white" }}
      contentContainerStyle={{ padding: 20, gap: 20 }}
      onScroll={onScroll}
      scrollEventThrottle={16}
    >
      {recipes.map((recipe, index) => (
        <RecieptCard key={index} recipe={recipe} />
      ))}
      {loadingMore && <ActivityIndicator size="large" color="#0000ff" />}
    </ScrollView>
  );
};

export default RecipeList;
