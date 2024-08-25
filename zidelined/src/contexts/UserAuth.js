import AsyncStorage from '@react-native-async-storage/async-storage';

const AUTH_TOKEN_KEY = '@auth_token';

export const login = async (token) => {
  try {
    await AsyncStorage.setItem(AUTH_TOKEN_KEY, token);
    return true;
  } catch (error) {
    console.error('Error storing auth token', error);
    return false;
  }
};

export const logout = async () => {
  try {
    await AsyncStorage.removeItem(AUTH_TOKEN_KEY);
    return true;
  } catch (error) {
    console.error('Error removing auth token', error);
    return false;
  }
};

export const getAuthToken = async () => {
  try {
    const token = await AsyncStorage.getItem(AUTH_TOKEN_KEY);
    return token;
  } catch (error) {
    console.error('Error getting auth token', error);
    return null;
  }
};

export const isAuthenticated = async () => {
  const token = await getAuthToken();
  return token != null;
};