import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { useCurriculum } from '../hooks/useB4Curriculum';



const IndicatorsComponent = () => {
    const { 
        indicators, 
        selectIndicator, 
        selectedStrand, 
        selectedSubStrand, 
        selectedContentStandard 
    } = useCurriculum();

    if (!selectedContentStandard) return null;

return (
    <FlatList
    data={indicators}
    renderItem={({ item }) => (
        <TouchableOpacity onPress={() => selectIndicator(item)}>
        <Text>{item}</Text>
        </TouchableOpacity>
    )}
    keyExtractor={item => item}
    />
);
};

export default IndicatorsComponent;
