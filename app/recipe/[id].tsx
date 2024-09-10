// RecipeView.tsx
import React, { useEffect, useState } from "react";
import { View, ScrollView } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { getRecipeInfo } from "@/composable/use-api";
import BackButton from "@/components/BackBtn";
import Loading from "@/components/Loading";
import RecipeHeader from "@/components/recipe/RecipeHeader";
import IngredientsList from "@/components/recipe/IngredientsList";
import RecipeSummary from "@/components/recipe/RecipeSummary";
import Instruction from "@/components/recipe/Instruction";

const RecipeView = () => {
  const { id } = useLocalSearchParams();
  const [recipe, setRecipe] = useState<RecipeDetail | undefined>();
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);
    try {
      const data = await getRecipeInfo(parseInt(id as string));
      setRecipe(data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, [id]);

  if (loading) return <Loading showBackBtn />;

  if (recipe)
    return (
      <View style={{ flex: 1, backgroundColor: "white", position: "relative" }}>
        <BackButton />
        <ScrollView>
          <RecipeHeader
            image={recipe.image}
            title={recipe.title}
            cuisines={recipe.cuisines}
          />
          <RecipeSummary summary={recipe.summary} type={recipe.dishTypes} />
          <IngredientsList ingredients={recipe.extendedIngredients} />
          {recipe.analyzedInstructions.map((i, index) => {
            return (
              <Instruction number={index + 1} key={index} instruction={i} />
            );
          })}
        </ScrollView>
      </View>
    );
};

export default RecipeView;
