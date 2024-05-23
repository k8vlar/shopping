import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  Pressable,
} from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';

import Colors from "../constants/Colors";

const Products = ({ name,idString,deleteProduct }) => {
    
  return (
    <View>
      <TouchableOpacity
        activeOpacity={0.2}
        onPress={() => console.log("cliqué")}
      >
        <View style={styles.productItems}>
          <Text style={styles.item}>{name}</Text>
        </View>
      </TouchableOpacity>
      <TouchableHighlight
        underlayColor="gold"
        onPress={() => console.log("cliqué")}
      >
        <View style={styles.productItems}>
          <Text style={styles.item}>{name}</Text>
        </View>
      </TouchableHighlight>
      <Pressable
        onPress={() => deleteProduct(idString)}
        // style={({ pressed }) => [
        //   {
        //     backgroundColor: pressed ? "red" : "green",
        //   },
        // ]}
      >
        <View style={styles.productItems}>
            <FontAwesome name="remove" size={30} color={Colors.danger} />
          <Text style={styles.item}>{name}</Text>
        </View>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  productItems: {
    marginTop: 10,
    alignItems:"center",
    justifyContent:"center",
    flexDirection:"row",
  },
  item: {
    backgroundColor: "pink",
    fontSize: 30,
    marginVertical: 6,
    color: "green",
    padding: 10,
    margin:10,
    width:300
  },
});

export default Products;
