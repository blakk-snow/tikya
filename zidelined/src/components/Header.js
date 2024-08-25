import React from 'react';
import { View, Text } from 'react-native';


const Header = ({ headerText }) => {
  
  return (
    <View className="flex-1 justify-center items-center my-5">
      <Text className="text-xl text-slate-400 font-nunito-semibold">{headerText}</Text>
    </View>
  );
};


export default Header;
