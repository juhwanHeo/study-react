import { createContext } from 'react';

export interface BoardItem {
    id: number;
    seq?: number;
    title: string;
    content?: string;
    creator: string;
}

export const BoardContext = createContext<Array<BoardItem> | null>(null);
