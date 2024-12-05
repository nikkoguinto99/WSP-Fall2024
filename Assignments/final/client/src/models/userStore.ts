import { reactive } from 'vue';

// User interface definition
interface User {
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

// Reactive state for user management
const state = reactive({
  user: null as User | null,
});

// Functions to manipulate the state
function setUser(user: User) {
  state.user = user;
}

function clearUser() {
  state.user = null;
}

function updateUser(updatedUser: Partial<User>) {
  if (state.user) {
    state.user = { ...state.user, ...updatedUser };
  }
}

// Export the state and functions for use in components
export const useUserStore = () => ({
  state,
  setUser,
  clearUser,
  updateUser,
});
