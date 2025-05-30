import {useState} from 'react';
import {useBoardContext, ACTIONS} from '../../contexts/BaordContext';

const Update = ({row}) => {
  const dispatch = useBoardContext();
  const [toggle, setToggle] = useState(false);
  const [item, setItem] = useState({title: row.title || ''});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItem((prevItem) => ({
      ...prevItem,
      [name]: value,
    }));
  };

  const handleToggle = () => {
    if (!toggle) {
      setItem({title: row.title || ''});
    }
    setToggle((prev) => !prev);
  };

  return (
    <>
      <div className="board-row ful">
        <button onClick={handleToggle}>수정</button>
      </div>
      {toggle && (
          <div className="board-row">
            <div className="board-item">
              <input
                  type="text"
                  name="title"
                  placeholder="제목"
                  defaultValue={row.title}
                  onChange={handleChange}
              />
            </div>
            <div className="board-item row">
              <button onClick={() => {
                  dispatch({type: ACTIONS.CHANGED, key: row.key, changes: item});
                  setToggle((prev) => !prev); // toggle 상태 전환
                }}
              >확인</button>
            </div>
          </div>
      )}
    </>
  );
};

export default Update;
