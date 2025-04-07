import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useEffect } from 'react'
import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native'

const SplashScreen = ({ navigation }: any) => {
    useEffect(() => {
        const VerifySession = async () => {
            const user = await AsyncStorage.getItem('userActive')
            setTimeout(() => {
                if (user) {
                    const data = JSON.parse(user)
                    navigation.replace('Home', { user: data.username })
                } else {
                    navigation.replace('Login')
                }
            }, 2000)
        }
        VerifySession();
    }, [])
    return (
        <View style={styles.container}>
            <ActivityIndicator size={'large'} color="#000fff" style={{ marginBottom: 20 }} />

            {/* <Text style={styles.text}>Cargando...</Text>
            <Image source={require('../assets/logo.png')} style={{ width: 200, height: 200 }} /> */}

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffcc00'
    },
    text: {
        fontSize: 22,
        color: '#fff'
    }
})

export default SplashScreen
