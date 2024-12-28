import "../Board/Board.css";
import { useBoardDispatch } from "../Board/Context/BoardContext";

function Create({ onClick }) {
    const dispatch = useBoardDispatch();

    return (
        <div>
            <button className="post-button" onClick={ () => {
                dispatch({
                    type: 'Create'
                });
            }}>
                생성
            </button>
        </div>
    );
}

export default Create;