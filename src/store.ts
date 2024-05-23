import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./features/users/UserSlice";
import postsReducer from "./features/posts/postsSlice";
export const store = configureStore({
  reducer: {
    users: usersReducer,
    posts: postsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
