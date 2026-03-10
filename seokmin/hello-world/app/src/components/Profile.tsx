type ProfileProps = {
  name: string
  age: number
  birth: string
  isCheck: boolean
}

export default function Profile({ name, age, birth, isCheck }: ProfileProps) {
  const userData = {
    photo: "thsm0331",
  }

  return (
    <div style={{
      display: 'flex'
      , flexDirection: 'column'
      , alignItems: 'center'
      , justifyContent: 'center'
      , padding: '1.6rem'
      , margin: '1rem 10rem'
      , borderRadius: '1rem'
      , border: isCheck ? '2px solid #25343F' : '2px solid #FF9B51'
      , color: isCheck ? '#25343F' : '#FF9B51'
    }}>
      <h1>프로필</h1>

      {isCheck ? (
        <>
          <p>이름: {name}</p>
          <p>나이: {age}</p>
          <p>생년월일: {birth}</p>
        </>
      ) : (
        <p>이름: {name}</p>
      )}
    </div>
  )
}

const styles = {
  image: {
    width: '15rem',
    borderRadius: '50%'
  }
}