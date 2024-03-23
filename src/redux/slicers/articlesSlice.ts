import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Article from "../../interfaces/IArticle";

interface ArticlesState {
  articles: Article[];
  loading: boolean;
  error: string | null;
}

export const fetchArticles = createAsyncThunk<Article[]>(
  "articles/fetchArticles",
  async () => {
    const { data } = await axios.get<Article[]>(
      import.meta.env.VITE_MEDIUM_URL
    );
    return data;
  }
);

const initialState: ArticlesState = {
  articles: [],
  loading: false,
  error: null,
};

const articlesSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.articles = action.payload;
        state.loading = false;
      })
      .addCase(fetchArticles.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default articlesSlice.reducer;
export const articlesSelector = (state: any) => state.articles;
