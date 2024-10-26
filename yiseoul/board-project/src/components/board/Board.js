import React from 'react';
import BoardHeader from './BoardHeader';
import BoardItem from './BoardItem';

function Board() {
	const items = [
		{ seq: 1, title: 'title 1', content: 'content 1', creator: 'creator 1' },
		{ seq: 2, title: 'title 2', content: 'content 2', creator: 'creator 2' },
		{ seq: 3, title: 'title 3', content: 'content 3', creator: 'creator 3' },
	];

	return (
		<div className="board">
			<BoardHeader />
			<BoardItem items={items} />
		</div>
	);
}

export default Board;