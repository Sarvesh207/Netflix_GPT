const { createSlice } = require("@reduxjs/toolkit");

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    
    movieNames:[],
    movieResults:[]
    
  },
  reducers: {
   
    addGptMovieResult: (state, action) => {
      const { movieNames, movieResults } = action.payload;

      console.log(movieNames)
      console.log(movieResults)

      state.movieNames = movieNames;
      state.movieResults = movieResults; 
    }
  }  
    
  
});

export const {addGptMovieResult } = gptSlice.actions;
export default gptSlice.reducer;
