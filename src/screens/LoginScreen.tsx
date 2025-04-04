import React, { useState } from 'react'
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native'

const LoginScreen = ({navigation}:any) => {
    //estado para el usuario y contraseña
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    //funcion para validar y redirijir

    const manejarLogin=() =>{
        //validar campos vacios
        if(!username  || !password ){
            Alert.alert('Error','Por favor complete todos los campos')
            return
        }

        if(username === 'admin' && password === '1234'){
            navigation.navigate('Home', {user:username });
        }else{
            Alert.alert('Error','Usuario o contraseña incorrectos')
        }
    }

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Iniciar Sesión</Text>
        <TextInput
            style={styles.input}
            placeholder="Usuario"
            value={username}
            onChangeText={setUsername}
        />
        <TextInput
            style={styles.input}
            placeholder="Contraseña"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
        />
        <Button title="Ingresar" onPress={manejarLogin} />
    </View>
  )
}

const styles=StyleSheet.create({
    container:{
        justifyContent: 'center',
        padding:20,
        flex:1
    },
    title:{
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center'
    },
    input:{
        padding: 10,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#ccc'
    },
    button:{
        padding: 10,
        backgroundColor: '#4CAF50',
        marginTop: 20,
    }
})

export default LoginScreen
