import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    Data: []
}

export const UserSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addUser: (state, action)=> {
         state.Data = [...state.Data, action.payload]
        },
        updateUser: (state, action) => {
           let temp = state.Data
           const indexToUpdate = temp.findIndex(item => item.id === action.payload.id   );
            if (indexToUpdate !== -1) {
                // Update the object at the found index with the new data
                temp[indexToUpdate] = action.payload;
                console.log(temp)
            }
           state.Data = temp
        },
        deleteUser(state,action) {
            let temp = state.Data
            const newArray = temp.filter(item => item.id !== action.payload)
            state.Data = newArray
        }
    }
})

export const {addUser, updateUser, deleteUser} = UserSlice.actions
export const getUserData = (state:any) => state.user
export default UserSlice;

