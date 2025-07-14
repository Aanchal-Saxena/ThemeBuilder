import { useState } from 'react'
import './Sidebar.css'

const Sidebar = ({ onItemSelect }) => {
  const [activeItem, setActiveItem] = useState('Dashboard')

  const menuItems = [
    { name: 'Dashboard', icon: '/Sidebar/Home.svg' },
    { name: 'Campaigns', icon: '/Sidebar/Activity.svg' },
    { name: 'Integrations', icon: '/Sidebar/Category.svg' },
    { name: 'Cohorts', icon: '/Sidebar/3User.svg' },
    { name: 'Manage Users', icon: '/Sidebar/AddUser' },
    { name: 'Billing', icon: '/Sidebar/Ticket.svg' }
  ]

  const handleItemClick = (itemName) => {
    setActiveItem(itemName)
    onItemSelect(itemName)
  }

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <img src="/Main/Logo.svg" alt="AppStorys" className="sidebar-logo" />
        <span className="sidebar-title">AppStorys</span>
      </div>
      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <div
            key={item.name}
            className={`sidebar-item ${activeItem === item.name ? 'active' : ''}`}
            onClick={() => handleItemClick(item.name)}
          >
            <img src={item.icon} alt={item.name} className="sidebar-icon" />
            <span className="sidebar-text">{item.name}</span>
          </div>
        ))}
      </nav>
    </div>
  )
}

export default Sidebar