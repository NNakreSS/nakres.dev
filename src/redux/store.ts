import { configureStore } from "@reduxjs/toolkit";
import theme from "./slicers/themeSlice";

const Store = configureStore({
  reducer: {
    theme,
  },
});

export default Store;
