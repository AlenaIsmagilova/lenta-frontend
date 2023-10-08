import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IAuthState {
  accessToken: string;
}

const initialState: IAuthState = {
  accessToken: "",
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
    },
  },
});

export const { setCredentials } = authSlice.actions;
export default authSlice.reducer;
