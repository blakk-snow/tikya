import React, { useState } from 'react';
import { View, TextInput, Text, Button } from 'react-native';
import useUserManagement from '../hooks/useUserManagement';




const RegisterForm = () => {
  const { registerUser } = useUserManagement();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');

  const handleRegister = async () => {
    const userInfo = { username, password, role };
    await registerUser(userInfo);
    // You can handle further navigation or alerts here
  };

  return (
    <View className="flex-1 justify-center p-4 bg-white">
      <Text className="text-xl font-semibold mb-4">Register</Text>

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

      <TextInput
        className="border border-gray-300 rounded p-2 mb-4"
        placeholder="Role"
        value={role}
        onChangeText={setRole}
      />

      <Button title="Register" onPress={handleRegister} />
    </View>
  );
};

export default RegisterForm;
