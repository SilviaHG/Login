import React from 'react'
import { StyleSheet, Text, View } from 'react-native';


const HomeScreen = ({route}:any) => {
    const {user} = route.params; //extraer el usuario desde params
  return (
    <View style={styles.container}>
        <Text style={styles.text}>Bienvenidos, {user}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        fontSize:22,
    }
})

export default HomeScreen
