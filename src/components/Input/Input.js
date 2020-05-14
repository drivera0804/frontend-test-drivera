import React from 'react'
import './Input.scss'

const Input = (props) => {
  const {
    type,
    name,
    label,
    placeholder,
    value,
    error,
    isRequired,
    handleChange
  } = props
  return (
    <div className='input-wrapper'>
      <label>{`${label} ${isRequired ? '*' : ''}`}</label>
      {type === 'text' && (
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
        />
      )}
      {type === 'textarea' && (
        <textarea
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
        />
      )}
      <span className='input-error-msg'> {error && error} </span>
    </div>
  )
}

export default Input
