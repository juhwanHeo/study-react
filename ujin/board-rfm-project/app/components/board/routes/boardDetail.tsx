import type { Route } from "./+types/boardDetail";
import { getBoardDetail } from "../data/boardData";
import { Link } from "react-router";

export async function loader({ params }: Route.LoaderArgs) {
    const boardId = (params as { boardId?: string }).boardId;
    if (!boardId) {
        throw new Error("Board ID is required");
    }
    const boardDetail = await getBoardDetail(boardId);
    return { boardDetail };
}

export default function BoardDetail({ loaderData }: Route.ComponentProps) {
    console.log("BoardDetail component rendered");
    console.log(loaderData);
    const boardDetail = loaderData.boardDetail;

    if (!boardDetail) {
        return <div>No Board Detail Available</div>;
    }

    return (
        <div>
            <h2>Board Detail</h2>
            <div>
                <strong>ID:</strong> {boardDetail.id}
            </div>
            <div>
                <strong>Title:</strong> {boardDetail.title}
            </div>
            <div>
                <strong>Content:</strong> {boardDetail.content}
            </div>
            <div>
                <strong>Creator:</strong> {boardDetail.creator}
            </div>
            <div>
                <strong>Date:</strong> {boardDetail.date}
            </div>
            <div>
                <button className="edit-button" onClick={() => {
                    <Link to={`/board/${boardDetail.id}/edit`}></Link>
                }}>Edit</button>
            </div>
        </div>
    );
}