import './App.css'
import ProfileList from "./components/Profile/ProfileList.tsx";
import type {ProfileInfo} from "./components/Profile/types.ts";

const profiles:ProfileInfo[] = [
  {id: crypto.randomUUID(), name: '김보혜', age: 32, birth: '1995-11-06', isCheck: false},
  {id: crypto.randomUUID(), name: '한이슬', age: 31, birth: '1996-12-03', isCheck: true},
  {id: crypto.randomUUID(), name: '홍석민', age: 29, birth: '1998-03-31', isCheck: false},
  {id: crypto.randomUUID(), name: '김우진', age: 29, birth: '1998-05-04', isCheck: false},
  {id: crypto.randomUUID(), name: '이주원', age: 28, birth: '1999-04-31', isCheck: false},
  {id: crypto.randomUUID(), name: '장원준', age: 28, birth: '1999-05-05', isCheck: false},
  {id: crypto.randomUUID(), name: '허주환', age: 28, birth: '1999-06-30', isCheck: false},
  {id: crypto.randomUUID(), name: '조수현', age: 26, birth: '2001-09-20', isCheck: false}
]

function App() {
  return (
    <>
      <ProfileList profiles={profiles}></ProfileList>
    </>
  )
}

export default App
