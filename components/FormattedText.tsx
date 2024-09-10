import React from "react";
import { Text, TextStyle, StyleSheet, Linking } from "react-native";

interface FormattedTextProps {
  text: string;
  style?: TextStyle;
}

const FormattedText: React.FC<FormattedTextProps> = ({ text, style }) => {
  const parts = text.split(/(\*\*.*?\*\*|\[.*?\]\(.*?\))/g);

  return (
    <Text style={style}>
      {parts.map((part, index) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          // Bold text
          return (
            <Text key={index} style={styles.bold}>
              {part.slice(2, -2)}
            </Text>
          );
        } else if (part.match(/\[.*?\]\(.*?\)/)) {
          // Link
          const [, linkText, url] = part.match(/\[(.*?)\]\((.*?)\)/)!;
          return (
            <Text
              key={index}
              style={styles.link}
              onPress={() => Linking.openURL(url)}
            >
              {linkText}
            </Text>
          );
        } else {
          // Regular text
          return <Text key={index}>{part}</Text>;
        }
      })}
    </Text>
  );
};

const styles = StyleSheet.create({
  bold: {
    fontWeight: "bold",
  },
  link: {
    color: "#007AFF",
    textDecorationLine: "underline",
  },
});

export default FormattedText;

// Usage example:
// <FormattedText
//   text="This is **bold** and this is a [link](https://example.com)"
//   style={{ fontSize: 16 }}
// />
