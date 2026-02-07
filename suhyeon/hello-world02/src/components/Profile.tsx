export default function Profile() {
    const name = '수현';
    const age = '26';
    const birthday = '2001. 09. 20';
    return (
        <div
            style={{
                maxWidth: '320px',
                padding: '24px',
                backgroundColor: '#ffe4ec',
                borderRadius: '18px',
                boxShadow: '0 8px 20px rgba(255, 182, 193, 0.5)',
            }}
        >
            <h3
                style={{
                    textAlign: 'center',
                }}
            >
                🍓 자기소개 🍓
            </h3>

            <div
                style={{
                    backgroundColor: '#fffafc',
                    borderRadius: '20px',
                    padding: '18px',
                    boxShadow: '0 4px 10px rgba(255, 200, 210, 0.4)',
                }}
            >
                <p>이름: {name}</p>
                <p>나이: {age}</p>
                <p>생년월일: {birthday}</p>
            </div>
        </div>
    );
}
