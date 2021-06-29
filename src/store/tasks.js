import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { apiCallBegan } from "./api";
import { userLoggedIn } from "./user";

const slice = createSlice({
  name: "tasks",
  initialState: {
    list: [],
    loadingTasks: false,
    loadingAddTask: false,
  },
  reducers: {
    taskAdded: (tasks, action) => {
      console.log("Task added");
    },
    taskAddRequested: (tasks, action) => {
      console.log("Task add requested");
    },
    taskAddRequestFailed: (tasks, action) => {
      console.log("Task add failed");
    },
    tasksLoaded: (tasks, action) => {
      console.log("Tasks loaded");
      console.log("Tasks: " + action.payload);
      tasks.list = action.payload;
    },
    tasksLoadRequested: (tasks, action) => {
      console.log("Tasks load requested");
    },
    tasksLoadRequestFailed: (tasks, action) => {
      console.log("Tasks load request failed");
    },
    taskStatusChanged: (tasks, action) => {
      console.log("Task status changed");
    },
    taskStatusChangeRequested: (tasks, action) => {
      console.log("Task status change requested");
    },
    taskStatusChangeRequestFailed: (tasks, action) => {
      console.log("Task status change request failed");
    },
    taskDeleted: (tasks, action) => {
      console.log("Task deleted");
    },
    taskDeletionRequested: (tasks, action) => {
      console.log("Task deletion requested");
    },
    taskDeletionRequestFailed: (tasks, action) => {
      console.log("Task deletion request failed");
    },
  },
});

export const {
  taskAdded,
  taskAddRequested,
  taskAddRequestFailed,
  tasksLoaded,
  tasksLoadRequested,
  tasksLoadRequestFailed,
  taskStatusChanged,
  taskStatusChangeRequested,
  taskStatusChangeRequestFailed,
  taskDeleted,
  taskDeletionRequested,
  taskDeletionRequestFailed,
} = slice.actions;

export default slice.reducer;

const url = "/tasks";

export const addTask = (task) =>
  apiCallBegan({
    url,
    method: "post",
    data: task,
    onStart: taskAddRequested.type,
    onSuccess: taskAdded.type,
    onError: taskAddRequestFailed.type,
  });

export const loadTasks = (userId) => (dispatch) => {
  console.log(userId);
  dispatch(
    apiCallBegan({
      url: url + "/" + userId,
      method: "get",
      onStart: tasksLoadRequested.type,
      onSuccess: tasksLoaded.type,
      onError: tasksLoadRequestFailed.type,
    })
  );
};

export const changeTaskStatus = (task) =>
  apiCallBegan({
    url: url + "/" + task.id,
    method: "patch",
    onStart: taskStatusChangeRequested.type,
    onSuccess: taskStatusChanged.type,
    onError: taskStatusChangeRequestFailed.type,
  });

export const deleteTask = (task) =>
  apiCallBegan({
    url: url + "/" + task.id,
    method: "delete",
    data: task.id,
    onStart: taskDeletionRequested.type,
    onSuccess: taskDeleted.type,
    onError: taskDeletionRequestFailed.type,
  });
