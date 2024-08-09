function Article({ articles }) {
    const list = []
    articles.forEach((e) => {
        list.push(
            <a key={e.id}>
                <div>
                    <div id="titleContainer">
                        <span>{e.id}    </span>
                        <span>
                            {e.title}
                        </span>
                    </div>
                    <div>
                        <div>{e.content}</div>
                        <div>{e.creator}</div>
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

export default Article;