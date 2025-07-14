const STORAGE_KEY = 'themeBuilder_themes'

export const loadThemesFromStorage = () => {
  try {
    const themes = localStorage.getItem(STORAGE_KEY)
    return themes ? JSON.parse(themes) : []
  } catch (error) {
    console.error('Error loading themes from localStorage:', error)
    return []
  }
}

export const saveThemesToStorage = (themes) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(themes))
  } catch (error) {
    console.error('Error saving themes to localStorage:', error)
  }
}

export const clearThemesFromStorage = () => {
  try {
    localStorage.removeItem(STORAGE_KEY)
  } catch (error) {
    console.error('Error clearing themes from localStorage:', error)
  }
}