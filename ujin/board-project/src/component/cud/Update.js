import "../Board.css";

function Update({ onClick }) {

    return (
        <div>
            <button className="edit-button" onClick={ onClick }>
                수정
            </button>
        </div>
    );
}

export default Update;