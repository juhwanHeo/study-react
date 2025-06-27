import { type RouteConfig, index, route, prefix } from "@react-router/dev/routes";

export default [
  ...prefix("board", [
    index("routes/board+/index.tsx"),
    route(":id", "routes/board+/$id.tsx"),
    route(":id/edit", "routes/board+/$id.edit.tsx"),
  ]),
] satisfies RouteConfig;
