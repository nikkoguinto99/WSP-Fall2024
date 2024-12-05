<script lang="ts">
import { defineComponent, computed, ref } from 'vue';
import { useUsers } from '@/models/users';
import { useUserStore } from '@/models/userStore';

const images = import.meta.glob('../../assets/photos/Pfps/*.png', { eager: true });

export default defineComponent({
  name: 'UserListPage',
  setup() {
    const { users } = useUsers();
    const userStore = useUserStore();

    // For checking if the user is admin
    const isAdmin = computed(() => userStore.state.user?.isAdmin === true);

    // Modal state
    const isAddModalActive = ref(false);
    const isEditModalActive = ref(false);

    // New user form data
    const newUser = ref({
      firstName: '',
      lastName: '',
      dob: '',
      email: '',
      profileName: '',
      password: '',
      membershipType: '',
      isAdmin: false,
      profilePic: 'default.png',
    });

    // Selected user for editing
    const selectedUser = ref<Record<string, unknown>>({});  // Initialize with an empty object

    // Helper function to resolve the image path
    const resolveImage = (filename: string) => {
      const imagePath = `../../assets/photos/Pfps/${filename}`;
      const image = images[imagePath];
      return (image as { default: string })?.default || '/default-image.png';
    };

    // Method to remove a user
    const removeUser = (userId: number) => {
      users.value = users.value.filter(user => user.id !== userId);
    };

    // Method to add a new user
    const addUser = () => {
      users.value.push({
        ...newUser.value, id: users.value.length + 1,
        sex: '',
        bio: '',
        fitnessGoals: '',
        height: '',
        weight: '',
        caloriegoal: '',
        dietaryPreferences: ''
      });
      closeAddModal();  // Close the modal after adding the user
    };

    // Method to open the Add User modal
    const openAddModal = () => {
      isAddModalActive.value = true;
    };

    // Method to close the Add User modal
    const closeAddModal = () => {
      isAddModalActive.value = false;
      // Clear the form data
      newUser.value = {
        firstName: '',
        lastName: '',
        dob: '',
        email: '',
        profileName: '',
        password: '',
        membershipType: '',
        isAdmin: false,
        profilePic: 'default.png',
      };
    };

    // Method to open the Edit User modal with pre-filled data
    const openEditModal = (user: Record<string, unknown>) => {
      selectedUser.value = { ...user };  // Copy the user data to avoid direct mutation
      isEditModalActive.value = true;
    };

    // Method to close the Edit User modal
    const closeEditModal = () => {
      isEditModalActive.value = false;
      selectedUser.value = {};  // Clear the selected user
    };

    // Method to update the user data
    const updateUser = () => {
      if (selectedUser.value) {
        const index = users.value.findIndex(user => user.id === selectedUser.value.id);
        if (index !== -1) {
          users.value[index] = {
            ...users.value[index],
            ...selectedUser.value
          };  // Update the user data
        }
      }
      closeEditModal();  // Close the modal after updating the user
    };

    return {
      users,
      isAdmin,
      resolveImage,
      removeUser,
      isAddModalActive,
      isEditModalActive,
      newUser,
      selectedUser,
      addUser,
      openAddModal,
      closeAddModal,
      openEditModal,
      closeEditModal,
      updateUser,
    };
  },
});
</script>

