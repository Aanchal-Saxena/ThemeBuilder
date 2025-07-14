import { createSlice } from '@reduxjs/toolkit'
import { loadThemesFromStorage, saveThemesToStorage } from '../utils/localStorage'

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
  savedThemes: loadThemesFromStorage(),
  showThemesList: loadThemesFromStorage().length > 0,
  toast: null,
  isEditing: false,
  editingThemeId: null
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
      if (state.isEditing && state.editingThemeId) {
        const themeIndex = state.savedThemes.findIndex(t => t.id === state.editingThemeId)
        if (themeIndex !== -1) {
          state.savedThemes[themeIndex] = {
            ...state.savedThemes[themeIndex],
            name: state.themeName,
            titleStyles: { ...state.titleStyles },
            subtitleStyles: { ...state.subtitleStyles }
          }
          state.toast = { message: 'Theme updated successfully!', type: 'success' }
        }
      } else {
        const newTheme = {
          id: Date.now(),
          name: state.themeName,
          titleStyles: { ...state.titleStyles },
          subtitleStyles: { ...state.subtitleStyles },
          createdAt: new Date().toISOString().split('T')[0],
          usedIn: 'Not used yet'
        }
        state.savedThemes.push(newTheme)
        state.toast = { message: 'Theme saved successfully!', type: 'success' }
      }
      saveThemesToStorage(state.savedThemes)
      state.showThemesList = true
      state.isEditing = false
      state.editingThemeId = null
    },
    setShowThemesList: (state, action) => {
      state.showThemesList = action.payload
    },
    deleteTheme: (state, action) => {
      state.savedThemes = state.savedThemes.filter(theme => theme.id !== action.payload)
      saveThemesToStorage(state.savedThemes)
      if (state.savedThemes.length === 0) {
        state.showThemesList = false
      }
      state.toast = { message: 'Theme deleted successfully!', type: 'success' }
    },
    deleteSelectedThemes: (state, action) => {
      const deletedCount = action.payload.length
      state.savedThemes = state.savedThemes.filter(theme => !action.payload.includes(theme.id))
      saveThemesToStorage(state.savedThemes)
      if (state.savedThemes.length === 0) {
        state.showThemesList = false
      }
      state.toast = { message: `${deletedCount} theme(s) deleted successfully!`, type: 'success' }
    },
    clearToast: (state) => {
      state.toast = null
    },
    editTheme: (state, action) => {
      const theme = state.savedThemes.find(t => t.id === action.payload)
      if (theme) {
        state.themeName = theme.name
        state.titleStyles = { ...theme.titleStyles }
        state.subtitleStyles = { ...theme.subtitleStyles }
        state.showThemesList = false
        state.isEditing = true
        state.editingThemeId = action.payload
      }
    },
    resetTheme: (state) => {
      state.themeName = 'Theme name'
      state.titleStyles = {
        color: '#FD5F03',
        fontFamily: 'Arial',
        fontSize: 16,
        alignment: 'left',
        text: 'Your Amazing Title'
      }
      state.subtitleStyles = {
        color: '#666666',
        fontFamily: 'Arial',
        fontSize: 14,
        alignment: 'left',
        text: 'This is your subtitle text that appears below the main title'
      }
      state.isEditing = false
      state.editingThemeId = null
    },
  },
})

export const { setThemeName, setTitleColor, setTitleFont, setTitleSize, setTitleAlignment, setTitleText, setSubtitleColor, setSubtitleFont, setSubtitleSize, setSubtitleAlignment, setSubtitleText, saveTheme, setShowThemesList, deleteTheme, deleteSelectedThemes, clearToast, editTheme, resetTheme } = themeSlice.actions

export default themeSlice.reducer