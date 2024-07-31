import { combineReducers } from "redux";
import userSlice from "../features/auth/userSlice";

const rootReducer = combineReducers({
    userReducer: userSlice,
})

export default rootReducer