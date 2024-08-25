import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import db from '../database';

const RevisionScreen = ({ navigation }) => {
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    fetchSubjects();
  }, []);

  const fetchSubjects = () => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM Subjects',
        [],
        (_, { rows: { _array } }) => setSubjects(_array),
        (_, error) => console.error('Error fetching subjects:', error)
      );
    });
  };

  const renderSubjectItem = ({ item }) => (
    <TouchableOpacity
      style={styles.subjectItem}
      onPress={() => navigation.navigate('RevisionMaterials', { subjectId: item.id })}
    >
      <Text style={styles.subjectTitle}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Revision Materials</Text>
      <FlatList
        data={subjects}
        renderItem={renderSubjectItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  subjectItem: {
    backgroundColor: '#f0f0f0',
    padding: 16,
    marginBottom: 8,
    borderRadius: 8,
  },
  subjectTitle: {
    fontSize: 18,
  },
});

export default RevisionScreen;