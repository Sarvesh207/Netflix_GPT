const { createSlice } = require("@reduxjs/toolkit");

const configSlice = createSlice({
  name: "config",
  initialState: {
    lang: "en",
  },
  reducers: {
    changeLangauge: (state, actions) => {
      state.lang = actions.payload;
    },
  },
});


export const { changeLangauge } = configSlice.actions;
export default configSlice.reducer;