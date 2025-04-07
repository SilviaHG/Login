import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react'
import { Alert, Button, StyleSheet, Text, View } from 'react-native';


const HomeScreen = ({route, navigation}:any) => {
    const {user} = route.params; //extraer el usuario desde params

    //funcion para manejar el logout
    const Logout = async() => {
        try{
            await AsyncStorage.removeItem('user') //eliminar el usuario de AsyncStorage, que ya existia
            Alert.alert('Éxito', 'Sesión cerrada') //reemplazar la pantalla de inicio sesión
            navigation.replace('Login')
        }catch (error) {
            Alert.alert('Error', 'Error al cerrar sesión')
        }
    }

  return (
    <View style={styles.container}>
        <Text style={styles.text}>Bienvenidos, {user}</Text>

        <Button title='Cerrar Sesión' onPress={Logout} color="#ffcc00" />
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
