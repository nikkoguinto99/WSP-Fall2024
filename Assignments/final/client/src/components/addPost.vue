<!-- AddPost.vue -->
<script setup lang="ts">
import { ref } from 'vue';
import { useposts } from '@/models/posts'; // Import the useposts function

const { addPost } = useposts();

const showModal = ref(false);

const newPost = ref({
  caption: '',
  image: '',
  type: '',
  duration: 0,
  calorieburn: 0,
  date: new Date().toISOString().split('T')[0], // Current date in YYYY-MM-DD format
  userID: 1, // Assuming the user ID is 1 for now
  likes: 0,
  comments: [],
  id: Date.now(), // Generate a unique ID for the post
  likedByCurrentUser: false
});

const selected = ref(null);
const options = ref([]); // Add this line to define the options property

const addNewPost = () => {
  // Check if all required fields are filled in
  if (!newPost.value.caption || !newPost.value.image || !newPost.value.type) {
    alert('Please fill in all the required fields!');
    return;
  }

  // Add the new post to the shared posts array
  addPost(newPost.value);

  // Reset the newPost fields
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
    id: Date.now(),
    likedByCurrentUser: false,
  };

  // Close the modal
  showModal.value = false;
};

const searchQuery = ref('');

interface User {
  id: number;
  profileName: string;
}

const performSearch = async () => {
  if (searchQuery.value.trim() === '') {
    options.value = []; // Clear autocomplete options if query is empty
    return;
  }
  const response = await searchApi(searchQuery.value);
  if (response.isSuccess) {
    options.value = response.data.map((user: User) => ({
      value: user.id,
      label: user.profileName
    }));
  } else {
    options.value = [];
  }
};

async function searchApi(value: string) {
  try {
    const response = await fetch('../../../server/data/users.json');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    const filteredUsers = data.users.filter((user: User) =>
      user.profileName.toLowerCase().includes(value.toLowerCase())
    );
    return {
      isSuccess: true,
      data: filteredUsers
    };
  } catch (error) {
    console.error('Error fetching search results:', error);
    return {
      isSuccess: false,
      data: []
    };
  }
}
</script>

<template>
  <div>
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

          <section>
            <o-field label="Tag Users">
              <o-autocomplete
                v-model="selected"
                :options="options"
                rounded
                expanded
                placeholder="Tag Users"
                icon="search"
                clearable
                open-on-focus
                @input="performSearch">
                <template #empty>No results found</template>
              </o-autocomplete>
            </o-field>
            <p><b>Selected:</b> {{ selected }}</p>
          </section>

        </section>
        <footer class="modal-card-foot">
          <button class="button is-success" @click="addNewPost">Post</button>
          <button class="button" @click="showModal = false">Cancel</button>
        </footer>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Add your styles here */
</style>
