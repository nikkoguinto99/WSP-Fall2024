<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'PostModal',
  setup() {
    const isModalActive = ref(false);
    const postText = ref('');
    const postDate = ref(new Date().toISOString().slice(0, 10));
    const postImage = ref<File | null>(null);
    const imageUrl = ref<string | null>(null);

    const openModal = () => {
      isModalActive.value = true;
    };

    const closeModal = () => {
      isModalActive.value = false;
    };

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
      console.log({
        postText: postText.value,
        postDate: postDate.value,
        imageUrl: imageUrl.value,
      });
      closeModal();
    };

    return {
      isModalActive,
      postText,
      postDate,
      postImage,
      imageUrl,
      openModal,
      closeModal,
      handleImageUpload,
      submitForm,
    };
  },
});
</script>
<template>
  <div>
    <!-- Trigger Button to Open Modal -->
    <button class="button is-primary" @click="openModal">Add a Workout</button>

    <!-- Modal -->
    <div class="modal" :class="{ 'is-active': isModalActive }">
      <div class="modal-background" @click="closeModal"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Add a Workout</p>
          <button class="delete" aria-label="close" @click="closeModal"></button>
        </header>

        <!-- Modal Body: Form -->
        <section class="modal-card-body">
          <form @submit.prevent="submitForm">
              <div class="control">
                <div class="field">
                  <label class="label">Title</label>
                  <div class="control">
                    <input class="input" type="text">
                  </div>
                </div>
              </div>

            <div class="field">
              <label class="label">Workout Date</label>
              <div class="control">
                <input
                  class="input"
                  type="date"
                  v-model="postDate"
                  required
                />
              </div>
            </div>

            <div class="field">
              <label class="label">Location</label>
              <div class="control">
                <input class="input" type="text" v-model="postText" required />
              </div>
            </div>


            <div class="field">
              <label class="label">Upload Image</label>
              <div class="control">
                <input class="input" type="file" @change="handleImageUpload" />
              </div>
            </div>

            <div class="field">
              <label class="label">Workout Type</label>
              <div class="control">
                <div class="select">
                <select>
                  <option>Strength</option>
                  <option>Endurance</option>
                  <option>Aerobic</option>
                  <option>Stretching</option>
                </select>
              </div>
            </div>
            </div>

          </form>
        </section>

        <!-- Modal Footer -->
        <footer class="modal-card-foot">
          <button class="button is-success" @click="submitForm">Submit</button>
          <button class="button" @click="closeModal">Cancel</button>
        </footer>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal-card {
  max-width: 600px; /* Adjust modal size */
}
</style>
