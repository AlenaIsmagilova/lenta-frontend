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

//заменить типизацию позже, пока нет времени
export const { setCredentials }: any = authSlice.actions;
export default authSlice.reducer;
