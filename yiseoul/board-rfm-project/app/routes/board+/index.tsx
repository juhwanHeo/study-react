import cva, { cx } from "~/styles/stylesUtil";
import type { Route } from "./+types/index";
import { Link, useLoaderData } from "react-router";
import { fetchBoardItems, fetchInitialBoardItems } from "~/services/board";
import type { BoardItem } from "~/services/board";

export async function loader({ params }: Route.LoaderArgs) {
  return fetchInitialBoardItems();
}

export default function Board ({}) {
  const items = useLoaderData() as BoardItem[];
  return (
    <>
      <div className={ cx(cva.row({ type: "header" })) }>
        <div className={ cx("col-span-3", "grid grid-cols-subgrid") }>
          <div className={ cva.cell() }>
            Seq
          </div>
          <div className={ cva.cell() }>
            Title
          </div>
          <div className={ cx(cva.cell()) }>
            Creator
          </div>
        </div>
        <div className={ cx(cva.cell(), "border-none") }>
          Action
        </div>
      </div>
      {
        !items?.length ? (
          <div className={ cx(cva.row()) }>
            <div className={ cx(cva.cell({ type: "full" })) }>
              No Contents
            </div>
          </div>
        ) : (
          items.map((item) => (
            <div key={ item.key } className={ cx(cva.row()) }>
              <div className={ cx("col-span-3", "grid grid-cols-subgrid") }>
                <div className={ cva.cell() }>
                  { item.seq }
                </div>
                <div className={ cva.cell() }>
                  { item.title }
                </div>
                <div className={ cva.cell() }>
                  { item.creator }
                </div>
              </div>
              <div className={ cx(cva.cell(), "flex", "space-x-2", "border-none") }>
                <Link
                  to={ `/board/${ item.id }` }
                  className={ cx(cva.button()) }>
                  상세
                </Link>
                <Link
                  to={ `/board/${ item.id }/edit` }
                  className={ cx(cva.button()) }>
                  수정
                </Link>
              </div>
            </div>
          ))
        )
      }
    </>
  )
}