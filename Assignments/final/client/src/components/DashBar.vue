<script setup lang="ts">
import { ref } from 'vue';

const showModal = ref(false);
interface Post {
  id: number;
  caption: string;
  image: string;
  type: string;
  duration: number;
  calorieburn: number;
  date: string;
  userID: number;
  likes: number;
  comments: unknown[];
}

const posts = ref<Post[]>([]);
const postsWithUserDetails = ref<Post[]>([]);
const newPost = ref({
  caption: '',
  image: '',
  type: '',
  duration: 0,
  calorieburn: 0,
  date: new Date().toISOString().split('T')[0], // Current date in YYYY-MM-DD format
  userID: 1, // Assuming the user ID is 1 for now
  likes: 0,
  comments: []
});

const addPost = () => {
  // Add the new post to the main posts array
  posts.value.push({
    ...newPost.value,
    id: posts.value.length + 1, // Generate a unique ID for the new post
  });

  // Refresh the mapped postsWithUserDetails
  postsWithUserDetails.value = posts.value;

  // Close the modal
  showModal.value = false;

  // Reset newPost fields
  newPost.value = {
    caption: '',
    image: '',
    type: '',
    duration: 0,
    calorieburn: 0,
    date: new Date().toISOString().split('T')[0],
    userID: 1,
    likes: 0,
    comments: [],
  };
};

</script>

<template>
  <div>
    <!-- Left-hand side menu -->

      <aside class="menu">
        <p class="menu-label">
          General
        </p>
        <ul class="menu-list">
          <li><RouterLink to="/dashboard">Dashboard</RouterLink></li>
          <li><RouterLink to="/dashboard/useredit">Edit Profile</RouterLink></li>
          <li><RouterLink to="/dashboard/settings">Settings</RouterLink></li>
        </ul>
        <p class="menu-label">
          Posts & Classes
        </p>
        <ul class="menu-list">
          <li><a @click="showModal = true">Add Post</a></li>
          <li><a>Friend's Posts</a></li>
          <li><a>Liked Posts</a></li>
          <li><a>Enrolled Classes</a></li>
        </ul>
      </aside>
    </div>
<!-- Add Post Modal -->
<div class="modal" :class="{ 'is-active': showModal }">
      <div class="modal-background" @click="showModal = false"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Add Post</p>
          <button class="delete" aria-label="close" @click="showModal = false"></button>
        </header>
        <section class="modal-card-body">
          <div class="field">
            <label class="label">Caption</label>
            <div class="control">
              <input class="input" type="text" v-model="newPost.caption" placeholder="Caption">
            </div>
          </div>
          <div class="field">
            <label class="label">Image URL</label>
            <div class="control">
              <input class="input" type="text" v-model="newPost.image" placeholder="Image URL">
            </div>
          </div>
          <div class="field">
            <label class="label">Type</label>
            <div class="control">
              <input class="input" type="text" v-model="newPost.type" placeholder="Type">
            </div>
          </div>
          <div class="field">
            <label class="label">Duration (mins)</label>
            <div class="control">
              <input class="input" type="number" v-model="newPost.duration" placeholder="Duration">
            </div>
          </div>
          <div class="field">
            <label class="label">Calories Burned</label>
            <div class="control">
              <input class="input" type="number" v-model="newPost.calorieburn" placeholder="Calories Burned">
            </div>
          </div>
        </section>
        <footer class="modal-card-foot">
          <button class="button is-success" @click="addPost">Save</button>
          <button class="button" @click="showModal = false">Cancel</button>
        </footer>
      </div>
    </div>
</template>

<style scoped>

</style>
