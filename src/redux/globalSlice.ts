import { createSlice } from "@reduxjs/toolkit";

interface GlobalState {
  config: any;
}

const initialState: GlobalState = {
  config: [],
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setConfig: (state, action) => {
      state.config = action.payload;
    },
  },
});

export const { setConfig } = globalSlice.actions;
export default globalSlice.reducer;
