import React from 'react';
import { FlatList, TouchableOpacity, Text } from 'react-native';
import { useCurriculumContext } from '../contexts/CurriculumContext';

const StrandComponent = ({ strands, onSelectStrand }) => {
  const { curriculum } = useCurriculumContext();

  return (
    <FlatList
      data={strands}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => onSelectStrand(item)}>
          <Text>{curriculum[item].name}</Text>
        </TouchableOpacity>
      )}
      keyExtractor={item => item}
    />
  );
};

export default StrandComponent;