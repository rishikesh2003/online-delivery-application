import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Slice/userSlice";

const userStore = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default userStore;
