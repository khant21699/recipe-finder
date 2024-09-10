// IngredientsList.tsx
import React from "react";
import { View, Text } from "react-native";

type Props = {
  ingredients: Ingredient[];
};

const IngredientsList = ({ ingredients }: Props) => (
  <View
    style={{
      flex: 1,
      padding: 10,
    }}
  >
    <Text style={{ fontSize: 20, marginVertical: 20, fontWeight: "semibold" }}>
      Ingredients
    </Text>
    {ingredients.map((i, index) => (
      <View
        key={index}
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 10,
          borderBottomColor: "black",
          borderBottomWidth: 1,
        }}
      >
        <Text>{i.name.toUpperCase()}</Text>
        <Text>{`${i.amount} ${i.unit.toUpperCase()}`}</Text>
      </View>
    ))}
  </View>
);

export default IngredientsList;
