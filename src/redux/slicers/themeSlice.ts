import { createSlice } from "@reduxjs/toolkit";
import IThemaSlice from "../../interfaces/IThemeSlice";

const initialState: IThemaSlice = {
  darkMode: Number(localStorage.getItem("darkMode") ?? 1) ? true : false,
};

const reducers = {
  toggleDarkMode(state: IThemaSlice) {
    state.darkMode = !state.darkMode;
    localStorage.setItem("darkMode", state.darkMode ? "1" : "0");
  },
};

const thmeSlice = createSlice({
  name: "theme",
  initialState,
  reducers,
});

export default thmeSlice.reducer;
export const { toggleDarkMode } = thmeSlice.actions;

export const themeSelector = (state: any) => state.theme;
