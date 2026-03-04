type ProfileProps = {
  name: string
  age: number
  birth: string
}

export default function Profile({ name, age, birth }: ProfileProps) {
  const userData = {
    photo: "thsm0331",
  }

  return (
    <div style={{
      display: 'flex'
      , flexDirection: 'column'
      , alignItems: 'center'
      , justifyContent: 'center'
      , minHeight: '100vh'
      , background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
    }}>
      <h1>프로필</h1>
      <img
        src={`https://github.com/${userData.photo}.png`}
        alt=''
        style={styles.image}
      />
      <p>이름: {name}</p>
      <p>나이: {age}</p>
      <p>생년월일: {birth}</p>
    </div>
  )
}

const styles = {
  image: {
    width: '15rem',
    borderRadius: '50%'
  }
}