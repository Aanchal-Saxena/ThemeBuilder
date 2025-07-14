import './CreateThemeSidebar.css'
import { useState } from 'react'

const CreateThemeSidebar = ({ activeItem, setActiveItem }) => {

  const sidebarData = [
    {
      sectionName: 'LAYOUT ELEMENTS',
      items: [
        { title: 'Title', subtitle: 'Main heading Text' },
        { title: 'Subtitle', subtitle: 'Secondary text' },
        { title: 'Options', subtitle: 'Selectable Option' }
      ]
    },
    {
      sectionName: 'INTERACTIVE ELEMENTS',
      items: [
        { title: 'Primary CTA', subtitle: 'Main Action Button' },
        { title: 'Secondary CTA', subtitle: 'Secondary Action Button' },
        { title: 'Rating Stars', subtitle: 'Star rating display' }
      ]
    },
    {
      sectionName: 'CONTROLS',
      items: [
        { title: 'Cross Button', subtitle: 'Dismiss Action' },
        { title: 'Sound Toggle', subtitle: 'Audio controls' },
        { title: 'Minimize/Maximize', subtitle: 'Window controls' }
      ]
    }
  ]

  return (
    <div className="create-theme-sidebar">
      {sidebarData.map((section, sectionIndex) => (
        <div key={sectionIndex} className="sidebar-section">
          <h3 className="section-title">{section.sectionName}</h3>
          <div className="section-items">
            {section.items.map((item, itemIndex) => {
              const itemKey = `${sectionIndex}-${itemIndex}`
              return (
                <div 
                  key={itemIndex} 
                  className={`theme-sidebar-item ${activeItem === itemKey ? 'active' : ''} ${(itemKey !== '0-0' && itemKey !== '0-1') ? 'disabled' : ''}`}
                  onClick={() => (itemKey === '0-0' || itemKey === '0-1') && setActiveItem(itemKey)}
                >
                  <div className="theme-item-title">{item.title}</div>
                  <div className="theme-item-subtitle">{item.subtitle}</div>
                </div>
              )
            })}
          </div>
        </div>
      ))}
    </div>
  )
}

export default CreateThemeSidebar