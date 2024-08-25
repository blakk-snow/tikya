import { StatusBar } from "expo-status-bar";
import React from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import NamedGreeting from '../utils/NamedGreeting';
import CurrentDate from '../utils/CurrentDate';


const ContainerMain = ({ children, links }) => {
  return (
    <SafeAreaView className="flex-1 bg-slate-800">
      <StatusBar style="light" />
      <ScrollView
        contentContainerStyle="flex-grow justify-center items-center"
        showsVerticalScrollIndicator={false}
      >
        <View className="w-full max-w-lg p-6 mt-5">
          <View className="border-b border-slate-600 pb-4">
          {/* Brand */}
            <Text className='text-3xl text-fuchsia-300 font-nunito-black mt-5'>Tikya!</Text>
          {/* Greeting Text */}
            <NamedGreeting />
          </View>
            <CurrentDate />

          {/* DateLine */}

          {/* Render child components */}
          {children}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ContainerMain;
