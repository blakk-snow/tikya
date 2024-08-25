import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Import your screens here
import HomeScreen from '../screens/HomeScreen';
import ProductsScreen from '../screens/ProductsScreen';
import AboutScreen from '../screens/AboutScreen';
import ContactScreen from '../screens/ContactScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SubjectsScreen from '../screens/students/SubjectsScreen';
import StrandsScreen from '../screens/students/StrandsScreen';
import SubStrandsScreen from '../screens/students/SubStrandsScreen';
import ContentStandardsScreen from '../screens/students/ContentStandardsScreen';
import IndicatorsScreen from '../screens/students/IndicatorsScreen';

const Stack = createStackNavigator();



const AppNavigator = () => (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Products" component={ProductsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="About" component={AboutScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Contacts" component={ContactScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="Start" component={SubjectsScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="Subjects" component={SubjectsScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="Strands" component={StrandsScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="SubStrands" component={SubStrandsScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="ContentStandards" component={ContentStandardsScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="Indicators" component={IndicatorsScreen} options={{ headerShown: false }}/>
    </Stack.Navigator>
);

export default AppNavigator;