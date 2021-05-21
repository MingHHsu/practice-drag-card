import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  num: 0,
};

const { actions, reducer } = createSlice({
  name: 'count',
  initialState,
  reducers: {
    increase(state) {
      return { num: state.num + 1 };
    },
    decrease(state) {
      return { num: state.num - 1 };
    },
  },
});

export const {
  increase,
  decrease,
} = actions;

export default reducer;
