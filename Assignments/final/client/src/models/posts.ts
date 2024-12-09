import { ref } from 'vue';
import postData from '@/data/posts.json';
import userData from '@/data/users.json';
import type { DataListEnvelope } from '@/models/dataEnvelope';

/**
 * @template T
 * @typedef {import("../../Client/src/models/dataEnvelope").DataEnvelope} DataEnvelope
 * @typedef {import("../../Client/src/models/dataEnvelope").DataListEnvelope} DataListEnvelope
 */

/**
 * @returns {Promise<DataListEnvelope<Post>>}
 */
export function getAll(): DataListEnvelope<Post> {
  try {
    return {
      data: postData.items.map(post => ({ ...post, likedByCurrentUser: false })),
      isSuccess: true
    };
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return {
      data: [],
      message: 'Failed to load posts.',
      isSuccess: false
    };
  }
}


export interface Comment {
  id: number;
  userID: number;
  comment: string;
}

export interface Post {
  id: number;
  caption: string;
  image: string;
  type: string;
  duration: number; // in minutes
  calorieburn: number; // in calories
  date: string; // ISO 8601 or YYYY-MM-DD format
  userID: number;
  likes: number;
  comments: Comment[];
  likedByCurrentUser: boolean;
  profileName?: string;
  profilePic?: string;
}

export interface User {
  id: number;
  profileName: string;
  profilePic: string;
}

export const usePosts = () => {
  // Load data directly from the imported JSON file
  const posts = ref<Post[]>(postData.items.map(post => ({ ...post, likedByCurrentUser: false })) || []);
  const users = ref<User[]>(userData.items || []);

  // Temporary array to store deleted posts in memory
  const deletedPosts = ref<number[]>([]);

  // Function to map posts to include user details
  const mapPostsToUserDetails = () => {
    return posts.value
      .filter(post => !deletedPosts.value.includes(post.id)) // Exclude deleted posts
      .map(post => {
        const user = users.value.find(user => user.id === post.userID);
        return {
          ...post,
          profileName: user ? user.profileName : 'Unknown User',
          profilePic: user ? user.profilePic : 'default.png'
        };
      });
  };

  // Get posts with user details
  const postsWithUserDetails = ref(mapPostsToUserDetails());

  // Sort posts by date in descending order
  postsWithUserDetails.value.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  // Function to delete a post during the session
  const deletePost = (postId: number) => {
    // Add the post ID to the deletedPosts array
    deletedPosts.value.push(postId);
    // Re-map the posts to exclude the deleted posts
    postsWithUserDetails.value = mapPostsToUserDetails();
  };

  // Function to like a post
  const likePost = (postId: number) => {
    const post = posts.value.find(post => post.id === postId);
    if (post) {
      post.likes++; // Increment the like count
      // Re-map the posts to include updated user details
      postsWithUserDetails.value = mapPostsToUserDetails();
    }
  };

  return { posts: postsWithUserDetails, deletePost, likePost };
};
