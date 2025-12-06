import { createSlice } from "@reduxjs/toolkit";

import type { Movie, MoviesStatus } from "./types";

interface MoviesState {
  items: Movie[];
  status: MoviesStatus;
  error: null;
}

const initialState: MoviesState = {
  items: [],
  status: 'idle',
  error: null,
};

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {},
  extraReducers: () => {}
});

export default movieSlice.reducer;
