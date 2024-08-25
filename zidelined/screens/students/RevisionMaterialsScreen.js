import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import db from '../database';

const RevisionMaterialsScreen = ({ route, navigation }) => {
  const { subjectId } = route.params;
  const [materials, setMaterials] = useState([]);

  useEffect(() => {
    fetchMaterials();
  }, []);

  const fetchMaterials = () => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM RevisionMaterials WHERE subjectId = ?',
        [subjectId],
        (_, { rows: { _array } }) => setMaterials(_array),
        (_, error) => console.error('Error fetching materials:', error)
      );
    });
  };

  const renderMaterialItem = ({ item }) => (
    <TouchableOpacity
      style={styles.materialItem}
      onPress={() => navigation.navigate('RevisionContent', { materialId: item.id })}
    >
      <Text style={styles.materialTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Revision Materials</Text>
      <FlatList
        data={materials}
        renderItem={renderMaterialItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  // ... (similar to RevisionScreen styles)
});

export default RevisionMaterialsScreen;