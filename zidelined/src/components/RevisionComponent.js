import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { useCurriculum } from '../hooks/useB4Curriculum';


const RevisionComponent = () => {
    const { 
      selectedIndicator, 
      revisionNotes, 
      questions, 
      addRevisionNote, 
      addQuestion 
    } = useCurriculum();
  
    if (!selectedIndicator) return null;
  
    return (
      <View>
        <Text>Revision Notes:</Text>
        {revisionNotes[selectedIndicator]?.map((note, index) => (
          <Text key={index}>{note}</Text>
        ))}
        <TouchableOpacity onPress={() => addRevisionNote(selectedIndicator, "New note")}>
          <Text>Add Note</Text>
        </TouchableOpacity>
  
        <Text>Questions:</Text>
        {questions[selectedIndicator]?.map((question, index) => (
          <Text key={index}>{question}</Text>
        ))}
        <TouchableOpacity onPress={() => addQuestion(selectedIndicator, "New question")}>
          <Text>Add Question</Text>
        </TouchableOpacity>
      </View>
    );
  };


export default RevisionComponent;