export default function Profile() {
    const name = '수현';
    const age = '26';
    const birthday = '2001. 09. 20';
    return (
        <div>
            <p>이름: {name}</p>
            <p>나이: {age}</p>
            <p>생년월일: {birthday}</p>
        </div>

    );
}