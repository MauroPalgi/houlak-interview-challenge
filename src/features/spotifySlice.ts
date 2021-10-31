import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


interface IInitialState {
  access_token: string;
  expires_in: string;
  token_type: string;
}

const initialState: IInitialState = {
  access_token: "",
  expires_in: "",
  token_type: "",
};
// me quede en 1137 del tutorial de react redux
const spotifySlice = createSlice({
  name: "spotify",
  initialState,
  reducers: {
    setStateValues: (state, action) => {
      console.log(action.payload);
      if (action.payload) {
        const { access_token, expires_in, token_type } = action.payload;      
        state.access_token = access_token;
        state.expires_in = expires_in;
        state.token_type = token_type;
      }
    },
    updateRefreshID: (state, action) => {
      console.log("update");
      
    },
  },
  // extraReducers: {
  //   [getAuth.pending as any]: (state, action) => {
  //     // viene del thunk y los estados corresponden a que el thunk
  //     state.status = "loading"; // devuelve una promesa
  //   },
  //   [getAuth.fulfilled as any]: (state, action) => {
  //     state.status = "success";
  //     state.user = action.payload;
  //   },
  //   [getAuth.rejected as any]: (state, action) => {
  //     state.status = "failed";
  //   },
  // },
});

export default spotifySlice.reducer;
export const { setStateValues, updateRefreshID } = spotifySlice.actions;
