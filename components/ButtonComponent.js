import React from 'react'
import { TouchableOpacity,View,Text,StyleSheet } from 'react-native'

const ButtonComponent = ({handlePress, style, children}) => {
   
  return (
    <TouchableOpacity
    activeOpacity={0.6}
    onPress={handlePress}>
      <View style={{...styles.btn,...style}}>
      <Text style={styles.btnText}>{children}</Text>
      </View>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  btn: {
    backgroundColor: "grey",
    
  },
  btnText: {
    color: "white",
    
  },
  },)



export default ButtonComponent
