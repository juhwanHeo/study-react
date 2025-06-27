import cva, { cx } from "~/styles/stylesUtil";
import type { BoardItem } from "~/services/board";
import { Link } from "react-router";

export default function Board ({ item }: { item?: BoardItem }) {
  item = { title: "제목", creator: "작성자", id: 1, seq: 2, contents: "" };
  const form: BoardItem = { ...item };

  return (
    <>
      <div className="text-4xl font-bold">수정 화면</div>
      <form className="p-6 max-w-3xl mx-auto space-y-6">
        <div className="space-y-4">
          <label className="block">
            <span className="text-lg font-semibold">제목</span>
            <input
              name="title"
              value={ form.title }
              className="w-full mt-1 px-3 py-2 border rounded"
              required
            />
          </label>

          <label className="block">
            <span className="text-lg font-semibold">작성자</span>
            <input
              name="creator"
              value={ form.creator }
              className="w-full mt-1 px-3 py-2 border rounded"
              required
            />
          </label>
        </div>

        <div>
          <label className="block">
            <span className="text-lg font-semibold">내용</span>
            <textarea
              name="contents"
              value={ form.contents }
              rows={ 6 }
              className="w-full mt-1 px-3 py-2 border rounded resize-none"
              placeholder="내용을 입력하세요"
            />
          </label>
        </div>

        <div className={ cx(cva.row(), "border-none", "items-center") }>
          <Link to="/board" className={ cx(cva.button()) }>
            목록화면
          </Link>
          <button type="submit" className={ cx(cva.button({ color: "blue" })) }>
            저장
          </button>
        </div>
      </form>
    </>
  );
}