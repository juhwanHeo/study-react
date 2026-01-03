import './App.css'
import {Profile} from "./components/Profile.tsx";
import dayjs from "dayjs";

function App() {

  return (
    <>
      <Profile
          username={'허주환'}
          age={28}
          birthday={dayjs('1999-06-30')}
      />
    </>
  )
}

export default App
