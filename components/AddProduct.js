import React from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import ButtonComponent from "./ButtonComponent";
import { useState } from "react";
import Colors from "../constants/Colors";

const AddProduct = ({ submitHandler }) => {
  const [product, setProduct] = useState("");
  const inputHandler = (val) => {
    setProduct(val);
  };
  const handleClick = () => {
    submitHandler(product);
    setProduct("");
  };
  const handleClickDelete = () => {
    setProduct("");
  };
  return (
    <View style={styles.inputContainer}>
      <View style={styles.firstContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="nouveau produit"
          value={product}
          onChangeText={inputHandler}
        ></TextInput>
        <Button title="Valider" onPress={handleClick}></Button>

        <Button
          title="Annuler"
          onPress={handleClickDelete}
          color="red"
        ></Button>
      </View>
      <ButtonComponent handlePress={handleClick}>Valider</ButtonComponent>

      <ButtonComponent
        handlePress={handleClickDelete}
        style={styles.btnAnnuler}
      >
        Annuler
      </ButtonComponent>
    </View>
  );
};
const styles = StyleSheet.create({
  inputContainer: {
    padding: 40,
    alignItems: "center",
    width: "90%",
    flexDirection: "column",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  textInput: {
    color: "black",
    fontSize: 15,
    width: "60%",
  },
  btnAnnuler: {
    backgroundColor: "purple",
  },
  firstContainer: {
    flexDirection: "row",
    backgroundColor: Colors.successLand,
  },
  secondContainer: {
    flexDirection: "row",
    backgroundColor: "block",
    justifyContent: "space-around",
  },
});

export default AddProduct;
