import './Dashboard.css'
import DashboardHeader from './DashboardHeader'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setShowThemesList, clearToast } from '../store/themeSlice'
import CreateTheme from './CreateTheme'
import ThemesList from './ThemesList'
import Toast from './Toast'

const Dashboard = ({ activeItem }) => {
  const [showCreateTheme, setShowCreateTheme] = useState(false)
  const showThemesList = useSelector((state) => state.theme.showThemesList)
  const toast = useSelector((state) => state.theme.toast)
  const dispatch = useDispatch()

  useEffect(() => {
    if (showThemesList) {
      setShowCreateTheme(false)
    }
  }, [showThemesList])

  const savedThemes = useSelector((state) => state.theme.savedThemes)

  if (showCreateTheme) {
    return <CreateTheme onBack={() => setShowCreateTheme(false)} />
  }

  if (showThemesList && savedThemes.length > 0) {
    return <ThemesList onCreateTheme={() => {
      dispatch(setShowThemesList(false))
      setShowCreateTheme(true)
    }} />
  }
  return (
    <div className="dashboard">
      <DashboardHeader />
      <div className="dashboard-content">
        <div className="content-center">
          <div className="images-section">
            <img src="/placeholder1.jpg" alt="Theme 1" className="theme-image" />
            <img src="/placeholder2.jpg" alt="Theme 2" className="theme-image" />
            <img src="/placeholder3.jpg" alt="Theme 3" className="theme-image" />
          </div>
          
          <h1 className="main-title">Create Your First Theme</h1>
          
          <div className="description-wrapper">
            <p className="main-description">
              Themes help you customize the look and feel of your campaigns. Create beautiful, branded experiences that engage your audience and drive conversions.
            </p>
          </div>
          
          <button className="create-button" onClick={() => setShowCreateTheme(true)}>
            Create New Theme
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="plus-icon">
              <path d="M12 5v14m-7-7h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          
          <div className="cards-section">
            <div className="card">
              <img src="/card-icon1.jpg" alt="Icon 1" className="card-icon" />
              <h3 className="card-title">Visual Customization</h3>
              <p className="card-description">Customize colors, fonts, layouts and interactive elements to match your brand perfectly.</p>
            </div>
            <div className="card">
              <img src="/card-icon2.jpg" alt="Icon 2" className="card-icon" />
              <h3 className="card-title">Responsive Design</h3>
              <p className="card-description">Your themes automatically adapt to all devices and screen sizes for optimal user experience.</p>
            </div>
            <div className="card">
              <img src="/card-icon3.jpg" alt="Icon 3" className="card-icon" />
              <h3 className="card-title">Quick Setup</h3>
              <p className="card-description">Get started in minutes with our intuitive theme builder and pre-designed templates.</p>
            </div>
          </div>
        </div>
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

export default Dashboard