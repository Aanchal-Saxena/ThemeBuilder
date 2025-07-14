import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  themeName: 'Theme name',
  titleStyles: {
    color: '#FD5F03',
    fontFamily: 'Arial',
    fontSize: 16,
    alignment: 'left',
    text: 'Your Amazing Title'
  },
  subtitleStyles: {
    color: '#666666',
    fontFamily: 'Arial',
    fontSize: 14,
    alignment: 'left',
    text: 'This is your subtitle text that appears below the main title'
  },
  savedThemes: [],
  showThemesList: false,
  toast: null
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setThemeName: (state, action) => {
      state.themeName = action.payload
    },
    setTitleColor: (state, action) => {
      state.titleStyles.color = action.payload
    },
    setTitleFont: (state, action) => {
      state.titleStyles.fontFamily = action.payload
    },
    setTitleSize: (state, action) => {
      state.titleStyles.fontSize = action.payload
    },
    setTitleAlignment: (state, action) => {
      state.titleStyles.alignment = action.payload
    },
    setTitleText: (state, action) => {
      const text = action.payload.slice(0, 50)
      state.titleStyles.text = text
    },
    setSubtitleColor: (state, action) => {
      state.subtitleStyles.color = action.payload
    },
    setSubtitleFont: (state, action) => {
      state.subtitleStyles.fontFamily = action.payload
    },
    setSubtitleSize: (state, action) => {
      state.subtitleStyles.fontSize = action.payload
    },
    setSubtitleAlignment: (state, action) => {
      state.subtitleStyles.alignment = action.payload
    },
    setSubtitleText: (state, action) => {
      const text = action.payload.slice(0, 100)
      state.subtitleStyles.text = text
    },
    saveTheme: (state) => {
      const newTheme = {
        id: Date.now(),
        name: state.themeName,
        titleStyles: { ...state.titleStyles },
        subtitleStyles: { ...state.subtitleStyles },
        createdAt: new Date().toISOString().split('T')[0],
        usedIn: 'Not used yet'
      }
      state.savedThemes.push(newTheme)
      state.showThemesList = true
      state.toast = { message: 'Theme saved successfully!', type: 'success' }
    },
    setShowThemesList: (state, action) => {
      state.showThemesList = action.payload
    },
    deleteTheme: (state, action) => {
      state.savedThemes = state.savedThemes.filter(theme => theme.id !== action.payload)
      if (state.savedThemes.length === 0) {
        state.showThemesList = false
      }
      state.toast = { message: 'Theme deleted successfully!', type: 'success' }
    },
    deleteSelectedThemes: (state, action) => {
      state.savedThemes = state.savedThemes.filter(theme => !action.payload.includes(theme.id))
      if (state.savedThemes.length === 0) {
        state.showThemesList = false
      }
      state.toast = { message: `${action.payload.length} theme(s) deleted successfully!`, type: 'success' }
    },
    clearToast: (state) => {
      state.toast = null
    },
  },
})

export const { setThemeName, setTitleColor, setTitleFont, setTitleSize, setTitleAlignment, setTitleText, setSubtitleColor, setSubtitleFont, setSubtitleSize, setSubtitleAlignment, setSubtitleText, saveTheme, setShowThemesList, deleteTheme, deleteSelectedThemes, clearToast } = themeSlice.actions

export default themeSlice.reducer