import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { useCurriculum } from '../hooks/useB4Curriculum';



const ContentStandardsComponent = () => {
    const { 
        contentStandards, 
        selectContentStandard, 
        selectedStrand, 
        selectedSubStrand 
    } = useCurriculum();

    if (!selectedSubStrand) return null;

return (
    <FlatList
    data={contentStandards}
    renderItem={({ item }) => (
        <TouchableOpacity onPress={() => selectContentStandard(item)}>
        <Text>{curriculum[selectedStrand].subStrands[selectedSubStrand].contentStandards[item].description}</Text>
        </TouchableOpacity>
    )}
    keyExtractor={item => item}
    />
);
};


export default ContentStandardsComponent;