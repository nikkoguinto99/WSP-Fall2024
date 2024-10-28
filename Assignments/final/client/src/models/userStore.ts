// src/store/UserStore.ts
import { reactive } from 'vue';

// Define the user type
interface User {
  username: string;
  firstName: string;
  lastName: string;
  // Add other fields as needed
  dob: string;
  profilePicture: string;
  membership: string;
  isAdmin: boolean;
  id: number;
}

// Create a reactive state
const state = reactive({
  user: null as User | null,
});

// Define methods for managing user state
const setUser = (user: User) => {
  state.user = user;
};

const clearUser = () => {
  state.user = null;
};

export default {
  state,
  setUser,
  clearUser,
};
