import React from "react";
import { View, Text } from "react-native";

type Props = {
  instruction: analyzedInstructions;
  number: number;
};

const Instruction = ({ instruction, number }: Props) => {
  return (
    <View style={{ paddingHorizontal: 10, gap: 10 }}>
      <Text style={{ fontSize: 20, fontWeight: "semibold" }}>
        Instructions {number}
      </Text>
      <View style={{ gap: 5, marginBottom: 40 }}>
        {instruction.steps.map((i, index) => {
          return (
            <View
              key={index} // Adding a key for list items
              style={{
                flexDirection: "row",
                flexWrap: "wrap", // Allows text to wrap to the next line
                alignItems: "flex-start", // Aligns text to start in the view
                marginBottom: 10, // Space between items
              }}
            >
              <Text style={{ width: 30, fontSize: 16, fontWeight: "bold" }}>
                {index + 1}.
              </Text>
              <Text style={{ fontSize: 16, flex: 1 }}>{i.step}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default Instruction;
