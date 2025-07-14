import './DashboardHeader.css'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setThemeName, saveTheme } from '../store/themeSlice'

const DashboardHeader = ({ isCreateTheme = false }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [tempName, setTempName] = useState('')
  const themeName = useSelector((state) => state.theme.themeName)
  const isEditingTheme = useSelector((state) => state.theme.isEditing)
  const dispatch = useDispatch()

  const handleEditClick = () => {
    setTempName(themeName)
    setIsEditing(true)
  }

  const handleSave = () => {
    if (tempName.trim()) {
      dispatch(setThemeName(tempName.trim()))
    }
    setIsEditing(false)
  }

  const handleCancel = () => {
    setTempName('')
    setIsEditing(false)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSave()
    } else if (e.key === 'Escape') {
      handleCancel()
    }
  }
  return (
    <div className="dashboard-header">
      <div className="header-left">
        <h1 className="header-title">{isCreateTheme ? 'Theme Builder' : 'Themes'}</h1>
        {isCreateTheme && (
          <div className="header-subtitle">
            {isEditing ? (
              <div className="edit-container">
                <input 
                  type="text" 
                  value={tempName}
                  onChange={(e) => setTempName(e.target.value)}
                  onKeyDown={handleKeyPress}
                  onBlur={handleSave}
                  className="theme-name-input"
                  autoFocus
                />
              </div>
            ) : (
              <>
                <span>{themeName}</span>
                <svg 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  className="pencil-icon"
                  onClick={handleEditClick}
                >
                  <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" fill="currentColor"/>
                </svg>
              </>
            )}
          </div>
        )}
      </div>
      {isCreateTheme && (
        <button className="save-button" onClick={() => dispatch(saveTheme())}>
          {isEditingTheme ? 'Update Theme' : 'Save Theme'}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="arrow-icon">
            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" fill="currentColor"/>
          </svg>
        </button>
      )}
    </div>
  )
}

export default DashboardHeader