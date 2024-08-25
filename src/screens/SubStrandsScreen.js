import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import ContainerMain from '../components/ContainerMain';
import NavBar from '../components/NavBar';



export default function SubStrandsScreen({ route }) {
  const { strand } = route.params;
  const subStrands = Object.values(strand.subStrands);
  
  const links = ["Home", "B5", "B6", "B7", "B8", "B9"];

  return (
    <ContainerMain>

      <NavBar links={links} />
      {/* <Header headerText="Welcome to the Home Screen" /> */}

      <ScrollView>
        <Text className='text-red-300 text-2xl font-nunito-bold my-4 border-b border-b-red-300 pb-4'>{strand.name}</Text>
        {subStrands.map((subStrand) => (
          <View key={subStrand.id} className='p-4 bg-slate-900 mb-4 rounded-lg'>
            <Text className='text-fuchsia-200 text-xl font-nunito-black mb-2'>{subStrand.name}</Text>
            <Text className='text-slate-200 text-sm font-nunito-regular'>
              {Object.values(subStrand.contentStandards)
                .map(cs => cs.description)
                .join('\n')}
            </Text>
          </View>
        ))}
      </ScrollView>


    </ContainerMain>
  );
};
