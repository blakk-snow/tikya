import React from 'react';
import { SafeAreaView, ScrollView, View, TextInput, Text, TouchableOpacity, Alert, Image, FlatList, Linking } from "react-native";
import { AntDesign } from '@expo/vector-icons';


export default function ContactScreen({ navigation }) {
    const handleCallSupport = () => {
        Linking.openURL('tel:+233503606073');
    }
    const handleEmailSupport = () => {
        Linking.openURL('mailto:24blakks@gmail.com');
    }

  return (
    <SafeAreaView className='flex-1 bg-slate-800'>
        <ScrollView contentContainerStyle={{padding: 20, marginTop: 20}}>
            <View className='flex-row items-center mb-6 mt-5'>
                <TouchableOpacity onPress={() => navigation.goBack()} className='mr-4'>
                    <AntDesign name='arrowleft' size={24} color='#4caf50' />
                </TouchableOpacity>
                    <Text className='text-2xl font-nunito-bold text-fuchsia-300'>Customer Service</Text>
            </View>

            <View className='bg-slate-900 rounded-lg shadow-lg p-6 mb-6'>
                    <Text className='text-xl font-nunito-bold text-slate-200 mb-4'>About Tikya!</Text>
                    <Text className='text-base font-nunito-regular text-slate-400 mb-4'>Tikya! is a comprehensive class management system designed to streamline
                        student management, attendance management, and assessment processes for educational institutions. Our app allows you to easily create, manage, and track student attendance, 
                        related information, and academic performance.</Text>
            </View>

            <View className='bg-slate-900 rounded-lg shadow-lg p-6 mb-6'>
                <Text className='text-xl font-nunito-bold text-slate-200 mb-4'>Contact Support</Text>
                <Text className='text-base font-nunito-regular text-slate-400 mb-4'>If you need assistance or have any questions, our support team is here to help.</Text>

                <TouchableOpacity className='flex-row items-center mb-4' onPress={handleCallSupport}>
                    <AntDesign name='phone' size={24} color='#4caf50' />
                    <Text className='text-lg font-nunito-semibold text-red-300 ml-4'>Call Support</Text>
                </TouchableOpacity>

                <TouchableOpacity className='flex-row items-center mb-4' onPress={handleEmailSupport}>
                    <AntDesign name='mail' size={24} color='#2196f3' />
                    <Text className='text-lg font-nunito-semibold text-red-300 ml-4'>Email Support</Text>
                </TouchableOpacity>
            </View>

            <View className='bg-slate-900 rounded-lg shadow-lg p-6 mb-6'>
                <Text className='text-xl font-nunito-semibold text-slate-200 ml-4'>FAQs</Text>
                <Text className='text-base font-nunito-semibold text-slate-400 ml-4 border-b border-b-slate-400 pb-2'>How can I create a new Class?</Text>
                <Text className='text-base font-nunito-semibold text-slate-300 ml-4'>To create a new class, navigate to the "Class Manager" section and tap on the "Create New Bill"
                    TouchableOpacity. Fill the form with the required information and submit to create.
                </Text>

                <TouchableOpacity className='flex-row items-center my-4 ml-4' onPress={()=> navigation.navigate('FAQs')}>
                    <AntDesign name='customerservice' size={24} color='#2196f3' />
                    <Text className='text-lg font-nunito-semibold text-blue-300 mx-4'>Frequently Asked Questions</Text>
                </TouchableOpacity>
                
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}