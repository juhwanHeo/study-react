import { createBrowserRouter, Navigate } from "react-router-dom";
import Board from "../components/board/Board";
import BoardDetail from "../components/board/BoardDetail";
import BoardEdit from "../components/board/BoardEdit";
import Task1 from "../components/week8/task1/Task1";
import Task2 from "../components/week8/task2/Task2";
import { AppLayout } from "../layout/AppLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/board" replace />,
      },
      {
        path: "board",
        element: <Board />,
      },
      {
        path: "board/:id",
        element: <BoardDetail />,
      },
      {
        path: "board/:id/edit",
        element: <BoardEdit />,
      },
      {
        path: "task1",
        element: <Task1 />,
      },
      {
        path: "task2",
        element: <Task2 />,
      },
    ],
  },
]);

export default router;
