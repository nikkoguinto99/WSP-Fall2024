import usersData from '../data/users.json';

// Define the User interface
export interface User {
  profilePicture: string;
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  isAdmin: boolean;
}

// Create a function to get all users
export function getAllUsers(): User[] {
  return usersData;
}
