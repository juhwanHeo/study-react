import {useEffect, useState} from 'react';
import {useBoardContext, ACTIONS} from '../../contexts/BaordContext';

const Create = () => {
  const dispatch = useBoardContext();
  const [toggle, setToggle] = useState(false);
  const [item, setItem] = useState({title: '', creator: ''});

  useEffect(() => {
    if (!toggle) {
      setItem({title: '', creator: ''});
    }
  }, [toggle]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItem((prevItem) => ({
      ...prevItem,
      [name]: value
    }));
  };

  return (
      <>
        <div className="board-row ful">
          <button onClick={() => setToggle((prev) => !prev)}>생성</button>
        </div>
        {toggle && (
            <div className="board-row">
              <div className="board-item">+</div>
              <div className="board-item">
                <input
                  type="text"
                  name="title"
                  placeholder="제목"
                  value={item.title}
                  onChange={handleChange}
                />
              </div>
              <div className="board-item">
                <input
                  type="text"
                  name="creator"
                  placeholder="작성자"
                  value={item.creator}
                  onChange={handleChange}
                />
              </div>
              <div className="board-item row">
                <button onClick={() => {
                  dispatch({type: ACTIONS.ADDED, newItem: {key: crypto.randomUUID(), ...item}});
                  setToggle((prev) => !prev); // toggle 상태 전환
                }}>확인</button>
              </div>
            </div>
        )}
      </>
  );
};

export default Create;
