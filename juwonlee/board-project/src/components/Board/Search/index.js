import { useState, useEffect } from 'react'
import  './Search.css'
import Input from '../../Form/Input'

function Search({ value, label, onSearch }) {
  const [condition, setCondition] = useState('')
  useEffect(() => {
    setCondition(value || '')
  }, [value]);

  const onChangeHandler = (e) => {
    setCondition(e.target.value)
  }

  const onKeyDownHandler = (e) => {
    if (e.keyCode === 13) onSearchHandler(condition)
  }

  const onButtonClickHandler = () => {
    onSearchHandler(condition)
  }

  const onSearchHandler = (cond) => {
    if (!cond || cond.length === 0) {
      alert('검색어를 입력해주세요.')
      return
    }

    if (onSearch && onSearch instanceof Function) onSearch(cond)
  }

  return (
    <div className="search">
      <div className="search-wrap">
        <Input id='input_cond' type='text' label={ label || '' } value={ condition } onChange={ onChangeHandler } onKeyDown={ onKeyDownHandler }/>
        <button className='search-btn' onClick={ onButtonClickHandler }>검색</button>
      </div>
    </div>
  );
}

export default Search;
