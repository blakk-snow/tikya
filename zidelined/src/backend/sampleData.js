import db from './database';


const db = await SQLite.openDatabaseAsync('databaseName');

// `execAsync()` is useful for bulk queries when you want to execute altogether.
// Please note that `execAsync()` does not escape parameters and may lead to SQL injection.
await db.execAsync(`
PRAGMA journal_mode = WAL;
CREATE TABLE IF NOT EXISTS test (id INTEGER PRIMARY KEY NOT NULL, value TEXT NOT NULL, intValue INTEGER);
INSERT INTO test (value, intValue) VALUES ('test1', 123);
INSERT INTO test (value, intValue) VALUES ('test2', 456);
INSERT INTO test (value, intValue) VALUES ('test3', 789);
`);



export const insertSampleData = () => {
  db.transaction(tx => {
    // Sample Users
    tx.executeSql('INSERT INTO Users (username, password, role) VALUES (?, ?, ?)', ['student1', 'password123', 'student']);
    tx.executeSql('INSERT INTO Users (username, password, role) VALUES (?, ?, ?)', ['teacher1', 'password456', 'teacher']);

    // Sample Revision Materials
    tx.executeSql('INSERT INTO RevisionMaterials (subject, title, content) VALUES (?, ?, ?)', 
      ['Math', 'Algebra Basics', 'Algebra is a branch of mathematics dealing with symbols and the rules for manipulating those symbols...']);
    tx.executeSql('INSERT INTO RevisionMaterials (subject, title, content) VALUES (?, ?, ?)', 
      ['Science', 'Introduction to Biology', 'Biology is the study of living organisms, their structure, function, growth, evolution, and distribution...']);

    // Sample Quizzes
    tx.executeSql('INSERT INTO Quizzes (subject, title) VALUES (?, ?)', ['Math', 'Algebra Quiz']);
    tx.executeSql('INSERT INTO Quizzes (subject, title) VALUES (?, ?)', ['Science', 'Biology Quiz']);

    // Sample Quiz Questions for Math
    tx.executeSql('INSERT INTO QuizQuestions (quizId, question, correctAnswer) VALUES (?, ?, ?)', 
      [1, 'What is the value of x in the equation 2x + 5 = 13?', '4']);
    tx.executeSql('INSERT INTO QuizQuestions (quizId, question, correctAnswer) VALUES (?, ?, ?)', 
      [1, 'Simplify: 3(x + 2) - 2x', 'x + 6']);

    // Sample Quiz Options for Math
    tx.executeSql('INSERT INTO QuizOptions (questionId, optionText) VALUES (?, ?)', [1, '3']);
    tx.executeSql('INSERT INTO QuizOptions (questionId, optionText) VALUES (?, ?)', [1, '4']);
    tx.executeSql('INSERT INTO QuizOptions (questionId, optionText) VALUES (?, ?)', [1, '5']);
    tx.executeSql('INSERT INTO QuizOptions (questionId, optionText) VALUES (?, ?)', [1, '6']);

    tx.executeSql('INSERT INTO QuizOptions (questionId, optionText) VALUES (?, ?)', [2, 'x + 6']);
    tx.executeSql('INSERT INTO QuizOptions (questionId, optionText) VALUES (?, ?)', [2, '5x + 6']);
    tx.executeSql('INSERT INTO QuizOptions (questionId, optionText) VALUES (?, ?)', [2, 'x + 4']);
    tx.executeSql('INSERT INTO QuizOptions (questionId, optionText) VALUES (?, ?)', [2, '3x + 6']);

    // Sample Quiz Questions for Science
    tx.executeSql('INSERT INTO QuizQuestions (quizId, question, correctAnswer) VALUES (?, ?, ?)', 
      [2, 'What is the powerhouse of the cell?', 'Mitochondria']);
    tx.executeSql('INSERT INTO QuizQuestions (quizId, question, correctAnswer) VALUES (?, ?, ?)', 
      [2, 'What is the process by which plants make their own food?', 'Photosynthesis']);

    // Sample Quiz Options for Science
    tx.executeSql('INSERT INTO QuizOptions (questionId, optionText) VALUES (?, ?)', [3, 'Nucleus']);
    tx.executeSql('INSERT INTO QuizOptions (questionId, optionText) VALUES (?, ?)', [3, 'Mitochondria']);
    tx.executeSql('INSERT INTO QuizOptions (questionId, optionText) VALUES (?, ?)', [3, 'Chloroplast']);
    tx.executeSql('INSERT INTO QuizOptions (questionId, optionText) VALUES (?, ?)', [3, 'Endoplasmic Reticulum']);

    tx.executeSql('INSERT INTO QuizOptions (questionId, optionText) VALUES (?, ?)', [4, 'Respiration']);
    tx.executeSql('INSERT INTO QuizOptions (questionId, optionText) VALUES (?, ?)', [4, 'Photosynthesis']);
    tx.executeSql('INSERT INTO QuizOptions (questionId, optionText) VALUES (?, ?)', [4, 'Fermentation']);
    tx.executeSql('INSERT INTO QuizOptions (questionId, optionText) VALUES (?, ?)', [4, 'Digestion']);
  });
};