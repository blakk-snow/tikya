import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, FlatList } from 'react-native';
import ContainerMain from '../components/ContainerMain';
import Header from '../components/Header';
import NavBar from '../components/NavBar';



export default function HomeScreen() {

  
  // const links = ["Home", "About", "Products", "Contacts", <UserLink onPress={() => navigation.navigate("Profile")} /> ];
  const links = ["Home", "Strands"];

  return (
    <ContainerMain>

      <NavBar links={links} />
      <Header headerText="Welcome to the Home Screen" />

    </ContainerMain>
  );
};
