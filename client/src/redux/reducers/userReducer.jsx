import { createSlice } from "@reduxjs/toolkit";

const initailState = {
  user: [],
};

const userSlice = createSlice({
  name: "user",
  initialState: initailState,
  reducers: {
    addUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const {addUser} = userSlice.actions
export default userSlice.reducer
