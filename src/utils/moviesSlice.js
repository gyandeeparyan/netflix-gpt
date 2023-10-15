import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    popularMovies: null,
    topRatedMovies:null,
    upcomingMovies:null,
    trailerVideo: null,
    loading:true,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    setLoading:(state)=>{
       state.loading=false
    }
  },
});

export const {addTopRatedMovies,setLoading,addUpcomingMovies, addNowPlayingMovies, addTrailerVideo, addPopularMovies } =
  moviesSlice.actions;

export default moviesSlice.reducer;