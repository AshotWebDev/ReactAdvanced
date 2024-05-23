import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Author {
    id: string;
    name: string;
}

interface Posts {
    id: string;
    title: string;
    comments: string[];
    createdAt: string;
    tags: string[];
    upvotes: number;
    views: number;
    author: Author;
    image: string;
    likesPosts: string[];
}

interface PostsState {
    posts: Posts[];
}

const initialState: PostsState = {
    posts: [],
};

interface DelPostPayload {
    postId: string;
    userId: string;
}

interface AddPostPayload {
    post: Posts;
    userId: string;
}

const PostsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        setPosts: (state, action: PayloadAction<Posts[]>) => {
            state.posts = action.payload;
        },

        deletePost: (state, action: PayloadAction<DelPostPayload>) => {
            state.posts = state.posts.filter(
                (post) => post.id !== action.payload.postId && post.author.id === action.payload.userId
            );
        },

        addPost: (state, action: PayloadAction<AddPostPayload>) => {
            const { post, userId } = action.payload;
            if (post.author.id === userId) {
                state.posts.push(post);
            }
        },

        updatePost: (state, action: PayloadAction<Posts>) => {
            const postIndex = state.posts.findIndex(
                (post) => post.id === action.payload.id
            );
            if (postIndex !== -1) {
                state.posts[postIndex] = action.payload;
            }
        },
    },
});

export const { setPosts, deletePost, addPost, updatePost } = PostsSlice.actions;

export default PostsSlice.reducer;
