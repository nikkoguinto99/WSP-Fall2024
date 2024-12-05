<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useUserStore } from '@/models/userStore';

export default defineComponent({
  name: 'AdminPage',
  setup() {
    const userStore = useUserStore();

    // Check if the user is an admin
    const isAdmin = computed(() => userStore.state.user?.isAdmin === true);

    return {
      isAdmin,
    };
  },
});
</script>

<template>
  <div v-if="isAdmin">
    <h1 class="title">Admin Dashboard</h1>

    <div class="columns is-multiline">
      <!-- First Row (User Management & Content Management Cards) -->
      <div class="column is-half">
        <div class="card">
          <div class="card-content">
            <p class="title">User Management</p>
            <p class="subtitle">Manage users and their permissions</p>
            <div class="content">
              <RouterLink to="/admin/userlist" class="button is-link is-fullwidth">Go to User List</RouterLink>
            </div>
          </div>
        </div>
      </div>

      <div class="column is-half">
        <div class="card">
          <div class="card-content">
            <p class="title">Class Management</p>
            <p class="subtitle">Edit and update site content</p>
            <div class="content">
              <RouterLink to="/admin/classlist" class="button is-link is-fullwidth">Manage Content</RouterLink>
            </div>
          </div>
        </div>
      </div>

      <!-- Second Row (Analytics & Settings Cards) -->
      <div class="column is-half">
        <div class="card">
          <div class="card-content">
            <p class="title">Post Management</p>
            <p class="subtitle">View different user posts and delete them if they are flagged/reported</p>
            <div class="content">
              <RouterLink to="/admin/analytics" class="button is-link is-fullwidth">View User Posts</RouterLink>
            </div>
          </div>
        </div>
      </div>

      <div class="column is-half">
        <div class="card">
          <div class="card-content">
            <p class="title">Activity Log</p>
            <p class="subtitle">View activity on this website</p>
            <div class="content">
              <RouterLink to="/admin/settings" class="button is-link is-fullwidth">View Website Activity</RouterLink>
            </div>
          </div>
        </div>
      </div>
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

<style scoped>
.card {
  margin-bottom: 20px;
}

.card .title {
  font-size: 1.5rem;
  font-weight: bold;
}

.card .subtitle {
  font-size: 1.1rem;
  color: #7a7a7a;
}

.column {
  padding: 0;
}

.columns {
  margin-top: 20px;
}
</style>
