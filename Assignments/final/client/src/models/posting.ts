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
  comments: Comment[];
  date: string;
  user: User;
}

// This will represent the overall structure of your posts data
export type PostsData = Post[];
