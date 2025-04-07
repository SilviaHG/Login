import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useState } from 'react'
import { Alert, Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

const LoginScreen = ({ navigation }: any) => {
    //estado para el usuario y contraseña
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    //funcion para validar y redirijir

    const manejarLogin = async () => {
        //validar campos vacios
        if (!username || !password) {
            Alert.alert('Error', 'Por favor complete todos los campos')
            return
        }

        try {
            // Guardar el usuario en AsyncStorage (simulación de registro)
            const userData = await AsyncStorage.getItem('users') ?? '[]'
            const users = JSON.parse(userData);
            const user = users.find((u: any) => u.username === username && u.password === password);
            if (user) {
                await AsyncStorage.setItem('user', JSON.stringify(user));
                navigation.navigate('Home', { user: user.username });
            } else {
                Alert.alert('Error', 'Usuario o contraseña incorrectos')
                return;
            }

        } catch (error) {
            Alert.alert('Error', 'No se pudo validar el usuario')
            return;
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

            <TouchableOpacity onPress={() => navigation.navigate('Register')} >
                <Text style={styles.registerText} >¿No tienes cuenta? Registrate</Text>
            </TouchableOpacity>
        </View>


    )
}

const styles = StyleSheet.create({
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
    registerText: {
        marginTop: 20,
        textAlign: 'center',
        color: '#0066cc',
        textDecorationLine: 'underline'
    }
})

export default LoginScreen
