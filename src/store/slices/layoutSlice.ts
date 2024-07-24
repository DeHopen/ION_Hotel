import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface LayoutState {
  showMenu: boolean;
}

const initialState: LayoutState = {
  showMenu: false,
};

const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {

    setShowMenu(state, action: PayloadAction<boolean>) {
      state.showMenu = action.payload;
    },
  },
});

export const {
  setShowMenu
} = layoutSlice.actions;
export default layoutSlice.reducer;
