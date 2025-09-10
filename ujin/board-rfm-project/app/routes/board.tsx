import type { Route } from "./+types/board";
import "../components/board/board.css";
import { getBoardList } from "../components/board/data/boardData";
import { Link } from "react-router";

export async function clientLoader() {
  const boardList = await getBoardList();
  return { boardList };
}

function BoardList({ boardList }: { boardList: any[] }) {
    const list: any[] = []

    if (!boardList || boardList.length < 1) {
        return (<div>No Contents......</div>);
    }
    boardList.forEach((e, index) => {
        list.push(
            <a key={e.id + index}>
                <Link to={`/board/${e.id}`}>
                    <div className="board-body">
                        <div className="post">
                            <span className="post-id"> {e.id} </span>
                            <span className="post-title"> {e.title} </span>
                            <span className="post-content"> {e.content} </span>
                            <span className="post-date"> {e.creator} </span>
                        </div>
                    </div>
                </Link>
            </a>
        )
    });
    return(
        <section id="boardList">
            {list}
        </section>
    );
}

export default function Board({ loaderData }: Route.ComponentProps) {
    console.log("Board component rendered");
    console.log(loaderData);
    return (
        <div>
            <section className="searchBar">
                {/* <Search/> */}
            </section>
            <section className="board">
                <div className="board-header">
                    <h1 onClick={()=> {
                    }}> 
                        ID | Title | Creator | etc
                    </h1>
                    <div>
                    </div>
                </div>
                <div>
                    <BoardList boardList={loaderData.boardList || []} />
                </div>
            </section>
            {/* <Create/> */}
        </div>
    );
}