import { useState } from 'react'
import './App.css'
import Profile from './components/Profile';

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIMglPfQOzVWxMsb67lTUwcnl-kuv4w1Diqg&s" className="logo" alt="Vite logo" />
            </div>
            <h1>자기소개 컴포넌트</h1>
            <div className="card">
                <Profile />
            </div>
        </>
    )
}

export default App
