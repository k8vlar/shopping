import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native'

const Header = () => {
  return (
    <View style={styles.container}>
        <Image source={require("../assets/image/wave.png")} style={styles.logo}/>
      <Text style={styles.logoTitle}>Vague A Vague</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f4511e50',
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:'center',
        marginBottom:50,
    },
    logoTitle:{
        color: '#fff',
        fontSize: 30,
        fontFamily:'ShantellSansRegular',

    },
    logo:{
      
    }
})