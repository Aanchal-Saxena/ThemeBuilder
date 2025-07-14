import './TitleEditor.css'
import { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import IPhonePreview from './IPhonePreview'

const BaseTextEditor = ({ 
  type, 
  title, 
  maxLength = 50,
  actions: { setColor, setFont, setSize, setAlignment, setText }
}) => {
  const dispatch = useDispatch()
  const styles = useSelector((state) => state.theme[`${type}Styles`])
  const { fontFamily, fontSize, alignment, text, color } = styles
  const [isEditing, setIsEditing] = useState(false)
  const [tempText, setTempText] = useState('')
  const [showColorPicker, setShowColorPicker] = useState(false)
  const colorPickerRef = useRef(null)

  const colorOptions = [
    '#FD5F03', '#FF6B6B', '#4ECDC4', '#45B7D1', 
    '#96CEB4', '#FFEAA7', '#DDA0DD', '#000000'
  ]

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (colorPickerRef.current && !colorPickerRef.current.contains(event.target)) {
        setShowColorPicker(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleEdit = () => {
    setTempText(text)
    setIsEditing(true)
  }

  const handleSave = () => {
    if (tempText.trim()) {
      dispatch(setText(tempText.trim()))
    }
    setIsEditing(false)
  }

  const handleCancel = () => {
    setTempText('')
    setIsEditing(false)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSave()
    } else if (e.key === 'Escape') {
      handleCancel()
    }
  }

  const fontOptions = ['Arial', 'Helvetica', 'Times New Roman', 'Georgia', 'Verdana']

  const handleFontSizeChange = (value) => {
    const newSize = Math.max(8, Math.min(72, parseInt(value) || 16))
    dispatch(setSize(newSize))
  }

  return (
    <div className="title-editor">
      <div className="editor-content">
        {isEditing ? (
          <input 
            type="text" 
            value={tempText}
            onChange={(e) => setTempText(e.target.value)}
            onKeyDown={handleKeyPress}
            onBlur={handleSave}
            className="title-input"
            maxLength={maxLength}
            autoFocus
          />
        ) : (
          <h3 className="editor-title" onClick={handleEdit}>
            {text}
            <svg 
              width="14" 
              height="14" 
              viewBox="0 0 24 24" 
              fill="none" 
              className="edit-hint"
            >
              <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" fill="currentColor"/>
            </svg>
          </h3>
        )}
        
        <div className="editor-sections">
          <div className="editor-section">
            <div className="section-label">COLOR</div>
            <div className="section-sublabel">Text</div>
            <div className="color-picker-container" ref={colorPickerRef}>
              <div 
                className="color-box" 
                style={{ backgroundColor: color }}
                onClick={() => setShowColorPicker(!showColorPicker)}
              ></div>
              {showColorPicker && (
                <div className="color-dropdown">
                  {colorOptions.map((colorOption) => (
                    <div
                      key={colorOption}
                      className={`color-option ${color === colorOption ? 'selected' : ''}`}
                      style={{ backgroundColor: colorOption }}
                      onClick={() => {
                        dispatch(setColor(colorOption))
                        setShowColorPicker(false)
                      }}
                    ></div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="editor-section">
            <div className="section-label">TEXT STYLE</div>
            <div className="font-controls">
              <div className="font-group">
                <div className="section-sublabel">Font</div>
                <select 
                  className="font-dropdown" 
                  value={fontFamily} 
                  onChange={(e) => dispatch(setFont(e.target.value))}
                >
                  {fontOptions.map(font => (
                    <option key={font} value={font}>{font}</option>
                  ))}
                </select>
              </div>
              <div className="size-group">
                <div className="section-sublabel">Size</div>
                <div className="size-input-container">
                  <input 
                    type="text" 
                    className="size-input" 
                    value={fontSize}
                    onChange={(e) => handleFontSizeChange(e.target.value)}
                  />
                  <div className="size-arrows">
                    <button onClick={() => handleFontSizeChange(fontSize + 1)}>▲</button>
                    <button onClick={() => handleFontSizeChange(fontSize - 1)}>▼</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="editor-section">
            <div className="section-sublabel">Alignment</div>
            <div className="alignment-options">
              <button 
                className={`align-btn ${alignment === 'left' ? 'active' : ''}`}
                onClick={() => dispatch(setAlignment('left'))}
              >
                <svg width="20" height="16" viewBox="0 0 20 16">
                  <rect x="0" y="2" width="16" height="2"/>
                  <rect x="0" y="6" width="12" height="2"/>
                  <rect x="0" y="10" width="14" height="2"/>
                </svg>
              </button>
              <button 
                className={`align-btn ${alignment === 'center' ? 'active' : ''}`}
                onClick={() => dispatch(setAlignment('center'))}
              >
                <svg width="20" height="16" viewBox="0 0 20 16">
                  <rect x="2" y="2" width="16" height="2"/>
                  <rect x="4" y="6" width="12" height="2"/>
                  <rect x="3" y="10" width="14" height="2"/>
                </svg>
              </button>
              <button 
                className={`align-btn ${alignment === 'right' ? 'active' : ''}`}
                onClick={() => dispatch(setAlignment('right'))}
              >
                <svg width="20" height="16" viewBox="0 0 20 16">
                  <rect x="4" y="2" width="16" height="2"/>
                  <rect x="8" y="6" width="12" height="2"/>
                  <rect x="6" y="10" width="14" height="2"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <IPhonePreview />
    </div>
  )
}

export default BaseTextEditor