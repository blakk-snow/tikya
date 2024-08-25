import React from 'react';
import { View, Text } from 'react-native';

const Greeting = () => {
  const getGreeting = () => {
    const currentHour = new Date().getHours();
    
    if (currentHour >= 5 && currentHour < 12) {
      return 'Good morning';
    } else if (currentHour >= 12 && currentHour < 18) {
      return 'Good afternoon';
    } else {
      return 'Good evening';
    }
  };

  return (
    <View className='p-2'>
      <Text className='text-base font-nunito-medium'>{getGreeting()}</Text>
    </View>
  );
};



export default Greeting;