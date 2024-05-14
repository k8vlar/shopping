import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { Button } from "react-native";
import { ScrollView } from "react-native";
import { FlatList } from "react-native";
import Products from "./components/Products";
import AddProduct from "./components/AddProduct";

export default function App() {
  
  const [myProducts, setMyProducts] = useState([]);
  
  const submitHandler = (product,setProduct) => {
    //enregistre les news products dans l'array du state myproducts
    const idString = Date.now().toString(); //on créé un identifiant unique a chaque produit
    setMyProducts((currentMyProducts) => [{ key: idString, name: product },...currentMyProducts,]);
    setProduct("");
    // setMyProducts((currentMyProducts) => [...currentMyProducts, product]);
    // setProduct("");
  };
  return (
    <View style={styles.container}>
      {/* <ScrollView> */}
      <AddProduct submitHandler={submitHandler}/>
      {/* <View style={styles.productItems}>
          {myProducts.map((product, index) => {
            return (
              <Text key={index} style={styles.item}>
                {product}
              </Text>
            );
          })}
        </View> */}
      {/* </ScrollView> */}
      <FlatList
        data={myProducts}
        renderItem={({ item }) =>
          <Products name={item.name} />
          /*<Text style={styles.item}>{item.name}</Text>*/}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
    paddingTop: 60,
  },
});
