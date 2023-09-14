import { createSlice } from "@reduxjs/toolkit";

const initailState = {
  user: [],
};

const userSlice = createSlice({
  name: "user",
  initialState: initailState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    logout:(state)=>{
      state.isAuthenticated = false;
      state.user = null;
    }
  },
});

export const {login,logout} = userSlice.actions
export default userSlice.reducer
