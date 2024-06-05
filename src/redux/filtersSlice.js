import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "filters",
  initialState: { nameFilter: "" },
  reducers: {
    changeFilter: (state, action) => {
      state.nameFilter = action.payload;
    },
  },
});

export const { changeFilter } = slice.actions;

export const selectNameFilter = (state) =>
  state.filters.nameFilter;

export default slice.reducer;
