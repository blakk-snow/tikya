import React, { useState } from 'react';
import { View, Text } from 'react-native';
import ContainerMain from '../src/components/ContainerMain';
import NavBar from '../src/components/NavBar';
import Header from '../src/components/Header';
import UserLink from '../src/components/UserLink';
import { useNavigation } from '@react-navigation/native';
import Tabs from '../src/components/TabLayoutFlat';
import LoginForm from '../src/components/LoginForm';
import RegisterForm from '../src/components/RegisterForm';
import UserProfile from "../src/components/UserProfile";


export default function ProfileScreen() {
  const [activeTab, setActiveTab] = useState(0);
  const navigation = useNavigation();
  
  const links = ["Home", "About", "Products", "Contacts", ];
  
  // const tabs = [
  //   { label: 'Login' },
  //   { label: 'Register' },
  //   { label: 'Settings' },
  // ];

  // const renderContent = () => {
  //   switch (activeTab) {
  //     case 0:
  //       return <LoginForm />;
  //     case 1:
  //       return <RegisterForm />;
  //     case 2:
  //       return <UserProfile />;
  //     default:
  //       return null;
  //   }
  // };

  return (
    <ContainerMain>
      <NavBar links={links} />
      <Header headerText="Welcome to the Profile Screen" />
      <View className="flex-1">
      {/* <Tabs
        tabs={tabs}
        initialTab={0}
        onTabChange={(index) => setActiveTab(index)}
      /> */}
      {/* <LoginForm/> */}
    </View>
    </ContainerMain>
  );
};
