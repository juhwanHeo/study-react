import type { Route } from "./+types/home";
import Profile from "../src/components/Profile";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <>
      <Profile isChecked={true} name="김우진" age={25} birthDay="2020-03-08"/>
      <Profile name="한이슬" />
      <Profile name="허주환" />
      <Profile name="이주원" />
      <Profile name="홍석민" />
      <Profile name="장원준" />
      <Profile name="김보혜" />
    </>
  );
}
