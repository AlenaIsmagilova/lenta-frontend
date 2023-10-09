import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IAuthState {
  accessToken: string;
  isLoggedIn: boolean;
}

const initialState: IAuthState = {
  accessToken: "",
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (
      state,
      { payload: { token } }: PayloadAction<{ token: string }>
    ) => {
      state.accessToken = token;
      state.isLoggedIn = true;
    },
    exitFromProfile: (state, action) => (state.isLoggedIn = action.payload),
  },
});

export const { setCredentials, exitFromProfile } = authSlice.actions;
export default authSlice.reducer;
