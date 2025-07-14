import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import './App.css'

function App() {
  const [activeItem, setActiveItem] = useState('Dashboard')

  return (
    <div className="app">
      <Sidebar onItemSelect={setActiveItem} />
      <Dashboard activeItem={activeItem} />
    </div>
  )
}

export default App