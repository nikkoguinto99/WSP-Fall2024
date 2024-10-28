<script lang="ts">
import { defineComponent, ref } from 'vue';
import userStore from '@/models/userStore'; // Import the user store to access user information

export default defineComponent({
  name: 'WorkoutForm',
  emits: ['submitPost', 'close'], // Emit events
  setup(props, { emit }) {
    const postText = ref('');
    const postDate = ref(new Date().toISOString().slice(0, 10));
    const postImage = ref<File | null>(null);
    const imageUrl = ref<string | null>(null);
    const workoutType = ref('Cardio'); // Default workout type

    const workoutTypes = ['Cardio', 'Stretching', 'Aerobic', 'Strength', 'Endurance']; // List of workout types

    const handleImageUpload = (event: Event) => {
      const files = (event.target as HTMLInputElement).files;
      if (files && files[0]) {
        postImage.value = files[0];

        const reader = new FileReader();
        reader.onload = (e) => {
          imageUrl.value = e.target?.result as string;
        };
        reader.readAsDataURL(postImage.value);
      }
    };

    const submitForm = () => {
      const currentUser = userStore.state.user; // Get the current user from the store

      // Ensure currentUser is available before creating the new post
      if (currentUser) {
        const newPost = {
          type: workoutType.value, // Use selected workout type
          caption: postText.value,
          image: imageUrl.value,
          likes: 0,
          comments: 0,
          date: postDate.value,
          user: {
            id: currentUser.id, // Use actual user ID
            profilePicture: currentUser.profilePicture, // Use the user's profile picture
            firstName: currentUser.firstName, // Use the user's first name
            lastName: currentUser.lastName, // Use the user's last name
            username: currentUser.username, // Use the user's username
          },
        };

        emit('submitPost', newPost); // Emit the new post
        emit('close'); // Emit the close event to the parent component
      }
    };

    return {
      postText,
      postDate,
      postImage,
      imageUrl,
      workoutType,
      workoutTypes,
      handleImageUpload,
      submitForm,
    };
  },
});
</script>

<template>
  <div class="modal is-active">
    <div class="modal-background" @click="$emit('close')"></div>
    <div class="modal-content">
      <div class="box">
        <h1 class="title">Add New Workout</h1>

        <div class="field">
          <label class="label">Workout Type</label>
          <div class="control">
            <div class="select">
              <select v-model="workoutType">
                <option v-for="type in workoutTypes" :key="type" :value="type">{{ type }}</option>
              </select>
            </div>
          </div>
        </div>

        <div class="field">
          <label class="label">Caption</label>
          <div class="control">
            <input class="input" type="text" v-model="postText" placeholder="Enter workout caption" />
          </div>
        </div>

        <div class="field">
          <label class="label">Date</label>
          <div class="control">
            <input class="input" type="date" v-model="postDate" />
          </div>
        </div>

        <div class="field">
          <label class="label">Image</label>
          <div class="control">
            <input type="file" @change="handleImageUpload" />
            <img v-if="imageUrl" :src="imageUrl" alt="Preview" style="max-width: 100%; margin-top: 10px;" />
          </div>
        </div>

        <div class="field">
          <div class="control">
            <button class="button is-primary" @click="submitForm">Submit</button>
            <button class="button" @click="$emit('close')">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal.is-active {
  display: block; /* Ensure the modal is displayed when active */
}

.modal-content {
  position: absolute; /* Use absolute positioning */
  top: 50%; /* Center it vertically */
  left: 50%; /* Center it horizontally */
  transform: translate(-50%, -50%); /* Adjust to center */
  max-width: 500px; /* Set a max width for the modal */
  width: 90%; /* Set a responsive width */
}

.modal-background {
  opacity: 0.5;
}
</style>
