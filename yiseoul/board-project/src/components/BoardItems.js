import { useState, useEffect } from 'react'
import NoItems from "./NoItems";

const loadItems = async () => {
    const res = await fetch("http://heojh.iptime.org:8003/board");
    return await res.json();
}

function BoardItems() {
    const headerItems = ["Seq", "Title", "Creator"]
    const [items, setItems] = useState([]);
    useEffect(() => {
        loadItems().then((res) => setItems(res || []))
    }, [items]);

    return (
        <div className="board">
            <table border="1" cellPadding="10">
                <thead>
                {headerItems.map((col, idx) => (
                    <th key={idx}>{col}</th>
                ))}
                </thead>
                <tbody>
                {items && items.length > 0 ? (
                    items.map((article, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{article.title}</td>
                            <td>{article.creator}</td>
                        </tr>
                    ))
                ) : NoItems({headerItems})}
                </tbody>
            </table>
        </div>
    );
}

export default BoardItems;
