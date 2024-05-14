import React from 'react'
import { View,Text, StyleSheet } from 'react-native'

const Products = ({name}) => {
  return (
        <View>
            <Text style={styles.item}>{name}</Text>
        </View>
  )
}
const styles = StyleSheet.create({
   
    productItems: {
      marginTop: 10,
    },
    item: {
      backgroundColor: "pink",
      padding: 20,
      fontSize: 20,
      marginVertical: 6,
    },
  });
  
export default Products

