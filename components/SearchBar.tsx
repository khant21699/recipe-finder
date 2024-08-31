import { View, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";

const SearchBar = ({ onSearch }: { onSearch: (term: string) => void }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = () => {
    if (searchTerm == "") {
      return;
    }
    // Handle the search submission here
    onSearch(searchTerm);
    // You can add your search logic or API call here
  };

  return (
    <View
      style={{
        padding: 20,
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          borderWidth: 1,
          borderColor: "black",

          borderRadius: 10,
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            borderRadius: 10,
            backgroundColor: "white",
          }}
        >
          <TextInput
            style={{
              fontSize: 16,
              width: "100%",
              padding: 20,
            }}
            placeholder="Search"
            placeholderTextColor="black"
            value={searchTerm}
            onChangeText={setSearchTerm}
            onSubmitEditing={handleSubmit}
            returnKeyType="search"
          />
        </View>
        {searchTerm == "" && (
          <TouchableOpacity onPress={handleSubmit}>
            <AntDesign
              name="search1"
              size={24}
              color="black"
              style={{ marginHorizontal: 20 }}
            />
          </TouchableOpacity>
        )}
        {searchTerm !== "" && (
          <TouchableOpacity
            onPress={() => {
              setSearchTerm("");
              onSearch("");
            }}
          >
            <AntDesign
              name="close"
              size={24}
              color="black"
              style={{ marginHorizontal: 20 }}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default SearchBar;