<template>
  <div v-if="isAdmin">
    <h1 class="title">User Management</h1>
    <nav class="breadcrumb" aria-label="breadcrumbs">
      <ul>
        <li><RouterLink to="/dashboard">Dashboard</RouterLink></li>
        <li><RouterLink to="/admin">Admin</RouterLink></li>
        <li><RouterLink to="/admin/userlist">Users</RouterLink></li>
      </ul>
    </nav>
    <div class="buttons">
      <button class="button is-primary" @click="openAddModal">Add New User</button>
    </div>
    <table class="table is-fullwidth is-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th>Profile Picture</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Date of Birth</th>
          <th>Email</th>
          <th>Username</th>
          <th>Membership</th>
          <th>Admin</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.id }}</td>
          <td>
            <img :src="resolveImage(user.profilePic)" alt="Profile Picture" class="image is-64x64" />
          </td>
          <td>{{ user.firstName }}</td>
          <td>{{ user.lastName }}</td>
          <td>{{ user.dob }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.profileName }}</td>
          <td>{{ user.membershipType }}</td>
          <td>{{ user.isAdmin ? 'Yes' : 'No' }}</td>
          <td>
            <button class="button is-small is-info" @click="openEditModal(user)">Edit</button>
            <button class="button is-small is-danger" @click="removeUser(user.id)">Remove</button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Add New User Modal -->
    <div class="modal" :class="{ 'is-active': isAddModalActive }">
      <div class="modal-background" @click="closeAddModal"></div>
      <div class="modal-content">
        <div class="box">
          <h2 class="title">Add New User</h2>
          <form @submit.prevent="addUser">
            <div class="field">
              <label class="label">First Name</label>
              <div class="control">
                <input class="input" type="text" v-model="newUser.firstName" required />
              </div>
            </div>
            <div class="field">
              <label class="label">Last Name</label>
              <div class="control">
                <input class="input" type="text" v-model="newUser.lastName" required />
              </div>
            </div>
            <div class="field">
              <label class="label">Date of Birth</label>
              <div class="control">
                <input class="input" type="date" v-model="newUser.dob" required />
              </div>
            </div>
            <div class="field">
              <label class="label">Email</label>
              <div class="control">
                <input class="input" type="email" v-model="newUser.email" required />
              </div>
            </div>
            <div class="field">
              <label class="label">Username</label>
              <div class="control">
                <input class="input" type="text" v-model="newUser.profileName" required />
              </div>
            </div>
            <div class="field">
              <label class="label">Password</label>
              <div class="control">
                <input class="input" type="password" v-model="newUser.password" required />
              </div>
            </div>
            <div class="field">
              <label class="label">Membership Type</label>
              <div class="control">
                <div class="select">
                  <select v-model="newUser.membershipType" required>
                    <option value="Free Member">Free Member</option>
                    <option value="Member">Member</option>
                    <option value="Member+">Member+</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="field">
              <label class="label">Is Admin</label>
              <div class="control">
                <input type="checkbox" v-model="newUser.isAdmin" />
              </div>
            </div>
            <div class="field">
              <label class="label">Profile Picture</label>
              <div class="control">
                <input class="input" type="text" v-model="newUser.profilePic" />
              </div>
            </div>
            <div class="field is-grouped">
              <div class="control">
                <button type="submit" class="button is-link">Add User</button>
              </div>
              <div class="control">
                <button type="button" class="button is-light" @click="closeAddModal">Cancel</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <button class="modal-close is-large" @click="closeAddModal" aria-label="close"></button>
    </div>

    <!-- Edit User Modal -->
    <div class="modal" :class="{ 'is-active': isEditModalActive }">
      <div class="modal-background" @click="closeEditModal"></div>
      <div class="modal-content">
        <div class="box">
          <h2 class="title">Edit User</h2>
          <!-- Ensure the modal doesn't render when selectedUser is null or empty -->
          <form v-if="selectedUser && Object.keys(selectedUser).length > 0" @submit.prevent="updateUser">
            <div class="field">
              <label class="label">First Name</label>
              <div class="control">
                <input class="input" type="text" v-model="selectedUser.firstName" required />
              </div>
            </div>
            <div class="field">
              <label class="label">Last Name</label>
              <div class="control">
                <input class="input" type="text" v-model="selectedUser.lastName" required />
              </div>
            </div>
            <div class="field">
              <label class="label">Date of Birth</label>
              <div class="control">
                <input class="input" type="date" v-model="selectedUser.dob" required />
              </div>
            </div>
            <div class="field">
              <label class="label">Email</label>
              <div class="control">
                <input class="input" type="email" v-model="selectedUser.email" required />
              </div>
            </div>
            <div class="field">
              <label class="label">Username</label>
              <div class="control">
                <input class="input" type="text" v-model="selectedUser.profileName" required />
              </div>
            </div>
            <div class="field">
              <label class="label">Membership Type</label>
              <div class="control">
                <div class="select">
                  <select v-model="selectedUser.membershipType" required>
                    <option value="Free Member">Free Member</option>
                    <option value="Member">Member</option>
                    <option value="Member+">Member+</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="field">
              <label class="label">Is Admin</label>
              <div class="control">
                <input type="checkbox" v-model="selectedUser.isAdmin" />
              </div>
            </div>
            <div class="field">
              <label class="label">Profile Picture</label>
              <div class="control">
                <input class="input" type="text" v-model="selectedUser.profilePic" />
              </div>
            </div>
            <div class="field is-grouped">
              <div class="control">
                <button type="submit" class="button is-link">Update User</button>
              </div>
              <div class="control">
                <button type="button" class="button is-light" @click="closeEditModal">Cancel</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <button class="modal-close is-large" @click="closeEditModal" aria-label="close"></button>
    </div>
  </div>

  <!-- If not admin, show access denied message -->
  <div v-else>
    <h1 class="title has-text-danger">Access Denied</h1>
    <p>You do not have permission to view this page.</p>
    <br>
    <p>DEMO: To view this page, please log in using the following credentials:</p>
    <p><strong>Username:</strong> Admin</p>
    <p><strong>Password:</strong> Admin</p>
  </div>
</template>
