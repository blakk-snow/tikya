import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { useCurriculum } from '../hooks/useB4Curriculum';


const SubStrandsComponent = () => {
    const { subStrands, selectSubStrand, selectedStrand } = useCurriculum();
  
    if (!selectedStrand) return null;
  
    return (
      <FlatList
        data={subStrands}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => selectSubStrand(item)}>
            <Text>{curriculum[selectedStrand].subStrands[item].name}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item}
      />
    );
};


export default SubStrandsComponent;