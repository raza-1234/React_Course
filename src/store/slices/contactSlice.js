import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: 'Contact Slice',
  initialState: {
    info: ['township', 'bahria', 'islam pura'],
    names: ['ahmed', 'saad', 'umer']
  },
  reducers: {
    addInfo: (state, actions) => { //reducer function does not return anything.
      state.info.push(actions.payload)
    },
    removeInfo: (state, actions) => {
      state.info.pop()
    },
    clearInfo: (state, actions) => {
      state.info = []
    }
  }
})

export const {addInfo, removeInfo, clearInfo} = slice.actions;

export default slice.reducer;