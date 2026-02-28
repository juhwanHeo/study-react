import './App.css'
import {Profile} from "./components/Profile.tsx";
import dayjs from "dayjs";

function App() {

  return (
    <>
      <Profile
        username={'김보혜'}
        age={32}
        birthday={dayjs('1995-11-06')}
        isCheck={false}
      />
      <Profile
        username={'이주원'}
        age={28}
        birthday={dayjs('1999-04-28')}
        isCheck={false}
      />
      <Profile
        username={'홍석민'}
        age={29}
        birthday={dayjs('1998-03-31')}
        isCheck={false}
      />
      <Profile
        username={'조수현'}
        age={26}
        birthday={dayjs('2001-09-20')}
        isCheck={false}
      />
      <Profile
        username={'김우진'}
        age={7}
        birthday={dayjs('2020-01-20')}
        isCheck={false}
      />
      <Profile
        username={'장원준'}
        age={28}
        birthday={dayjs('1999-05-05')}
        isCheck={false}
      />
      <Profile
        username={'한이슬'}
        age={31}
        birthday={dayjs('1996-12-03')}
        isCheck={false}
      />

      <hr/>
      <Profile
        username={'허주환'}
        age={28}
        birthday={dayjs('1999-06-30')}
        isCheck={true}
      />
      <hr/>
    </>
  )
}

export default App
