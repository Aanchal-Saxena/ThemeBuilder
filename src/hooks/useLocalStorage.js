import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { saveThemesToStorage } from '../utils/localStorage'

export const useLocalStorageSync = () => {
  const savedThemes = useSelector((state) => state.theme.savedThemes)

  useEffect(() => {
    saveThemesToStorage(savedThemes)
  }, [savedThemes])
}