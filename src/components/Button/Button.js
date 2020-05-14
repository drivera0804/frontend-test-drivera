import React from 'react'
import './Button.scss'

const Button = (props) => {
	const { type, label, handleClick } = props
  return (
    <div type={type} className='button-wrapper'>
      <button onClick={handleClick}> {label} </button>
    </div>
  )
}
export default Button
