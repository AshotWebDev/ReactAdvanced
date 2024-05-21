import { createSlice, PayloadAction } from "@reduxjs/toolkit";



interface User {
    id: string;
    name: string;
    nickname: string;
    image: string;
    followers: string[];
}

interface UserState {
    allUsers: User[];
    uniqueUser: User | null;
    loading: boolean;
}

const initialState: UserState = {
    allUsers: [
        {
            id: "1",
            name: 'Ashot Poghosyan',
            nickname: 'ashot29',
            image: "https://picsum.photos/200/300",
            followers: ['1', '2', '3'],
        }
    ],
    uniqueUser: {
        id: "1",
        name: 'Ashot Poghosyan',
        nickname: 'ashot29',
        image: "https://picsum.photos/200/300",
        followers: ['1', '2', '3'],},
    loading: false,
};

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        setAllUsers: (state, action: PayloadAction<User[]>) => {
            state.allUsers = action.payload;
        },
        setUniqueUser: (state, action: PayloadAction<User>) => {
            state.uniqueUser = action.payload;
        },
        updateUniqueUserName: (state, action: PayloadAction<string>) => {
            if (state.uniqueUser) {
                state.uniqueUser.name = action.payload;
            }
        },
        updateUniqueUserUsername: (state, action: PayloadAction<string>) => {
            if (state.uniqueUser) {
                state.uniqueUser.nickname = action.payload;
            }
        },
        updateUniqueUserImage: (state, action: PayloadAction<string>) => {
            if (state.uniqueUser) {
                state.uniqueUser.image = action.payload;
            }
        },
        addFollower: (state, action: PayloadAction<string>) => {
            if (state.uniqueUser) {
                const temp = action.payload;
                if (!state.uniqueUser.followers.includes(temp)) {
                    state.uniqueUser.followers.push(temp);
                }
            }
        },
    },
    extraReducers: () => {
        
    }
});

export const {
    setAllUsers,
    setUniqueUser,
    updateUniqueUserName,
    updateUniqueUserUsername,
    updateUniqueUserImage,
    addFollower
} = userSlice.actions;

export default userSlice.reducer;
