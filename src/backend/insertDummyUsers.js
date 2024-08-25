
import { dummyUsers } from './dummyUsers';
import { createUser, getUserByUsername } from './UsersDBManager';

export const insertDummyUsers = async (db) => {
  try {
    for (const user of dummyUsers) {
      await createUser(db, user);
      console.log(`User ${user.username} inserted successfully`);
      
      // Verify the user was inserted
      const insertedUser = await getUserByUsername(db, user.username);
      if (insertedUser) {
        console.log(`Verified: User ${user.username} exists in the database`);
      } else {
        console.warn(`Warning: User ${user.username} was not found in the database after insertion`);
      }
    }
    console.log('All dummy users processed');
  } catch (error) {
    console.error('Error inserting dummy users:', error);
    throw error;
  }
};