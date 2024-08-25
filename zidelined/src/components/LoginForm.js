import React, { useState } from 'react';
import { View, TextInput, Text, Button, Alert } from 'react-native';
import useUserManagement from '../hooks/useUserManagement';



const LoginForm = () => {
  const { loginUser } = useUserManagement();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [loginError, setLoginError] = useState(null);

  const handleLogin = async () => {
    setLoginError(null);
    if (!username || !password) {
      setLoginError('Username and password are required');
      return;
    }
  
    try {
      const isAuthenticated = await loginUser(username, password);
      if (isAuthenticated) {
        Alert.alert("Success", "Logged in Successfully.");
        console.log('Logged in successfully');
        // TODO: Navigate to the next screen or update app state
      } else {
        setLoginError('Invalid username or password');
        Alert.alert("Error", "Invalid username or password");
      }
    } catch (error) {
      setLoginError('An error occurred during login');
      Alert.alert("Error", "An error occurred during login");
      console.error('Login error:', error);
    }
  };
  

  return (
    <View className="flex-1 justify-center p-4 bg-white">
      <Text className="text-xl font-semibold mb-4">Login</Text>

      <TextInput
        className="border border-gray-300 rounded p-2 mb-4"
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />

      <TextInput
        className="border border-gray-300 rounded p-2 mb-4"
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />

        {loginError && (
          <Text className="text-red-500 mb-4">{loginError}</Text>
        )}

      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default LoginForm;
