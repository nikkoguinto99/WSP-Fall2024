<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'PostModal',
  emits: ['submitPost'], // Emit event
  setup(props, { emit }) {
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
      const newPost = {
        type: 'Cardio', // You can adjust this based on a select input
        caption: postText.value,
        image: imageUrl.value,
        likes: 0,
        comments: 0,
        date: postDate.value,
        user: {
          id: 1, // Replace with actual user ID
          profilePicture: 'default.png', // Placeholder or user profile picture
          firstName: 'First', // Replace with actual user's first name
          lastName: 'Last', // Replace with actual user's last name
          username: 'username', // Replace with actual user's username
        },
      };

      emit('submitPost', newPost); // Emit the new post
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
