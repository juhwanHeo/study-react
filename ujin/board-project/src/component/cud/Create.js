import "../Board.css";

function Create({ onClick }) {

    return (
        <div>
            <button className="post-button" onClick={ onClick }>
                생성
            </button>
        </div>
    );
}

export default Create;