import { useState, useEffect } from 'react'
import  './Input.css'

function Input({ type, id, label, value, onChange }) {
  const [inputValue, setInputValue] = useState('')
  useEffect(() => {
    setInputValue(value || '')
  }, [value]);

  const onChangeHandler = (e) => {
    setInputValue(e.target.value)
    onChange(e)
  }

  return (
    <div className='input-group'>
      <input type={ type || 'text' } name='' id={ id } placeholder=' ' value={ inputValue } onChange={ onChangeHandler } />
      <label htmlFor={ id }>{ label }</label>
    </div>
  );
}

export default Input;
