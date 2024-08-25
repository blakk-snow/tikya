import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CurrentDate = () => {


    // Get the current date
    const currentDate = new Date();

    // // Format the date (example: MM/DD/YYYY)
    // const formattedDate = `${currentDate.getMonth() + 1} / ${currentDate.getDate()} / ${currentDate.getFullYear()}`;

    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = currentDate.toLocaleDateString('en-US', options);


  return (
    <View className='border-b border-slate-600 py-4'>
      <Text className='text-slate-400 text-md font-nunito-extralight'>{formattedDate}</Text>
    </View>
  );
};


export default CurrentDate;