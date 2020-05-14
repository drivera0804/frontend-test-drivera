import React, { useState } from 'react';
import searchIcon from './../../assets/search.svg'
import './SearchInput.scss'

const INTERVAL = 500

const SearchInput = (props) => {
  const { handleChange } = props
  const [value, setValue] = useState('')
  let typingTimer

  const handleKeyDown = () => {
    clearTimeout(typingTimer)
  }
 
  const handleKeyUp = () => {
    clearTimeout(typingTimer)
    typingTimer = setTimeout(() =>{ handleChange(value) }, INTERVAL)
  }

  return (
    <div className='search-input-wrapper'>
      <div className='input-logo'>
        <img alt='searchIcon' src={searchIcon} />
      </div>
      <input
        type='text'
        name='search'
        value={value}
        placeholder='Buscar contacto...'
        onChange={ event => { setValue(event.target.value) }}
        onKeyUp={handleKeyUp}
        onKeyDown={handleKeyDown}
      />
    </div>
  )
}

export default SearchInput
