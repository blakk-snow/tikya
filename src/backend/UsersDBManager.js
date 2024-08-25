import * as SQLite from 'expo-sqlite';

export const initDatabase = async () => {
  const db = await SQLite.openDatabaseAsync('tikya_v001.db');
  return db;
};

export const setupDatabase = async (db) => {
  try {
    await db.execAsync(`
      PRAGMA foreign_keys = ON;
      PRAGMA journal_mode = WAL;

      CREATE TABLE IF NOT EXISTS Users (
        id INTEGER PRIMARY KEY AUTOINCREMENT, 
        username TEXT NOT NULL, 
        password TEXT NOT NULL, 
        role TEXT NOT NULL
      );
    `);
  } catch (error) {
    console.error('Error setting up database:', error);
    throw error;
  }
};


export const createUser = async (db, userInfo) => {
  const { username, password, role } = userInfo;

  try {
    const result = await db.runAsync(
      'INSERT INTO Users (username, password, role) VALUES ($username, $password, $role)',
      { $username: username, $password: password, $role: role }
    );
    console.log('User created with ID:', result.lastInsertRowId);
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
};



export const getUserByIdAsync = async (db, id) => {
  try {
    const user = await db.getFirstAsync(
      'SELECT * FROM Users WHERE id = $id',
      { $id: id }
    );
    return user; // Return user object or undefined if not found
  } catch (error) {
    console.error('Error fetching user by ID:', error);
    throw error;
  }
};



// export const getUserById = async (db, id) => {
//   try {
//     const rows = await db.getFirstAsync('SELECT * FROM Users WHERE id = ?', [id]);
//     return rows[0]?.username; // Return the username directly
//   } catch (error) {
//     console.error('Error fetching Users:', error);
//     throw error;
//   }
// };


export const getUserById = async (db, username) => {
  try {
    const user = await db.getFirstAsync('SELECT * FROM Users WHERE username = ?', [username]);
    return user; // Return the user object directly
  } catch (error) {
    console.error('Error fetching user by username:', error);
    throw error;
  }
};


export const getUserByUsername = async (db, username) => {
  try {
    const user = await db.getFirstAsync('SELECT * FROM Users WHERE username = ?', [username]);
    return user;
  } catch (error) {
    console.error('Error fetching user by username:', error);
    throw error;
  }
};


export const getAllUsers = async (db) => {
  const users = [];

  try {
    for await (const user of db.getEachAsync('SELECT * FROM Users')) {
      users.push(user);
    }
    return users;
  } catch (error) {
    console.error('Error fetching all users:', error);
    throw error;
  }
};
  

export const updateUser = async (db, id, userInfo) => {
  const { username, password, role } = userInfo;

  try {
    await db.runAsync(
      `UPDATE Users 
       SET username = $username, 
           password = $password, 
           role = $role 
       WHERE id = $id`,
      {
        $username: username,
        $password: password,
        $role: role,
        $id: id,
      }
    );
    console.log('User updated with ID:', id);
  } catch (error) {
    console.error('Error updating user:', error);
    throw error;
  }
};

  

export const deleteUserAsync = async (db, id) => {
  try {
    await db.runAsync('DELETE FROM Users WHERE id = $id', { $id: id });
    console.log('User deleted with ID:', id);
  } catch (error) {
    console.error('Error deleting user:', error);
    throw error;
  }
};







    
// ```
// // Teacher related tables
// // ---------------------------
// // 1. Users table
// // 2. Classes table
// // 3. Students table
// // 4. Subjects table
// // 5. Tests table
// // 6. AssessmentScores table
// // 7. Attendance table
// // 1. Users table
// ```
// ```
// // CREATE TABLE IF NOT EXISTS Users (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT, password TEXT, role TEXT);
// // CREATE TABLE IF NOT EXISTS Classes (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, teacherId INTEGER, FOREIGN KEY (teacherId) REFERENCES Users (id));
// // CREATE TABLE IF NOT EXISTS Students (id INTEGER PRIMARY KEY AUTOINCREMENT, userId INTEGER, classId INTEGER, FOREIGN KEY (userId) REFERENCES Users (id), FOREIGN KEY (classId) REFERENCES Classes (id));      
// // CREATE TABLE IF NOT EXISTS Subjects (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, classId INTEGER, FOREIGN KEY (classId) REFERENCES Classes (id));
// // CREATE TABLE IF NOT EXISTS Tests (id INTEGER PRIMARY KEY AUTOINCREMENT, subjectId INTEGER, name TEXT, date TEXT, FOREIGN KEY (subjectId) REFERENCES Subjects (id));    
// // CREATE TABLE IF NOT EXISTS AssessmentScores (id INTEGER PRIMARY KEY AUTOINCREMENT, studentId INTEGER, testId INTEGER, score REAL, FOREIGN KEY (studentId) REFERENCES Students (id), FOREIGN KEY (testId) REFERENCES Tests (id));    
// // CREATE TABLE IF NOT EXISTS Attendance (id INTEGER PRIMARY KEY AUTOINCREMENT, studentId INTEGER, date TEXT, present BOOLEAN, FOREIGN KEY (studentId) REFERENCES Students (id));

// ```

// ```
// // Student related tables
// // ---------------------------
// // 1. RevisionNotes table
// // 2. Quizzes table
// // 3. QuizQuestions table
// // 4. QuizOptions table
// // 5. StudentQuizAttempts table


// // CREATE TABLE IF NOT EXISTS RevisionNotes (id INTEGER PRIMARY KEY AUTOINCREMENT, subject TEXT, title TEXT, content TEXT);
// // CREATE TABLE IF NOT EXISTS Quizzes (id INTEGER PRIMARY KEY AUTOINCREMENT, subject TEXT, title TEXT);
// // CREATE TABLE IF NOT EXISTS QuizQuestions (id INTEGER PRIMARY KEY AUTOINCREMENT, quizId INTEGER, question TEXT, correctAnswer TEXT, FOREIGN KEY (quizId) REFERENCES Quizzes (id));
// // CREATE TABLE IF NOT EXISTS QuizOptions (id INTEGER PRIMARY KEY AUTOINCREMENT, questionId INTEGER, optionText TEXT, FOREIGN KEY (questionId) REFERENCES QuizQuestions (id));    
// // CREATE TABLE IF NOT EXISTS StudentQuizAttempts (id INTEGER PRIMARY KEY AUTOINCREMENT, studentId INTEGER, quizId INTEGER, score INTEGER, dateTaken TEXT, FOREIGN KEY (studentId) REFERENCES Students (id), FOREIGN KEY (quizId) REFERENCES Quizzes (id));
// ```

// // const setupDatabase = async (db) => {
// //     await db.execAsync(`
// //       PRAGMA foreign_keys = ON;
// //       PRAGMA journal_mode = WAL;
      
// //       -- Teacher related tables
// //       CREATE TABLE IF NOT EXISTS Users (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT, password TEXT, role TEXT);
// //       CREATE TABLE IF NOT EXISTS Classes (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, teacherId INTEGER, FOREIGN KEY (teacherId) REFERENCES Users (id));
// //       CREATE TABLE IF NOT EXISTS Students (id INTEGER PRIMARY KEY AUTOINCREMENT, userId INTEGER, classId INTEGER, FOREIGN KEY (userId) REFERENCES Users (id), FOREIGN KEY (classId) REFERENCES Classes (id));      
// //       CREATE TABLE IF NOT EXISTS Subjects (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, classId INTEGER, FOREIGN KEY (classId) REFERENCES Classes (id));
// //       CREATE TABLE IF NOT EXISTS Tests (id INTEGER PRIMARY KEY AUTOINCREMENT, subjectId INTEGER, name TEXT, date TEXT, FOREIGN KEY (subjectId) REFERENCES Subjects (id));    
// //       CREATE TABLE IF NOT EXISTS AssessmentScores (id INTEGER PRIMARY KEY AUTOINCREMENT, studentId INTEGER, testId INTEGER, score REAL, FOREIGN KEY (studentId) REFERENCES Students (id), FOREIGN KEY (testId) REFERENCES Tests (id));    
// //       CREATE TABLE IF NOT EXISTS Attendance (id INTEGER PRIMARY KEY AUTOINCREMENT, studentId INTEGER, date TEXT, present BOOLEAN, FOREIGN KEY (studentId) REFERENCES Students (id));
  
// //       -- Student related tables
// //       CREATE TABLE IF NOT EXISTS QuizQuestions (id INTEGER PRIMARY KEY AUTOINCREMENT, quizId INTEGER, 
// //                                                 question TEXT, correctAnswer TEXT, FOREIGN KEY (quizId) 
// //                                                 REFERENCES Quizzes (id));

// //       CREATE TABLE IF NOT EXISTS QuizOptions (id INTEGER PRIMARY KEY AUTOINCREMENT, questionId INTEGER, 
// //                                                 optionText TEXT, FOREIGN KEY (questionId) REFERENCES QuizQuestions (id));

// //       CREATE TABLE IF NOT EXISTS StudentQuizAttempts (id INTEGER PRIMARY KEY AUTOINCREMENT, userId INTEGER,
// //                                                 quizId INTEGER, score INTEGER, dateTaken TEXT, FOREIGN KEY (quizId) REFERENCES Quizzes (id));
// //     `);
// //   };

