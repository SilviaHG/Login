import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen name='Login' component={LoginScreen}
        options={{ title: 'Iniciar Sesión' }} />

      <Stack.Screen name='Register' component={RegisterScreen}
        options={{ title: 'Registro' }} />

      <Stack.Screen name='Home' component={HomeScreen}
        options={{ title: 'Bienvenido' }} />
    </Stack.Navigator>
  )
}

export default StackNavigator
