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
    likes: number;
    disLikes: number;
    views: number;
    author: Author;
    image: string;
    likesPosts: string[];
    preferredPosts: string[];
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


interface LikesPostPayload {
    postId: string;
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

        setLikesPosts: (state, action: PayloadAction<LikesPostPayload>) => {
            const postIndex = state.posts.findIndex(
                (post) => post.id === action.payload.postId

                
            );
            if (postIndex !== -1 && !state.posts[postIndex].likesPosts.includes(action.payload.userId)) {
                state.posts[postIndex].likesPosts.push(action.payload.userId);
            }
        },

        disLikesPosts: (state, action: PayloadAction<LikesPostPayload>) => {
            const postIndex = state.posts.findIndex(
                (post) => post.id === action.payload.postId
            );
            if (postIndex !== -1 && state.posts[postIndex].likesPosts.includes(action.payload.userId)) {
                state.posts[postIndex].likesPosts = state.posts[postIndex].likesPosts.filter(
                    (userId) => userId !== action.payload.userId
                );
            }
        },

        addpreferredPosts: (state, action: PayloadAction<string>) => {
            const postIndex = state.posts.findIndex(
                (post) => post.id === action.payload
            );
            if (postIndex !== -1 && !state.posts[postIndex].preferredPosts.includes(action.payload)) {
                state.posts[postIndex].preferredPosts.push(action.payload);
            }
        },

        delpreferredPosts: (state, action: PayloadAction<string>) => {
            const postIndex = state.posts.findIndex(
                (post) => post.id === action.payload
            );
            if (postIndex !== -1 && state.posts[postIndex].preferredPosts.includes(action.payload)) {
                state.posts[postIndex].preferredPosts = state.posts[postIndex].preferredPosts.filter(
                    (userId) => userId !== action.payload
                );
            }
        },
    },
});

export const { setPosts, deletePost, addPost, updatePost } = PostsSlice.actions;

export default PostsSlice.reducer;
