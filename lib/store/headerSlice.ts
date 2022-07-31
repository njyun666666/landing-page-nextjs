import { headerColorModeType } from './../types/header.type';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface HeaderState {
  headerColorMode: headerColorModeType;
}

const initialState: HeaderState = {
  headerColorMode: '',
};

export const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    setDarkToLight: (state, action: PayloadAction<headerColorModeType>) => {
      state.headerColorMode = action.payload;
    },
  },
});

export const { setDarkToLight } = headerSlice.actions;

export default headerSlice.reducer;
