import { combineReducers } from "redux";
import { UserSlice } from "./User/UserSlice";


const rootReducer = combineReducers ({
    user: UserSlice.reducer
})

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;