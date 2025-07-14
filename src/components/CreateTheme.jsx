import './CreateTheme.css'
import DashboardHeader from './DashboardHeader'
import CreateThemeSidebar from './CreateThemeSidebar'
import TitleEditor from './TitleEditor'
import SubtitleEditor from './SubtitleEditor'
import { useState } from 'react'

const CreateTheme = ({ onBack }) => {
  const [activeItem, setActiveItem] = useState('0-0')
  return (
    <div className="create-theme">
      <div className="create-theme-header">
        <button className="back-button" onClick={onBack}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <DashboardHeader isCreateTheme={true} />
      </div>
      <div className="create-theme-content">
        <CreateThemeSidebar activeItem={activeItem} setActiveItem={setActiveItem} />
        <div className="theme-editor">
          {activeItem === '0-0' && <TitleEditor />}
          {activeItem === '0-1' && <SubtitleEditor />}
        </div>
      </div>
    </div>
  )
}

export default CreateTheme