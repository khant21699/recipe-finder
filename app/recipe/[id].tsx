import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const RecipeView = () => {
  const { id } = useLocalSearchParams();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView style={{ flex: 1, backgroundColor: "white", padding: 10 }}>
        <View>
          <Text>{id}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RecipeView;
