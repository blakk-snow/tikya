import React from 'react';
import { View, Text } from 'react-native';
import { useCurriculumContext } from '../../src/contexts/CurriculumContext';
import StrandComponent from '../../src/components/StrandsComponent';



export default function StrandsScreen() {
    const { strands, selectStrand } = useCurriculumContext();

    const handleStrandSelect = (strand) => {
      selectStrand(strand);
      navigation.navigate('SubStrands');
    };

  return (
    <View>
      <StrandComponent strands={strands} onSelectStrand={handleStrandSelect} />
    </View>
  )
};