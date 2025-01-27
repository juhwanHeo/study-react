import "../Board/Board.css";

function Delete({ onClick }) {

    return (
        <div>
            <button className="delete-button" onClick={ onClick }>
                삭제
            </button>
        </div>
    );
}

export default Delete;