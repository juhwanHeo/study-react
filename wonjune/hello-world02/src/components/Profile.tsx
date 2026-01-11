//이름, 나이, 생년월일을 출력하는 컴포넌트입니다.
export default function Profile() {
  const name = "장원준";
  const age = "28";
  const birthday = "1999.05.05";
  return (
    <>
      <p>이름:{name}</p>
      <p>나이:{age}</p>
      <p>생년월일:{birthday}</p>
    </>
  );
}