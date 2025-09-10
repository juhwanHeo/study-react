import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    //index("routes/home.tsx"),
    // {
    //     path: "/",
    //     index: true,
    //     file: "routes/home.tsx",
    // },
    // {
    //     path: "/board",
    //     file: "components/board/board.tsx",
    // }
    route("/board", "./routes/board.tsx"),
    route("/board/:boardId", "./components/board/routes/boardDetail.tsx"),
    route("/board/:boardId/edit", "./components/board/routes/boardEdit.tsx"),
] satisfies RouteConfig;
