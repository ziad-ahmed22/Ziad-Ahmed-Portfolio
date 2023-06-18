import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const url = "https://api.github.com/users/ziad-ahmed22/repos";

export const fetchRepos = createAsyncThunk("repoSlice/fetchRepos", async () => {
  const res = await axios.get(url);
  return res.data;
});

const initialState = {
  data: [],
  loading: false,
  error: "",
};

const repoSlice = createSlice({
  name: "repoSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRepos.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchRepos.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchRepos.rejected, (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = action.error.message;
    });
  },
});

export default repoSlice.reducer;
