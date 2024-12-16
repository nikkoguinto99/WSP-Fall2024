import { ref } from 'vue';
import usersData from '@/data/users.json';  // Adjust the import path to your project structure

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  dob: string;
  sex: string;
  email: string;
  password: string;
  membershipType: string;
  profileName: string;
  profilePic: string;
  bio: string;
  fitnessGoals: string;
  height: string;
  weight: string;
  caloriegoal: string;
  dietaryPreferences: string;
  isAdmin: boolean;
}

export const useUsers = () => {
  // Load data directly from the imported JSON file
  const users = ref<User[]>(usersData.items || []);

  return { users };
};
