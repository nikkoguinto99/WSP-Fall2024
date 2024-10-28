import type { DataListEnvelope } from './dataEnvelope'

// Define a mock data object to simulate the source of posts
const data = {
  items: [
    {
      type: 'text',
      caption: 'First post!',
      image: 'image1.png',
      likes: 120,
      comments: 15,
      date: '2024-01-01',
      user: {
        id: 1,
        profilePicture: 'user1.png',
        firstName: 'John',
        lastName: 'Doe',
        username: 'johndoe',
      },
    },
    {
      type: 'image',
      caption: 'Check out this view!',
      image: 'image2.png',
      likes: 200,
      comments: 30,
      date: '2024-02-15',
      user: {
        id: 2,
        profilePicture: 'user2.png',
        firstName: 'Jane',
        lastName: 'Smith',
        username: 'janesmith',
      },
    },
    // Add more posts as needed
  ],
};

// Create the getAll method that retrieves all posts
export function getAll(): DataListEnvelope<Post> {
  return {
    data: data.items,
    total: data.items.length,
  };
}
export interface User {
  id: number;
  profilePicture: string;
  firstName: string;
  lastName: string;
  username: string;
}

export interface Post {
  type: string;
  caption: string;
  image: string;
  likes: number;
  comments: number;
  date: string;
  user: User;
}

// This will represent the overall structure of your posts data
export type PostsData = Post[];
