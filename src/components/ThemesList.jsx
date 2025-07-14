import './ThemesList.css'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteTheme, deleteSelectedThemes, clearToast } from '../store/themeSlice'
import Toast from './Toast'

const ThemesList = ({ onCreateTheme }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedThemes, setSelectedThemes] = useState([])
  const [activeDropdown, setActiveDropdown] = useState(null)
  const savedThemes = useSelector((state) => state.theme.savedThemes)
  const toast = useSelector((state) => state.theme.toast)
  const dispatch = useDispatch()

  const handleSelectTheme = (themeId) => {
    setSelectedThemes(prev => 
      prev.includes(themeId) 
        ? prev.filter(id => id !== themeId)
        : [...prev, themeId]
    )
  }

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedThemes(filteredThemes.map(theme => theme.id))
    } else {
      setSelectedThemes([])
    }
  }

  const handleDropdownAction = (action, themeId) => {
    if (action === 'delete') {
      dispatch(deleteTheme(themeId))
    }
    setActiveDropdown(null)
  }

  const handleBulkDelete = () => {
    if (selectedThemes.length > 0) {
      dispatch(deleteSelectedThemes(selectedThemes))
      setSelectedThemes([])
    }
  }

  const filteredThemes = savedThemes.filter(theme => 
    theme.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="themes-list">
      <div className="themes-header">
        <h1 className="themes-title">Themes</h1>
        <button className="create-theme-btn" onClick={onCreateTheme}>
          Create Theme +
        </button>
      </div>

      <div className="themes-controls">
        <input
          type="text"
          placeholder="Search themes..."
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button 
          className="delete-btn" 
          disabled={selectedThemes.length === 0}
          onClick={handleBulkDelete}
        >
          Delete
        </button>
      </div>

      <div className="themes-table-container">
        <table className="themes-table">
          <thead>
            <tr>
              <th>
                <input
                  type="checkbox"
                  onChange={handleSelectAll}
                  checked={selectedThemes.length === filteredThemes.length && filteredThemes.length > 0}
                />
              </th>
              <th>Theme Name</th>
              <th>Created At</th>
              <th>Used In</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {filteredThemes.map((theme) => (
              <tr key={theme.id}>
                <td>
                  <input
                    type="checkbox"
                    checked={selectedThemes.includes(theme.id)}
                    onChange={() => handleSelectTheme(theme.id)}
                  />
                </td>
                <td className="theme-name">{theme.name}</td>
                <td>{theme.createdAt}</td>
                <td>{theme.usedIn}</td>
                <td className="actions-cell">
                  <button
                    className="actions-btn"
                    onClick={() => setActiveDropdown(activeDropdown === theme.id ? null : theme.id)}
                  >
                    ⋯
                  </button>
                  {activeDropdown === theme.id && (
                    <div className="actions-dropdown">
                      <button onClick={() => handleDropdownAction('duplicate', theme.id)}>
                        Duplicate
                      </button>
                      <button onClick={() => handleDropdownAction('delete', theme.id)}>
                        Delete
                      </button>
                      <button onClick={() => handleDropdownAction('edit', theme.id)}>
                        Edit
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {toast && (
        <Toast 
          message={toast.message}
          type={toast.type}
          onClose={() => dispatch(clearToast())}
        />
      )}
    </div>
  )
}

export default ThemesList