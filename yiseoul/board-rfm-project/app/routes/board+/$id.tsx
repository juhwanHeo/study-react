import cva, { cx } from "~/styles/stylesUtil";
import type { BoardItem } from "~/services/board";
import { Link } from "react-router";

export default function Board ({ item }: { item?: BoardItem }) {
  item = { title: "제목", creator: "작성자", id: 1, seq: 2, contents: "" };

  return (
    <>
      <div className="text-4xl font-bold">상세 화면</div>
      <div className="p-6 max-w-3xl mx-auto space-y-6">
        <div className="space-y-2">
          <div className="text-2xl font-bold">{ item.title }</div>
          <div className="text-sm text-gray-500">작성자: { item.creator }</div>
        </div>

        <div className="border-t border-b py-4 text-gray-800 whitespace-pre-wrap">
          내용 없음
        </div>

        <div className={ cx(cva.row(), "border-none", "items-center") }>
          <Link to={ `/board` } className={ cx(cva.button()) }>
            목록화면
          </Link>
          <Link to={ `/board/${ item.id }/edit` } className={ cx(cva.button()) }>
            수정화면
          </Link>
        </div>
      </div>
    </>
  );
}