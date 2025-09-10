import type { Route } from "./+types/boardDetail";
import { getBoardDetail } from "../data/boardData";
import { Form, Link } from "react-router";

export async function loader({ params }: Route.LoaderArgs) {
    const boardId = (params as { boardId?: string }).boardId;
    if (!boardId) {
        throw new Error("Board ID is required");
    }
    const boardDetail = await getBoardDetail(boardId);
    return { boardDetail };
}

export default function BoardEdit({ loaderData }: Route.ComponentProps) {
    console.log("BoardEdit component rendered");
    console.log(loaderData);
    const boardDetail = loaderData.boardDetail;

    if (!boardDetail) {
        return <div>No Board Detail Available</div>;
    }

    return (
        <div>
            <h2>Edit Board</h2>
            <div>
                <strong>ID:</strong> {boardDetail.id}
            </div>
            <Form method="post" action={`/board/${boardDetail.id}/edit`}>
                <div>
                    <label>
                        <strong>Title:</strong>
                        <input type="text" name="title" defaultValue={boardDetail.title} />
                    </label>
                </div>
            </Form>
            <Form method="post" action={`/board/${boardDetail.id}/edit`}>
                <div>
                    <label>
                        <strong>Content:</strong>
                        <input type="text" name="title" defaultValue={boardDetail.content} />
                    </label>
                </div>
            </Form>
            <Form method="post" action={`/board/${boardDetail.id}/edit`}>
                <div>
                    <label>
                        <strong>Creator:</strong>
                        <input type="text" name="title" defaultValue={boardDetail.creator} />
                    </label>
                </div>
            </Form>
            <div>
                <button className="edit-button">Save</button>
            </div>
        </div>
    );
}   