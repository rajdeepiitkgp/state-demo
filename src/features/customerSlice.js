import { createSlice } from '@reduxjs/toolkit';

const initialState = { names: [] };

const customerSlice = createSlice({
  name: 'customer',
  initialState,
  reducers: {
    addName: (state, action) => ({
      ...state,
      names: [...new Set([...state.names, action.payload])],
    }),
    removeName: (state, action) => ({
      ...state,
      names: [...state.names].filter((t) => t !== action.payload),
    }),
  },
});

export const { addName, removeName } = customerSlice.actions;

export default customerSlice.reducer;
