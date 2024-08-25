import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import db from '../database';

const QuizScreen = ({ navigation }) => {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    fetchQuizzes();
  }, []);

  const fetchQuizzes = () => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT Quizzes.*, Subjects.name as subjectName FROM Quizzes JOIN Subjects ON Quizzes.subjectId = Subjects.id',
        [],
        (_, { rows: { _array } }) => setQuizzes(_array),
        (_, error) => console.error('Error fetching quizzes:', error)
      );
    });
  };

  const renderQuizItem = ({ item }) => (
    <TouchableOpacity
      style={styles.quizItem}
      onPress={() => navigation.navigate('QuizQuestions', { quizId: item.id })}
    >
      <Text style={styles.quizTitle}>{item.title}</Text>
      <Text style={styles.quizSubject}>{item.subjectName}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Available Quizzes</Text>
      <FlatList
        data={quizzes}
        renderItem={renderQuizItem}
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

export default QuizScreen;