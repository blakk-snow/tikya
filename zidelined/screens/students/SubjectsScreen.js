import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, FlatList } from 'react-native';
import ContainerMain from '../../src/components/ContainerMain';
import Header from '../../src/components/Header';
import NavBar from '../../src/components/NavBar';
import { useNavigation } from '@react-navigation/native';
import SubjectList from '../../src/components/SubjectList';



export default function SubjectssScreen() {
  const navigation = useNavigation();
  
  const links = ["Home", "Strands"];

  return (
    <ContainerMain>

      <NavBar links={links} />
      <Header headerText="Choose Your Preferred Subject" />

      <SubjectList/>
      
    </ContainerMain>
  );
};
