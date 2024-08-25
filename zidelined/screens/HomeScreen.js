import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, FlatList } from 'react-native';
import ContainerMain from '../src/components/ContainerMain';
import Header from '../src/components/Header';
import NavBar from '../src/components/NavBar';
import UserLink from '../src/components/UserLink';
import { useNavigation } from '@react-navigation/native';
// import StrandsComponent from '../components/StrandsComponent';
// import { useCurriculum } from '../hooks/useB4Curriculum';


export default function HomeScreen() {

  
  // const links = ["Home", "About", "Products", "Contacts", <UserLink onPress={() => navigation.navigate("Profile")} /> ];
  const links = ["Home", "Subjects"];

  return (
    <ContainerMain>

      <NavBar links={links} />
      <Header headerText="Welcome to the Home Screen" />

    </ContainerMain>
  );
};
