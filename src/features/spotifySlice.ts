import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// INTERFACE
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

// const fetchSpotifyData = createAsyncThunk(
//   'users/fetchByIdStatus',
//   async (userId, thunkAPI) => {
//     const response = await userAPI.fetchById(userId)
//     return response.data
//   }
// )

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
  extraReducers: {
    // Add reducers for additional action types here, and handle loading state as needed
    // [fetchUserById.fulfilled]: (state, action) => {
    //   // Add user to the state array
    //   state.entities.push(action.payload);
    // },
  },
});

export default spotifySlice.reducer;
export const { setStateValues, updateRefreshID } = spotifySlice.actions;
