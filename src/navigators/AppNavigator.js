import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import your screens here
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import StrandsScreen from '../screens/StrandsScreen';
import SubStrandsScreen from '../screens/SubStrandsScreen';


const Stack = createStackNavigator();



const AppNavigator = () => (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Strands" component={StrandsScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="SubStrands" component={SubStrandsScreen} options={{ headerShown: false }}/>

    </Stack.Navigator>
);

export default AppNavigator;