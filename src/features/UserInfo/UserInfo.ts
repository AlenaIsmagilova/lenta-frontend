import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IUserInfo {
  first_name: string;
  last_name: string;
  store_ids: string;
  current_date: string;
}

const initialState: IUserInfo = {
  first_name: "",
  last_name: "",
  store_ids: "",
  current_date: "",
};

const userInfo = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    getUserInfo: (state, action: PayloadAction<IUserInfo>) => {
      state.current_date = action.payload.current_date;
      state.first_name = action.payload.first_name;
      state.last_name = action.payload.last_name;
      state.store_ids = action.payload.store_ids;
    },
  },
});

//заменить типизацию позже, пока нет времени
export const { getUserInfo }: any = userInfo.actions;
export default userInfo.reducer;
