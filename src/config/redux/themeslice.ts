import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface ThemeState {
  theme: 'light' | 'dark';
}

const storedTheme = (localStorage.getItem('theme') as 'light' | 'dark') || 'light';

const initialState: ThemeState = {
  theme: storedTheme,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<'light' | 'dark'>) => {
      localStorage.setItem('theme', action.payload);
      state.theme = action.payload;
      document.documentElement.setAttribute('data-theme', action.payload);
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;