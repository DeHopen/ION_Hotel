import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface LayoutState {
  showMenu: boolean;
  showNav: boolean;
}

const initialState: LayoutState = {
  showMenu: false,
  showNav: true,
};

const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {

    setShowMenu(state, action: PayloadAction<boolean>) {
      state.showMenu = action.payload;
    },
    setShowNav(state, action: PayloadAction<boolean>) {
      state.showNav = action.payload;
    },
  },
});

export const {
  setShowMenu, setShowNav
} = layoutSlice.actions;
export default layoutSlice.reducer;
