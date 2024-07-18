import Hello from "./components/Hello";
import Menu from "./components/Menu";

function App() {
  const site = [
    { id: 1, title: "Naver", link: "https://www.naver.com/" },
    { id: 2, title: "Google", link: "https://www.google.co.kr/?hl=ko" },
  ];

  return (
    <>
      <Hello />
      <Menu site={site} />
    </>
  );
}

export default App;
