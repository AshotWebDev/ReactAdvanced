import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  id: string;
  nickname: string;
  firstName: string;
  lastName: string;
  picture: string;
  followers: string[];
  following: string[];
}

interface UserState {
  users: User[];
  currentUser: User | null;
}

const initialState: UserState = {
  users: [],
  currentUser: null,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers(state, action: PayloadAction<User[]>) {
      state.users = action.payload;
    },
    setCurrentUser(state, action: PayloadAction<User>) {
      state.currentUser = action.payload;
    },
    followUser(state, action: PayloadAction<string>) {
      const userToFollow = state.users.find(
        (user) => user.id === action.payload
      );

      if (userToFollow && state.currentUser) {
        state.currentUser.following.push(userToFollow.id);
        userToFollow.followers.push(state.currentUser.id);
      }
    },
    unfollowUser(state, action: PayloadAction<string>) {
      const userToUnfollow = state.users.find(
        (user) => user.id === action.payload
      );

      if (userToUnfollow && state.currentUser) {
        state.currentUser.following = state.currentUser.following.filter(
          (id) => id !== userToUnfollow.id
        );

        userToUnfollow.followers = userToUnfollow.followers.filter(
          (id) => id !== state.currentUser?.id
        );
      }
    },
    updateUserProfile(state, action: PayloadAction<User>) {
      const userIndex = state.users.findIndex(
        (user) => user.id === action.payload.id
      );

      if (userIndex !== -1) {
        state.users[userIndex] = action.payload;

        if (state.currentUser?.id === action.payload.id) {
          state.currentUser = action.payload;
        }
      }
    },
  },
});

export const {
  setUsers,
  setCurrentUser,
  followUser,
  unfollowUser,
  updateUserProfile,
} = userSlice.actions;

export default userSlice.reducer;