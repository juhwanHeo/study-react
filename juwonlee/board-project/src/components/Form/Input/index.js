import { useState, useEffect } from 'react'
import  './Input.css'

function Input({ type, id, label, value, onChange, onKeyDown }) {
  const [inputValue, setInputValue] = useState('')
  useEffect(() => {
    setInputValue(value || '')
  }, [value]);

  const onChangeHandler = (e) => {
    setInputValue(e.target.value)
    if (onChange && onChange instanceof Function) onChange(e)
  }

  const onKeyDownHandler = (e) => {
    if (onKeyDown && onKeyDown instanceof Function) onKeyDown(e)
  }

  return (
    <div className='input-group'>
      <input type={ type || 'text' } name='' id={ id } placeholder=' ' value={ inputValue } onChange={ onChangeHandler } onKeyDown={ onKeyDownHandler } />
      <label htmlFor={ id }>{ label }</label>
    </div>
  );
}

export default Input;
