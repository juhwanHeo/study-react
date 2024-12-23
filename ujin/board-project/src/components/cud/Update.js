import "../Board.css";

function Update({ titleId, titleRef }) {
    return (
        <div>
            <button className="edit-button" onClick={ () => editPost(titleRef) }>
                수정
            </button>
        </div>
    );

    function editPost(titleRef) {
        const newTitle = prompt("새로운 title")
        
        const node = titleRef.current.get(titleId)
        if (newTitle) node.innerText = newTitle
    }    
}

export default Update;