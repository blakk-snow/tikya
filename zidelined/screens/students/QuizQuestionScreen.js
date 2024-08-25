import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import db from '../database';

const QuizQuestionsScreen = ({ route, navigation }) => {
  const { quizId } = route.params;
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);

  useEffect(() => {
    fetchQuizQuestions();
  }, []);

  const fetchQuizQuestions = () => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM QuizQuestions WHERE quizId = ?',
        [quizId],
        (_, { rows: { _array } }) => setQuestions(_array),
        (_, error) => console.error('Error fetching quiz questions:', error)
      );
    });
  };

  const handleAnswer = (option) => {
    setSelectedOption(option);
    if (option === questions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
    } else {
      // Quiz finished, save results
      saveQuizResults();
    }
  };

  const saveQuizResults = () => {
    // Save quiz results to StudentQuizAttempts table
    // Navigate to results screen
  };

  // Render question and options
  // ...

  return (
    <View style={styles.container}>
      {/* Render question and options */}
      <TouchableOpacity style={styles.nextButton} onPress={nextQuestion}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
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

export default QuizQuestionsScreen;