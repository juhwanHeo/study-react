import {useBoardContext, ACTIONS} from '../../contexts/BaordContext';

const Delete = ({row}) => {
  const dispatch = useBoardContext();

  return (
    <div className="board-row ful">
      <button onClick={() => {
        dispatch({
          type: ACTIONS.DELETED,
          key: row.key
        })
      }}>삭제</button>
    </div>
  );
};

export default Delete;
