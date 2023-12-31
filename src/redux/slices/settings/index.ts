import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface SettingsState {
  themeMode: string;
}

const initialState: SettingsState = {
  themeMode: 'light'
};

const settingsSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setThemeMode: (state, action: PayloadAction<string>) => {
      state.themeMode = action.payload;
    }
  }
});

export const { setThemeMode } = settingsSlice.actions;

export default settingsSlice.reducer;
