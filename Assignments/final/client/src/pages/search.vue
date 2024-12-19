<template>
  <section class="section">
    <div class="container">
      <h1 class="title">Search Users</h1>
      <!-- Search Bar -->
      <div class="field">
        <div class="control has-icons-left">
          <input
            v-model="searchQuery"
            class="input"
            type="text"
            placeholder="Search by username"
          />
          <span class="icon is-left">
            <i class="fas fa-search"></i>
          </span>
        </div>
      </div>
      <!-- User List -->
      <div v-if="searchQuery.trim() !== ''" class="columns is-multiline">
        <div
          v-for="user in filteredUsers"
          :key="user.id"
          class="column is-one-third"
        >
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img
                  :src="getImageUrl(user.profilePic)"
                  :alt="user.profileName"
                />
              </figure>
            </div>
            <div class="card-content">
              <p class="title is-4">{{ user.profileName }}</p>
              <p class="subtitle is-6">{{ user.firstName }} {{ user.lastName }}</p>
              <p class="content">{{ user.bio }}</p>
            </div>
          </div>
        </div>
      </div>
      <p v-else class="has-text-centered mt-5">Please enter a username to search.</p>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import usersData from "../data/users.json"; // Adjust the path to your users.json file

interface User {
  id: number;
  firstName: string;
  lastName: string;
  profileName: string;
  profilePic: string;
  bio: string;
}

export default defineComponent({
  name: "SearchUsersPage",
  data() {
    return {
      searchQuery: "",
      users: usersData.items as User[], // Access the `items` key in users.json
    };
  },
  computed: {
    filteredUsers(): User[] {
      return this.users.filter((user) =>
        user.profileName
          .toLowerCase()
          .includes(this.searchQuery.toLowerCase())
      );
    },
  },
  methods: {
    getImageUrl(profilePic: string): string {
      return `@/Pfps/${profilePic}`;
    },
  },
});
</script>

<style scoped>
.card {
  margin-bottom: 2rem;
}
</style>
