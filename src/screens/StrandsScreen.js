import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import ContainerMain from '../components/ContainerMain';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import { useNavigation } from '@react-navigation/native';
import { curriculum } from '../data/B4Science'; // Import the curriculum data
import { Ionicons } from '@expo/vector-icons';


export default function StrandsScreen() {
  const navigation = useNavigation();
  const strands = Object.values(curriculum);
  
  const links = ["Home", "B5", "B6", "B7", "B8", "B9"];

  return (
    <ContainerMain>

      <NavBar links={links} />
      {/* <Header headerText="Welcome to the Home Screen" /> */}

      <ScrollView contentContainerStyle={{padding: 16}}>
        {strands.map((strand) => (
        <TouchableOpacity 
          key={strand.id}
          className='flex-row flex-1 items-center bg-slate-900 border border-slate-600 border-b-gray-600 rounded-md p-2 mb-3 shadow-lg shadow-black'
          onPress={() => navigation.navigate('SubStrands', { strand })}
          >
          <Ionicons name="document" size={20} style={{ marginRight: 15, color: '#FCA5A5' }} />
          <Text className='flex-1 text-md text-slate-400 font-nunito-medium'>{strand.name}</Text>
          <Ionicons name="chevron-forward-outline" size={20} style={{ color: '#FCA5A5' }} />
        </TouchableOpacity>
        ))}
      </ScrollView>


    </ContainerMain>
  );
};
