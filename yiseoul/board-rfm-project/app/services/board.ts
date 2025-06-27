export type BoardItem = {
  id: number
  seq?: number
  key?: number
  title: string
  creator: string
  contents?: string
}

export const STORAGE_KEY = "board-items";
export async function fetchInitialBoardItems(): Promise<BoardItem[]> {
  const response = await fetch("http://heojh.iptime.org:8003/board");
  const data = await response.json();
  const withIds = data.map((item: BoardItem, index: number) => ({
    ...item,
    seq: index + 1,
    key: crypto.randomUUID(),
  }));

  // localStorage.setItem(STORAGE_KEY, JSON.stringify(withIds));
  return withIds;
}

export async function fetchBoardItems(): Promise<BoardItem[]> {
  const stored = localStorage.getItem(STORAGE_KEY);
  const items: BoardItem[] = stored ? JSON.parse(stored) : [];
  return items.map((item, idx) => ({ ...item, seq: idx + 1 }));
}

export async function fetchBoardItemById(id: number): Promise<BoardItem | undefined> {
  const stored = localStorage.getItem(STORAGE_KEY);
  const items: BoardItem[] = stored ? JSON.parse(stored) : [];
  return items.find((item) => item.id === id);
}

export function saveBoardItem(form: BoardItem) {
  const stored = localStorage.getItem(STORAGE_KEY);
  let items: BoardItem[] = stored ? JSON.parse(stored) : [];

  const index = items.findIndex((item) => item.id === form.id);
  if (index === -1) return;

  items[index] = { ...form };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}