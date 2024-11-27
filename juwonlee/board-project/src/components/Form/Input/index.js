import { useState, useEffect } from 'react'
import  './Input.css'

function Input({ type, id, label, value, hint, onChange, onKeyDown }) {
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
      <input type={ type || 'text' } name='' id={ id } placeholder={ hint || ' ' } value={ inputValue } onChange={ onChangeHandler } onKeyDown={ onKeyDownHandler } />
      <label htmlFor={ id }>{ label }</label>
    </div>
  );
}

export default Input;
