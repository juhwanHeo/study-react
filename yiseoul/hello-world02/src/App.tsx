import './App.css'
import Profile from './components/Profile'

function App() {

  return (
    <>
      <Profile name={'김보혜'} age={32} birth={'1995-11-06'} isCheck={false}></Profile>
      <Profile name={'한이슬'} age={31} birth={'1996-12-03'} isCheck={true}></Profile>
      <Profile name={'홍석민'} age={29} birth={'1998-03-31'} isCheck={false}></Profile>
      <Profile name={'김우진'} age={29} birth={'1998-05-04'} isCheck={false}></Profile>
      <Profile name={'이주원'} age={28} birth={'1999-04-31'} isCheck={false}></Profile>
      <Profile name={'장원준'} age={28} birth={'1999-05-05'} isCheck={false}></Profile>
      <Profile name={'허주환'} age={28} birth={'1999-06-30'} isCheck={false}></Profile>
      <Profile name={'조수현'} age={26} birth={'2001-09-20'} isCheck={false}></Profile>
    </>
  )
}

export default App
