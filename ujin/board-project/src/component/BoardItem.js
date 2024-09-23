function BoardItem({ items }) {
    const list = []
    if (items.length < 1) {
        return (<div>No Contents......</div>);
    }
    items.forEach((e, index) => {
        list.push(
            <a key={e.id + index}>
                <div>
                    <div id="titleContainer">
                        <span> {e.id} </span>
                        <span> {e.title} </span>
                        <span> {e.content} </span>
                        <span> {e.creator} </span>
                    </div>
                </div>
            </a>
        )
    });
    return(
        <section id="boardList">
            {list}
        </section>
    );
}

export default BoardItem;