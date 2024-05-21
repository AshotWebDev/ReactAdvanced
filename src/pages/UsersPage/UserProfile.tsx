import React from "react";
import { RootState } from "@/store";
import {
    updateUniqueUserName,
    updateUniqueUserUsername,
    updateUniqueUserImage,
    addFollower,
} from "../../features/users/UserSlice";
import { useAppDispatch, useAppSelector } from "@/hooks";

const UserProfile = () => {
    const dispatch = useAppDispatch();

    const uniqueUser = useAppSelector((state: RootState) => state.users.uniqueUser);

    const handleNameChange = (newName: string) => {
        dispatch(updateUniqueUserName(newName));
    };

    const handleUsernameChange = (newUsername: string) => {
        dispatch(updateUniqueUserUsername(newUsername));
    };

    const handleImageChange = (newImage: string) => {
        dispatch(updateUniqueUserImage(newImage));
    };

    const handleAddFollower = (newFollower: string) => {
        dispatch(addFollower(newFollower));
    };

    console.log(uniqueUser,'ddd');
    

    return (
        <div>
            {uniqueUser && (
                <div>
                    <h1>{uniqueUser.name}</h1>
                    <button onClick={() => handleNameChange("name")}>Change Name</button>
                    <button onClick={() => handleUsernameChange("name")}>Change Username</button>
                    <button onClick={() => handleImageChange("hhhhhhhhh")}>Change Image</button>
                    <button onClick={() => handleAddFollower("fol")}>Add Follower</button>
                </div>
            )}

        </div>
    );
};

export default UserProfile;
    