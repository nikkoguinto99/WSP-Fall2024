import { ref } from 'vue';
import postData from '@/data/posts.json';
import userData from '@/data/users.json';
import type { DataEnvelope, DataListEnvelope } from './dataEnvelope'
import { api } from './myFetch'

/**
 * @template T
 * @typedef {import("../../Client/src/models/dataEnvelope").DataEnvelope} DataEnvelope
 * @typedef {import("../../Client/src/models/dataEnvelope").DataListEnvelope} DataListEnvelope
 */

export async function getAll() {
  return api<DataListEnvelope<Post>>('posts')
}

export async function getById(id: number) {
  return api<DataEnvelope<Post>>(`posts/${id}`)
}
export function create(Post: Post) {
  return api<DataEnvelope<Post>>('posts', Post)
}
export function update(Post: Post) {
  return api<DataEnvelope<Post>>(`posts/${Post.id}`, Post, 'PATCH')
}
export function remove(id: number) {
  return api<DataEnvelope<Post>>(`posts/${id}`, undefined, 'DELETE');
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

export const useposts = () => {
  // Load data directly from the imported JSON file
  const posts = ref<Post[]>(postData.items.map(post => ({ ...post, likedByCurrentUser: false })) || []);
  const users = ref<User[]>(userData.items || []);

  // Temporary array to store deleted posts in memory
  const deletedposts = ref<number[]>([]);

  // Function to map posts to include user details
  const mappostsToUserDetails = () => {
    return posts.value
      .filter(post => !deletedposts.value.includes(post.id)) // Exclude deleted posts
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
  const postsWithUserDetails = ref(mappostsToUserDetails());

  // Sort posts by date in descending order
  postsWithUserDetails.value.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  // Function to delete a post during the session
  const deletePost = (postId: number) => {
    // Add the post ID to the deletedposts array
    deletedposts.value.push(postId);
    // Re-map the posts to exclude the deleted posts
    postsWithUserDetails.value = mappostsToUserDetails();
  };

  // Function to like a post
  const likePost = (postId: number) => {
    const post = posts.value.find(post => post.id === postId);
    if (post) {
      post.likes++; // Increment the like count
      // Re-map the posts to include updated user details
      postsWithUserDetails.value = mappostsToUserDetails();
    }
  };

  return { posts: postsWithUserDetails, deletePost, likePost };
};
