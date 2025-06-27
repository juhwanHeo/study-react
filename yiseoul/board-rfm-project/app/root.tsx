import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  redirect,
} from "react-router";

import type { Route } from "./+types/root";
import "./styles/app.css";
let isInit = true;

export async function loader({ request }: Route.LoaderArgs) {
  if (isInit) {
    isInit = false;
    return redirect("/board");
  }
}

export function Document({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <title>게시판</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        { children }
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen px-4 py-6">
      { children }
    </main>
  );
}

export default function App() {
  return (
    <Document>
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details = error.status === 404
      ? "The requested page could not be found." : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{ message }</h1>
      <p>{ details }</p>
      { stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{ stack }</code>
        </pre>
      ) }
    </main>
  );
}
