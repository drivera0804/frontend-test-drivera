import React from 'react'
import './Header.scss'

const Title = () => (
  <div className='title-section'>
    <h1>Test <span> Beetrack </span></h1>
  </div>
)

const Header = () => {
  return (
    <div className='header-wrapper'>
      <Title />
    </div>
  )
}

export default Header
