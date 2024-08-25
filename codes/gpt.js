import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('education.db');

// Creating Tables
const createTables = () => {
  db.transaction(tx => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS Users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        role TEXT NOT NULL,
        name TEXT NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL
      );`
    );

    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS Classes (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        teacher_id INTEGER NOT NULL,
        class_name TEXT NOT NULL,
        FOREIGN KEY (teacher_id) REFERENCES Users(id)
      );`
    );

    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS Students (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER NOT NULL,
        class_id INTEGER NOT NULL,
        FOREIGN KEY (user_id) REFERENCES Users(id),
        FOREIGN KEY (class_id) REFERENCES Classes(id)
      );`
    );

    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS Subjects (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        subject_name TEXT NOT NULL
      );`
    );

    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS Tests (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        class_id INTEGER NOT NULL,
        subject_id INTEGER NOT NULL,
        test_name TEXT NOT NULL,
        max_score INTEGER NOT NULL,
        FOREIGN KEY (class_id) REFERENCES Classes(id),
        FOREIGN KEY (subject_id) REFERENCES Subjects(id)
      );`
    );

    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS AssessmentScores (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        student_id INTEGER NOT NULL,
        test_id INTEGER NOT NULL,
        score INTEGER NOT NULL,
        FOREIGN KEY (student_id) REFERENCES Students(id),
        FOREIGN KEY (test_id) REFERENCES Tests(id)
      );`
    );

    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS Attendance (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        student_id INTEGER NOT NULL,
        class_id INTEGER NOT NULL,
        date TEXT NOT NULL,
        status TEXT NOT NULL,
        FOREIGN KEY (student_id) REFERENCES Students(id),
        FOREIGN KEY (class_id) REFERENCES Classes(id)
      );`
    );
  });
};

//export default createTables;



import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StudentScreen from './screens/StudentScreen';
import TeacherScreen from './screens/TeacherScreen';

// Placeholder screens for options
import RevisionScreen from './screens/RevisionScreen';
import QuizScreen from './screens/QuizScreen';
import CreateClassScreen from './screens/CreateClassScreen';
import AddStudentScreen from './screens/AddStudentScreen';
import AddSubjectScreen from './screens/AddSubjectScreen';
import CreateTestScreen from './screens/CreateTestScreen';
import RecordScoresScreen from './screens/RecordScoresScreen';
import AttendanceScreen from './screens/AttendanceScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function StudentNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Revision" component={RevisionScreen} />
      <Tab.Screen name="Quiz" component={QuizScreen} />
    </Tab.Navigator>
  );
}

function TeacherNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="CreateClass" component={CreateClassScreen} />
      <Tab.Screen name="AddStudents" component={AddStudentScreen} />
      <Tab.Screen name="AddSubjects" component={AddSubjectScreen} />
      <Tab.Screen name="CreateTests" component={CreateTestScreen} />
      <Tab.Screen name="RecordScores" component={RecordScoresScreen} />
      <Tab.Screen name="Attendance" component={AttendanceScreen} />
    </Tab.Navigator>
  );
}

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="UserOptions">
        <Stack.Screen name="StudentOptions" component={StudentNavigator} />
        <Stack.Screen name="TeacherOptions" component={TeacherNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
