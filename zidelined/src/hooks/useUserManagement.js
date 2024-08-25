import { useState, useEffect } from 'react';
import { initDatabase, createUser, getUserByUsername } from "../../../src/backend/UsersDBManager";



const useUserManagement = () => {
  const [db, setDb] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const initializeDb = async () => {
      const database = await initDatabase();
      setDb(database);
    };

    initializeDb();
  }, []);

  const registerUser = async (userInfo) => {
    if (!db) return;

    try {
      await createUser(db, userInfo);
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };


  const loginUser = async (username, password) => {
    if (!db) return false;

    if (isAuthenticated) {
      setUser({ username, role, /* other user properties */ });
      return true;
    }

    try {
      const user = await getUserByUsername(db, username);
      if (user) {
        // TODO: Implement proper password hashing and comparison
        if (user.password === password) {
          setUser(user);
          return true;
        }
      }
      return false;
    } catch (error) {
      console.error('Error logging in user:', error);
      return false;
    }
  };


  const logoutUser = () => {
    setUser(null);
  };
  

  return {
    user,
    registerUser,
    loginUser,
    logoutUser
  };
};

export default useUserManagement;
