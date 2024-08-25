import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Import your screens here
import HomeScreen from './screens/HomeScreen';





const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const StudentTabs = () => (
    <Tab.Navigator>
      <Tab.Screen name="Revision" component={RevisionStack} />
      <Tab.Screen name="Quiz" component={QuizStack} />
    </Tab.Navigator>
);
  
const RevisionStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="RevisionSubjects" component={RevisionScreen} />
    <Stack.Screen name="RevisionNotes" component={RevisionMaterialsScreen} />
    <Stack.Screen name="RevisionContent" component={RevisionContentScreen} />
  </Stack.Navigator>
);
  
const QuizStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="QuizList" component={QuizScreen} />
    <Stack.Screen name="QuizQuestions" component={QuizQuestionsScreen} />
    <Stack.Screen name="QuizResults" component={QuizResultsScreen} />
  </Stack.Navigator>
);



const TeacherTabs = () => (
  <Tab.Navigator>
    <Tab.Screen name="CreateClass" component={CreateClassScreen} />
    <Tab.Screen name="AddStudents" component={AddStudentsScreen} />
    <Tab.Screen name="AddSubjects" component={AddSubjectsScreen} />
    <Tab.Screen name="CreateTests" component={CreateTestsScreen} />
    <Tab.Screen name="RecordAssessmentScores" component={RecordAssessmentScoresScreen} />
    <Tab.Screen name="TakeAttendance" component={TakeAttendanceScreen} />
  </Tab.Navigator>
);

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="StudentNavigator" component={StudentTabs} />
      <Stack.Screen name="TeacherNavigator" component={TeacherTabs} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;