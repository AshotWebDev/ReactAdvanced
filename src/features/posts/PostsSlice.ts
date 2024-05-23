import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Posts {
    id: string;
    title: string;
    comments: string[];
    createdAt: string;
    tags: string[];
    upvotes: number;
    views: number;
    author: any;
    image: string;
    likesPosts: string[];
  }
  
  interface UserState {
    posts: Posts[];
    currentPosts: Posts[] | null;
  }
  
  const initialState: UserState = {
    posts: [],
    currentPosts: null,
  };



  const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
      setPosts: (state, action: PayloadAction<Posts[]>) => {
        state.posts = action.payload;
      },
      addPost: (state, action: PayloadAction<Posts>) => {
        state.posts.push(action.payload);
      },

      updatePost: (state, action: PayloadAction<Posts>) => {
        const postIndex = state.posts.findIndex(
          (post) => post.id === action.payload.id
        );
        if (postIndex !== -1) {
          state.posts[postIndex] = action.payload;
        }
      },
      deletePost: (state, action: PayloadAction<string>) => {
        state.posts = state.posts.filter((post) => post.id !== action.payload);
      },
      
      addLikesPosts: (state, action: PayloadAction<string>) => {
        const postIndex = state.posts.findIndex(
          (post) => post.id === action.payload
        );
        if (postIndex !== -1) {
          state.posts[postIndex].likesPosts.push(action.payload);
        }
      },
    },
  });



  export const { setPosts, addPost, updatePost, deletePost, addLikesPosts } = postsSlice.actions;

  export default postsSlice.reducer