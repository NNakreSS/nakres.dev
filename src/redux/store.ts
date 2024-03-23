import { configureStore } from "@reduxjs/toolkit";
import theme from "./slicers/themeSlice";
import articles from "./slicers/articlesSlice";

const Store = configureStore({
  reducer: {
    theme,
    articles,
  },
});

export default Store;
