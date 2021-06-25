import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";

const slice = createSlice({
  name: "user",
  initialState: {
    email: null,
    userId: null,
    status: {
      loggedIn: false,
    },
    applicationStatus: {
      page: "/",
    },
  },
  reducers: {
    userLoggedIn: (user, action) => {
      console.log("Logged In");
    },
    userLoginRequested: (user, action) => {
      console.log(console.log("User login requested"));
    },
    userLoginRequestFailed: (user, action) => {
      console.log("User login request failed");
    },
  },
});

export const { userLoggedIn, userLoginRequestFailed, userLoginRequested } =
  slice.actions;

export default slice.reducer;

const url = "/auth";

export const userLogin = (user) =>
  apiCallBegan({
    url,
    method: "post",
    data: user,
    onSuccess: userLoggedIn.type,
    onStart: userLoginRequested.type,
    onError: userLoginRequestFailed.type,
  });
