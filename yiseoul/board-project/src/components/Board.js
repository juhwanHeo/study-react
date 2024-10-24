import NoItems from "./NoItems";

function Board() {
    const headerItems = ["Seq", "Title", "Creator"]
    const boardItems = [
        { title: 'Test 제목 1', creator: 'Test 생성자 1' },
        { title: 'Test 제목 2', creator: 'Test 생성자 2' },
        { title: 'Test 제목 3', creator: 'Test 생성자 3' }
    ];

    return (
        <div className="board">
            <table border="1" cellPadding="10">
            <thead>
                <tr>
                    {
                        headerItems.map((col, idx) => (<th key={idx}>{col}</th>))
                    }
                </tr>
                </thead>
                <tbody>
                {boardItems && boardItems.length > 0 ? (
                    boardItems.map((article, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{article.title}</td>
                            <td>{article.creator}</td>
                        </tr>
                    ))
                ) : NoItems}
                </tbody>
            </table>
        </div>
    );
}

export default Board;
