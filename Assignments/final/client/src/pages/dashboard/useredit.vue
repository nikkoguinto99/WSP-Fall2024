<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { useUserStore } from '@/models/userStore';
import { ref, watch } from 'vue';
import DashBar from '@/components/DashBar.vue';

// Access the user store
const userStore = useUserStore();
const userState = userStore.state;

// Reactive variables for editing user profile
const profileName = ref('');
const firstName = ref('');
const lastName = ref('');
const dob = ref('');
const bio = ref('');
const fitnessGoals = ref('');

// Initialize fields with the current user state
if (userState.user) {
  profileName.value = userState.user.profileName;
  firstName.value = userState.user.firstName;
  lastName.value = userState.user.lastName;
  dob.value = userState.user.dob;
  bio.value = userState.user.bio;
  fitnessGoals.value = userState.user.fitnessGoals;
}

// Watch for user changes and update fields
watch(
  () => userState.user,
  (newUser) => {
    if (newUser) {
      profileName.value = newUser.profileName || '';
      firstName.value = newUser.firstName || '';
      lastName.value = newUser.lastName || '';
      dob.value = newUser.dob || '';
      bio.value = newUser.bio || '';
      fitnessGoals.value = newUser.fitnessGoals || '';
    }
  },
  { immediate: true }
);

// Save profile changes
const saveProfileChanges = () => {
  if (!userState.user) {
    console.error('No user is logged in.');
    return;
  }

  userStore.setUser({
    ...userState.user,
    profileName: profileName.value,
    firstName: firstName.value,
    lastName: lastName.value,
    dob: dob.value,
    bio: bio.value,
    fitnessGoals: fitnessGoals.value,
  });

  console.log('Profile changes saved:', userState.user);
};
</script>

<template>
  <div class="columns">
    <!-- Left-hand side menu -->
    <div class="column is-one-fifth">
      <DashBar />
    </div>
    <!-- Main content -->
    <div class="column is-four-fifths">
      <div class="section">
        <!-- If user is not signed in -->
        <div v-if="!userState.user" class="notification is-danger has-text-centered">
          <p>You must be signed in to view this page.</p>
        </div>

        <!-- If user is signed in -->
        <div v-else>
          <h1 class="title">My Profile</h1>
          <div class="box">
            <h2 class="subtitle is-4">Edit Profile</h2>
            <div class="field">
              <label class="label">Profile Name</label>
              <div class="control">
                <input class="input" type="text" v-model="profileName" placeholder="Enter profile name">
              </div>
            </div>
            <div class="field">
              <label class="label">First Name</label>
              <div class="control">
                <input class="input" type="text" v-model="firstName" placeholder="Enter first name">
              </div>
            </div>
            <div class="field">
              <label class="label">Last Name</label>
              <div class="control">
                <input class="input" type="text" v-model="lastName" placeholder="Enter last name">
              </div>
            </div>
            <div class="field">
              <label class="label">Date of Birth</label>
              <div class="control">
                <input class="input" type="date" v-model="dob" placeholder="Enter date of birth">
              </div>
            </div>
            <div class="field">
              <label class="label">Bio</label>
              <div class="control">
                <textarea class="textarea" v-model="bio" placeholder="Enter bio"></textarea>
              </div>
            </div>
            <div class="field">
              <label class="label">Fitness Goals</label>
              <div class="control">
                <input class="input" type="text" v-model="fitnessGoals" placeholder="Enter fitness goals">
              </div>
            </div>
            <div class="control">
              <button class="button is-primary" @click="saveProfileChanges">Save Changes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.columns {
  margin-top: 20px;
}
</style>
