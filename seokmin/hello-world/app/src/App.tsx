import '../App.css'
import Profile from './components/Profile'

const profileData = [
  { id: 1, name: '김보혜', age: 32, birth: '1995-11-06', isCheck: false },
  { id: 2, name: '한이슬', age: 31, birth: '1996-12-03', isCheck: false },
  { id: 3, name: '홍석민', age: 29, birth: '1998-03-31', isCheck: true },
  { id: 4, name: '김우진', age: 29, birth: '1998-05-04', isCheck: false },
  { id: 5, name: '이주원', age: 28, birth: '1999-04-31', isCheck: false },
  { id: 6, name: '장원준', age: 28, birth: '1999-05-05', isCheck: false },
  { id: 7, name: '허주환', age: 28, birth: '1999-06-30', isCheck: false },
  { id: 8, name: '조수현', age: 26, birth: '2001-09-20', isCheck: false },
]

function App() {
  return (
    <>
      {profileData.map((profile) => (
        <Profile
          key={profile.id}
          name={profile.name}
          age={profile.age}
          birth={profile.birth}
          isCheck={profile.isCheck}
        />
      ))}
    </>
  )
}

export default App
