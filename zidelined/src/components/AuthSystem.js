import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const USERS_STORAGE_KEY = '@users';

const RegisterForm = ({ onRegister }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');

  const handleRegister = () => {
    onRegister({ username, password, role });
  };

  return (
    <View className="p-4">
      <Text className="text-xl font-bold mb-4">Register</Text>
      <TextInput
        className="border border-gray-300 rounded-md p-2 mb-2"
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        className="border border-gray-300 rounded-md p-2 mb-2"
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TextInput
        className="border border-gray-300 rounded-md p-2 mb-4"
        placeholder="Role"
        value={role}
        onChangeText={setRole}
      />
      <TouchableOpacity
        className="bg-blue-500 rounded-md p-2"
        onPress={handleRegister}
      >
        <Text className="text-white text-center">Register</Text>
      </TouchableOpacity>
    </View>
  );
};

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    onLogin({ username, password });
  };

  return (
    <View className="p-4">
      <Text className="text-xl font-bold mb-4">Login</Text>
      <TextInput
        className="border border-gray-300 rounded-md p-2 mb-2"
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        className="border border-gray-300 rounded-md p-2 mb-4"
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity
        className="bg-green-500 rounded-md p-2"
        onPress={handleLogin}
      >
        <Text className="text-white text-center">Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const AuthSystem = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [showRegister, setShowRegister] = useState(false);

  useEffect(() => {
    checkLoginStatus();
  }, []);

  const checkLoginStatus = async () => {
    const user = await AsyncStorage.getItem('@current_user');
    if (user) {
      setIsLoggedIn(true);
      setCurrentUser(JSON.parse(user));
    }
  };

  const handleRegister = async (userData) => {
    try {
      const existingUsers = await AsyncStorage.getItem(USERS_STORAGE_KEY);
      const users = existingUsers ? JSON.parse(existingUsers) : [];
      
      if (users.some(user => user.username === userData.username)) {
        alert('Username already exists');
        return;
      }
      
      users.push(userData);
      await AsyncStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
      alert('Registration successful');
      setShowRegister(false);
    } catch (error) {
      console.error('Error during registration:', error);
      alert('Registration failed');
    }
  };

  const handleLogin = async (credentials) => {
    try {
      const existingUsers = await AsyncStorage.getItem(USERS_STORAGE_KEY);
      const users = existingUsers ? JSON.parse(existingUsers) : [];
      
      const user = users.find(
        u => u.username === credentials.username && u.password === credentials.password
      );
      
      if (user) {
        await AsyncStorage.setItem('@current_user', JSON.stringify(user));
        setIsLoggedIn(true);
        setCurrentUser(user);
      } else {
        alert('Invalid credentials');
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('Login failed');
    }
  };

  const handleLogout = async () => {
    await AsyncStorage.removeItem('@current_user');
    setIsLoggedIn(false);
    setCurrentUser(null);
  };

  if (isLoggedIn) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text className="text-xl mb-4">Welcome, {currentUser.username}!</Text>
        <Text className="mb-4">Role: {currentUser.role}</Text>
        <TouchableOpacity
          className="bg-red-500 rounded-md p-2"
          onPress={handleLogout}
        >
          <Text className="text-white">Logout</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View className="flex-1 justify-center">
      {showRegister ? (
        <RegisterForm onRegister={handleRegister} />
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
      <TouchableOpacity
        className="mt-4"
        onPress={() => setShowRegister(!showRegister)}
      >
        <Text className="text-blue-500 text-center">
          {showRegister ? 'Already have an account? Login' : 'Need an account? Register'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default AuthSystem;