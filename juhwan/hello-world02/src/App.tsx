import './App.css'
import {Profile} from "./components/Profile.tsx";
import dayjs, {type Dayjs} from "dayjs";

interface ProfileItem {
  id: string;
  username: string;
  age: number;
  birthday: Dayjs;
  isCheck?: boolean;
}

function App() {
  const profiles: ProfileItem[] = [
    {
      id: '김보혜_19951106',
      username: '김보혜',
      age: 32,
      birthday: dayjs('1995-11-06'),
    },
    {
      id: '이주원_19900424',
      username: '이주원',
      age: 28,
      birthday: dayjs('1990-04-24'),
    },
    {
      id: '홍석민_19980331',
      username: '홍석민',
      age: 29,
      birthday: dayjs('1998-03-31'),
    },
    {
      id: '조수현_20010920',
      username: '조수현',
      age: 26,
      birthday: dayjs('2001-09-20'),
    },
    {
      id: '김우진_20200120',
      username: '김우진',
      age: 7,
      birthday: dayjs('2020-01-20'),
    },
    {
      id: '장원준_19990505',
      username: '장원준',
      age: 28,
      birthday: dayjs('1999-05-05'),
    },
    {
      id: '한이슬_19961203',
      username: '한이슬',
      age: 31,
      birthday: dayjs('1996-12-03'),
    },
    {
      id: '허주환_19990630',
      username: '허주환',
      age: 28,
      birthday: dayjs('1999-06-30'),
      isCheck: true,
    },
  ]

  return (
    <>
      <div>스터디원 목록</div>
      {
        profiles.map((profile: ProfileItem) => (
          <Profile
            key={profile.id}
            username={profile.username}
            age={profile.age}
            birthday={profile.birthday}
            isCheck={profile.isCheck}
          />
        ))
      }
    </>
  )
}

export default App
