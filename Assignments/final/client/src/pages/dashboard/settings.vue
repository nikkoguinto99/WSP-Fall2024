<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { useUserStore } from '@/models/userStore';
import { ref } from 'vue';
import DashBar from '@/components/DashBar.vue';

// User data
const { state: userState } = useUserStore();

// Password fields and error message
const currentPassword = ref('');
const newPassword = ref('');
const confirmPassword = ref('');
const passwordError = ref('');

const savePasswordChanges = () => {
  if (newPassword.value !== confirmPassword.value) {
    passwordError.value = 'New passwords do not match';
    return;
  }

  // Add logic to handle password change
  console.log('Current Password:', currentPassword.value);
  console.log('New Password:', newPassword.value);

  // Reset fields and error message
  currentPassword.value = '';
  newPassword.value = '';
  confirmPassword.value = '';
  passwordError.value = '';
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
          <!-- User Info Section -->
          <h1 class="title">User Settings</h1>

          <!-- Change Password Section -->
          <div class="box">
            <h2 class="subtitle is-4">Change Password</h2>
            <div class="field">
              <label class="label">Current Password</label>
              <div class="control">
                <input class="input" type="password" v-model="currentPassword" placeholder="Enter current password">
              </div>
            </div>
            <div class="field">
              <label class="label">New Password</label>
              <div class="control">
                <input class="input" type="password" v-model="newPassword" placeholder="Enter new password">
              </div>
            </div>
            <div class="field">
              <label class="label">Confirm New Password</label>
              <div class="control">
                <input class="input" type="password" v-model="confirmPassword" placeholder="Confirm new password">
              </div>
            </div>
            <div v-if="passwordError" class="notification is-danger">
              {{ passwordError }}
            </div>
            <div class="control">
              <button class="button is-primary" @click="savePasswordChanges">Save Changes</button>
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
