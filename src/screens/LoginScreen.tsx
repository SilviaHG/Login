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
        <Button title="Ingresar" onPress={manejarLogin} color="#ffcc00" />
    </View>
  )
}

const styles=StyleSheet.create({
    container: {
        justifyContent: 'center',
        padding: 30,
        flex: 1,
        backgroundColor: '#f5f5f5', // Fondo claro y neutro
        alignItems: 'center',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 40,
        textAlign: 'center',
        color: '#3b3b3b', // Color gris oscuro para el título
        letterSpacing: 1.5,
    },
    input: {
        padding: 14,
        marginBottom: 20,
        width: '100%',
        borderRadius: 12,
        backgroundColor: '#ffffff', // Fondo blanco para los inputs
        borderColor: '#d1d1d1', // Bordes grises suaves
        borderWidth: 1,
        color: '#3b3b3b', // Texto oscuro para mejor contraste
        fontSize: 16,
    },
    button: {
        padding: 15,
        backgroundColor: '#f5a623', // Naranja suave para el botón
        width: '100%',
        borderRadius: 12,
        color: '#ffffff', // Texto blanco para contraste
        fontSize: 18,
    },
})

export default LoginScreen
