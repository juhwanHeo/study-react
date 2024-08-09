import Article from './Article';
import { useState } from 'react';

function Board({ board }) {
    const [articles, setArticles] = useState([]); 
    return(
        <section id="board">
            <div id="board-title">
                <h1 onClick={()=> {
                    setArticles(
                        [
                            {
                              id: 1,
                              title: "title 1",
                              content: "content 1",
                              creator: "creator 1"
                            },
                            {
                              id: 2,
                              title: "title 2",
                              content: "content 2",
                              creator: "creator 2"
                            },
                            {
                              id: 3,
                              title: "title 3",
                              content: "content 3",
                              creator: "creator 3"
                            }
                          ]
                    )
                    console.log(articles)
                }}>
                    TEST
                </h1>
                <div>
                </div>
            </div>
            <div id="board-list" onClick={()=> {setArticles([])}}>
                <Article articles={articles}></Article>
            </div>
        </section>
    );
}

export default Board;