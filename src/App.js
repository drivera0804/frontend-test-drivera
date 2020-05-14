import React from 'react'
import Header from 'sections/Header'
import UsersDashboard from 'sections/UsersDashboard'
import './App.scss'

const App = () => {
  return (
    <div className='app'>
      <Header />
      <UsersDashboard />
    </div>
  )
}

export default App
