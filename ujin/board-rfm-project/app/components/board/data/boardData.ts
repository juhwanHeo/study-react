export async function getBoardList() {
    console.log("BoardDataList is called");
    const response = await fetch('http://heojh.iptime.org:8003/board');

    const items = await response.json();
    return items;
}

export async function getBoardDetail(boardId: string) {
    console.log("getBoardDetail is called with boardId:", boardId);
    const response = await fetch(`http://heojh.iptime.org:8003/board/${boardId}`);

    if (!response.ok) {
        throw new Error(`Error fetching board detail: ${response.statusText}`);
    }

    const item = await response.json();
    return item;
}