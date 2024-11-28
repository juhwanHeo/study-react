import {useEffect, useState} from "react";

const Update = ({event, row}) => {
  const [toggle, setToggle] = useState(false);
  const [item, setItem] = useState({title: row.title || ''});
  // const inputRef = useRef(null);

  useEffect(() => {
    if (!toggle) {
      setItem({title: row.title || ''});
    }
  }, [toggle]);

  const handleChange = (e) => {
    // setToggle((prev) => !prev);
    // event(row.key, { title: inputRef.current.value });
    const { name, value } = e.target;
    setItem((prevItem) => ({
      ...prevItem,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="board-row ful">
        <button onClick={() => setToggle((prev) => !prev)}>수정</button>
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
                  event(row.key, item);  // 이벤트 함수 실행 (전달된 데이터를 처리)
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
