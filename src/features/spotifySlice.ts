import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getUsers = createAsyncThunk(
  "users/getUsers",
  async (dispact, getState) => {
    return await fetch("https://jsonplaceholder.typicode.com/users").then(
      (res) => res.json()
    );
  }
);
// me quede en 1137 del tutorial de react redux
// const userSlice = createSlice({
//   name: "user",
//   initialState: {
//     users: [],
//     status: null,
//   },
//   extraReducers: {
//     [getUsers.pending]: (state, action) => {
//       // viene del thunk y los estados corresponden a que el thunk
//       state.status = "loading"; // devuelve una promesa
//     },
//     [getUsers.fulfilled]: (state, action) => {
//       state.status = "success";
//       state.action = action.payload;
//     },
//     [getUsers.rejected]: (state, action) => {
//       state.status = "failed";
//     },
//   },
// });

// export default spotifySlice.reducer;
