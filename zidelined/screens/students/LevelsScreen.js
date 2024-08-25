import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, FlatList } from 'react-native';
import ContainerMain from '../components/ContainerMain';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import { useNavigation } from '@react-navigation/native';



export default function LevelsScreen() {
  const navigation = useNavigation();
  
  const links = ["Home", "Classes", "Subjects", "Strands"];

  return (
    <ContainerMain>

      <NavBar links={links} />
      <Header headerText="Select Your Level" />



      
    </ContainerMain>
  );
};
