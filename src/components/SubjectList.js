import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';



const SubjectList = () => {
  const subjects = [
    'English Language',
    'Mathematics',
    'Science',
    'History',
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity className='bg-slate-900 p-4 m-2 rounded-lg py-10'>
      <Text className='text-red-300 text-lg font-nunito-semibold'>{item}</Text>
    </TouchableOpacity>
  );

  return (
    <View className="my-5">
      <Text className='text-2xl font-bold mb-4'>Subjects</Text>
      <FlatList
        data={subjects}
        renderItem={renderItem}
        keyExtractor={(item) => item}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default SubjectList;