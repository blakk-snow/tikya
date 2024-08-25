import React from 'react';
import { View, Text } from 'react-native';

export default function SubHeading({subheading_text}) {
  return (
    <View className='justify-center items-center mt-2'>
        <Text className="text-sm font-nunito-extrabold text-red-300 border-b border-b-gray-500 pb-2">
        {subheading_text}
        </Text>
    </View>
  )
}