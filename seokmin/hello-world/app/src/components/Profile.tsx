export default function Profile() {
    const userData = {
        name: "홍석민",
        age: 29,
        birth: "1998.03.31",
        photo: "thsm0331",
    };

    return (
        <div style={styles.container}>
            <h1>프로필</h1>
            <img
                src={`https://github.com/${userData.photo}.png`}
                alt=''
                style={styles.image}
            />
            <p>이름: {userData.name}</p>
            <p>나이: {userData.age}</p>
            <p>생년월일: {userData.birth}</p>
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    image: {
        width: '15rem',
    }
};