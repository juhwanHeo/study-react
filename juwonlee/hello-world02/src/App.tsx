import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Profile from "./components/Profile.tsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <Profile
        name="이주원"
        age={28}
        birthDate={new Date('1999-04-24')}
        isCheck
      />

      <Profile
        name="허주환"
        age={28}
        birthDate={new Date('1999-06-30')}
      />

      <Profile
        name="장원준"
        age={29}
        birthDate={new Date('1999-05-05')}
      />

      <Profile
        name="홍석민"
        age={29}
        birthDate={new Date('1998-03-31')}
      />

      <Profile
        name="조수현"
        age={26}
        birthDate={new Date('2001-09-20')}
      />

      <Profile
        name="한이슬"
        age={29}
        birthDate={new Date('1996-12-03')}
      />

      <Profile
        name="김우진"
        age={29}
        birthDate={new Date('1998-05-04')}
      />

      <Profile
        name="김보혜"
        age={32}
        birthDate={new Date('1995-11-06')}
      />
    </>
  )
}

export default App
