import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useState } from 'react'
import { Alert, Button, StyleSheet, Text, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

const RegisterScreen = ({navigation}:any) => {
    const[name,setName] = useState('')
    const[email,setEmail] = useState('')
    const[pass,setPass] = useState('')

    const manageRegistration= async()=>{
        if(!name || !email || !pass){
            Alert.alert('Error', 'Campos obligatorios')
            return;
        }
        const user ={
            name,
            email,
            password: pass
        }

        try{
            await AsyncStorage.setItem('user', JSON.stringify(user))
            Alert.alert('Éxito', 'Registro Completado')
            navigation.navigate('Login')
        }catch{
            Alert.alert('Error', 'No se pudo guardar el usuario')
            return;
        }

       
    }

  return (
    <View style={styles.container}>
        <Text style={styles.title} >
            Registrarse
        </Text>

        <TextInput  placeholder='Nombre' 
                    style={styles.input}   
                    value={name}
                    onChangeText={setName}>
        </TextInput>

        <TextInput placeholder='Correo'
                    style={styles.input}
                    value={email}
                    onChangeText={setEmail}>
        </TextInput>

        <TextInput placeholder='Contraseña'
                    secureTextEntry
                    value={pass}
                    style={styles.input}
                    onChangeText={setPass}>
        </TextInput>

        <Button title='Crear Cuenta' onPress={manageRegistration} ></Button>

    </View>
  )
}

const styles=StyleSheet.create({
    container:{
        padding:20,
        flex:1,
        justifyContent: 'center'
    },
    title:{
        fontSize:24,
        fontWeight:'bold',
        marginBottom:20,
        textAlign:'center'
    },
    input:{
        borderWidth:1,
        borderColor: '#ccc',
        padding:10,
        marginBottom:15,
        borderRadius:5
    },
})

export default RegisterScreen
