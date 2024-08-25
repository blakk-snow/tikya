import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text } from 'react-native';
import { initDatabase, setupDatabase } from './backend/UsersDBManager';
import AppNavigator from './navigators/AppNavigator';
import { insertDummyUsers } from './backend/insertDummyUsers';
// --------------------Nunito Font imports---------------------------
import {
  useFonts,
  Nunito_200ExtraLight,
  Nunito_300Light,
  Nunito_400Regular,
  Nunito_500Medium,
  Nunito_600SemiBold,
  Nunito_700Bold,
  Nunito_800ExtraBold,
  Nunito_900Black,
  Nunito_300Light_Italic,
  Nunito_400Regular_Italic,
  Nunito_500Medium_Italic,
  Nunito_600SemiBold_Italic,
  Nunito_700Bold_Italic,
  Nunito_900Black_Italic,
} from '@expo-google-fonts/nunito';

export default function App() {
  const [isDbReady, setIsDbReady] = useState(false);
  const [db, setDb] = useState(null);
  const [appIsReady, setAppIsReady] = useState(false);
  const [fontsLoaded] = useFonts({
    Nunito_200ExtraLight,
    Nunito_300Light,
    Nunito_400Regular,
    Nunito_500Medium,
    Nunito_600SemiBold,
    Nunito_700Bold,
    Nunito_800ExtraBold,
    Nunito_900Black,
    Nunito_300Light_Italic,
    Nunito_400Regular_Italic,
    Nunito_500Medium_Italic,
    Nunito_600SemiBold_Italic,
    Nunito_700Bold_Italic,
    Nunito_900Black_Italic,
  });

  useEffect(() => {
    const initDb = async () => {
      try {
        const database = await initDatabase();
        setDb(database);
        await setupDatabase(database);
        await insertDummyUsers(database);
        setIsDbReady(true);
      } catch (error) {
        console.error('Failed to initialize database:', error);
      }
    };

    initDb();
  }, []);

  useEffect(() => {
    const prepare = async () => {
      try {
        await SplashScreen.preventAutoHideAsync();
        if (fontsLoaded) {
          await SplashScreen.hideAsync();
          setAppIsReady(true);
        }
      } catch (error) {
        console.warn('Error during splash screen handling:', error);
      }
    };

    if (fontsLoaded) {
      prepare();
    }
  }, [fontsLoaded]);

  if (!isDbReady || !appIsReady) {
    return (
      <View className="flex-1 items-center justify-center bg-gray-100">
        <Text className="text-xl font-bold text-gray-800">Loading...</Text>
      </View>
    );
  }

  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}
