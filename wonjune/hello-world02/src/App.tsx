import './App.css'
import Profile from './components/Profile'

function App() {
  return (
    <>
      <Profile
        name='김우진'
        age={29}
        birthday='1998-01-20'
        isCheck={false}
      />
      <Profile
        name='김보혜'
        age={32}
        birthday='1995-11-06'
        isCheck={false}
      />
      <Profile
        name='김우진'
        age={29}
        birthday='1998-01-20'
        isCheck={false}
      />
      <Profile
        name='이주원'
        age={28}
        birthday='1999-04-24'
        isCheck={false}
      />
      <Profile
        name='장원준'
        age={28}
        birthday='1999-05-05'
        isCheck={true}
      />
      <Profile
        name='한이슬'
        age={31}
        birthday='1996-12-03'
        isCheck={false}
      />
      <Profile
        name='허주환'
        age={28}
        birthday='1999-06-30'
        isCheck={false}
      />
      <Profile
        name='홍석민'
        age={29}
        birthday='1998-03-31'
        isCheck={false}
      />
    </>
  )
}

export default App