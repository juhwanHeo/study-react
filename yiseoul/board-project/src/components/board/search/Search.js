import './search.css';
import {useState} from "react";

function Search({event, value}) {
  const [inqValue, setValue] = useState(value || '');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValue(value);
  };

  const handleOnclick = (e) => {
    if (e.type === 'keydown' && e.key !== 'Enter') {
      return;
    }

    event(inqValue);
  }

  return (
    <div className="search-container">
      <input
        type="text"
        name="search"
        className="search-input"
        placeholder="검색어를 입력해주세요."
        value={inqValue}
        onChange={handleChange}
        onKeyDown={handleOnclick}
      />
      <div className="search-button"
        onClick={handleOnclick}
      >검색</div>
    </div>
  );
}

export default Search;