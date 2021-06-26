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
      user.email = action.payload.email;
      user.userId = action.payload.userId;
      user.status.loggedIn = true;
      user.applicationStatus.page = "/home";
    },
    userLoginRequested: (user, action) => {
      console.log("User login requested");
    },
    userLoginRequestFailed: (user, action) => {
      console.log("User login request failed");
    },
    userCreated: (user, action) => {
      console.log("Account successfully created");
      user.email = action.payload.email;
      user.userId = action.payload.userId;
      user.status.loggedIn = true;
      user.applicationStatus.page = "/home";
    },
    userCreationRequested: (user, action) => {
      console.log("User creation requested");
    },
    userCreationFailed: (user, action) => {
      if (action.payload === "Request failed with status code 409") {
        console.log("An account with this email already exists");
      }
    },
  },
});

export const {
  userLoggedIn,
  userLoginRequestFailed,
  userLoginRequested,
  userCreated,
  userCreationRequested,
  userCreationFailed,
} = slice.actions;

export default slice.reducer;

const url = "/auth";

export const userLogin = (user) =>
  apiCallBegan({
    url: url + "/login",
    method: "post",
    data: user,
    onSuccess: userLoggedIn.type,
    onStart: userLoginRequested.type,
    onError: userLoginRequestFailed.type,
  });

export const userCreate = (user) =>
  apiCallBegan({
    url: url + "/signup",
    method: "post",
    data: user,
    onSuccess: userCreated.type,
    onStart: userCreationRequested.type,
    onError: userCreationFailed.type,
  });
