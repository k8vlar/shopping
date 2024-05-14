import React from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import { useState } from "react";

const AddProduct = ({ submitHandler }) => {
  const [product, setProduct] = useState("");
  const inputHandler = (val) => {
    setProduct(val);
  };
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Demande ton nouveau produit"
        value={product}
        onChangeText={inputHandler}
      ></TextInput>
      <Button
        title="Valider"
        onPress={() => submitHandler(product, setProduct)}
      ></Button>
    </View>
  );
};
const styles = StyleSheet.create({
  inputContainer: {
    alignItems: "center",
    width: "100%",
    backgroundColor: "purple",
    flexDirection: "row",
    justifyContent:"space-between",
    marginBottom: 10,
  },
  textInput: {
    color: "black",
    fontSize: 20,
  },
});

export default AddProduct;
