import { createSlice } from '@reduxjs/toolkit';

const initialState = { balance: 0 };
const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    deposit: (state, action) => ({
      ...state,
      balance: state.balance + action.payload
    }),
    withdraw: (state, action) => ({
      ...state,
      balance: state.balance - action.payload
    }),
  },
});

export const { deposit, withdraw } = accountSlice.actions;

export default accountSlice.reducer;
