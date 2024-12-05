<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { useUserStore } from '@/models/userStore';
import { usePosts } from '@/models/posts';
import { useUsers } from '@/models/users';
import { computed, ref } from 'vue';
import DashBar from '@/components/DashBar.vue';
import PostList from '@/components/PostList.vue';



// User and post data
const { state: userState } = useUserStore();
const { posts, deletePost } = usePosts();
useUsers();

// Get the current user's posts
const userPosts = computed(() => {
  if (!userState.user) return [];
  return posts.value.filter((post) => post.userID === userState.user?.id);
});

// Handle post deletion
const onDeletePost = (postId: number) => {
  deletePost(postId); // Delete from the store
};

// Handle post liking
const likePost = (postId: number) => {
  const post = posts.value.find((post) => post.id === postId);
  if (post) {
    post.likes += 1;
    post.likedByCurrentUser = true;
  }
};

const isCommentModalVisible = ref(false);
const selectedPostId = ref<number | null>(null);

const openCommentModal = (postId: number) => {
  selectedPostId.value = postId;
  isCommentModalVisible.value = true;
};

const closeCommentModal = () => {
  selectedPostId.value = null;
  isCommentModalVisible.value = false;
};

const getProfilePictureUrl = (filename: string) => new URL(`../../assets/photos/Pfps/${filename}`, import.meta.url).href;

const getPostImageUrl = (filename: string) => new URL(`../../assets/photos/Posts/${filename}`, import.meta.url).href;
</script>

<template>
  <div class="columns">
    <div class="column is-one-fifth">
      <DashBar />
    </div>
    <div class="column is-four-fifths">
      <div class="section">
        <div v-if="!userState.user" class="notification is-danger has-text-centered">
          <p>You must be signed in to view this page.</p>
        </div>
        <div v-else>
          <div class="box">
            <div class="media">
              <figure class="media-left">
                <p class="image is-128x128">
                  <img :src="getProfilePictureUrl(userState.user.profilePic)" alt="Profile Picture" />
                </p>
              </figure>
              <div class="media-content">
                <h1 class="title">{{ userState.user.firstName }} {{ userState.user.lastName }}</h1>
                <p class="subtitle">@{{ userState.user.profileName }}</p>
                <p>{{ userState.user.bio }}</p>
              </div>
            </div>
          </div>

                    <div v-if="isCommentModalVisible" class="modal is-active">
            <div class="modal-background"></div>
            <div class="modal-card">
              <header class="modal-card-head">
                <p class="modal-card-title">Add a Comment</p>
                <button class="delete" aria-label="close" @click="closeCommentModal"></button>
              </header>
              <section class="modal-card-body">
                <!-- Comment Form -->
                <textarea class="textarea" placeholder="Write your comment here..."></textarea>
              </section>
              <footer class="modal-card-foot">
                <button class="button is-primary" @click="closeCommentModal">Submit</button>
                <button class="button" @click="closeCommentModal">Cancel</button>
              </footer>
            </div>
          </div>

          <h2 class="title is-4">My Posts</h2>
          <PostList
          :posts="userPosts"
          :getProfilePictureUrl="getProfilePictureUrl"
          :getPostImageUrl="getPostImageUrl"
          :user="userState.user"
          @deletePost="onDeletePost"
          @likePost="likePost"
          @openCommentModal="openCommentModal"
        />

        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
.card {
  margin-bottom: 1.5rem;
}

.lowered-username {
  margin-top: 15px; /* Adjust this value as needed */
}

.columns {
  margin-top: 20px;
}
</style>
