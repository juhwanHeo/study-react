import type { Route } from "./+types/home";
import Profile from "../src/components/Profile";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  const profiles = [
    { id: 1, isChecked: true, name: "김우진", age: 25, birthDay: "2020-03-08" },
    { id: 2, name: "한이슬" },
    { id: 3, name: "허주환" },
    { id: 4, name: "이주원" },
    { id: 5, name: "홍석민" },
    { id: 6, name: "장원준" },
    { id: 7, name: "김보혜" },
  ];

  return (
    <>
      {profiles.map(({ id, ...profile }) => (
        <Profile key={id} {...profile} />
      ))}
    </>
  );
}
