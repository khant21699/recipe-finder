import { View, Text } from "react-native";
import React from "react";
import { formatRecipeInfo } from "@/util/format_string";
import FormattedText from "../FormattedText";

type Props = {
  summary: string;
  type: string[];
};

const RecipeSummary = ({ summary, type }: Props) => {
  console.log(formatRecipeInfo(summary));
  return (
    <View style={{ paddingHorizontal: 10, marginTop: 20 }}>
      <Text style={{ fontSize: 20, fontWeight: "semibold" }}>Summary</Text>
      <FormattedText
        text={formatRecipeInfo(summary)}
        style={{ marginTop: 10, lineHeight: 20 }}
      />
      <Text style={{ fontSize: 20, fontWeight: "semibold", marginTop: 20 }}>
        Dish Type
      </Text>
      <View
        style={{
          flexDirection: "row",
          marginTop: 10,
          flexWrap: "wrap",
          gap: 10,
        }}
      >
        {type.map((t, index) => (
          <View
            key={index}
            style={{
              backgroundColor: "#000",
              paddingHorizontal: 8,
              paddingVertical: 4,
              borderRadius: 4,
              alignSelf: "flex-start", // This is key for the 'fit-content' effect
            }}
          >
            <Text style={{ color: "#fff" }}>{t}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default RecipeSummary;
