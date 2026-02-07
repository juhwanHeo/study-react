export default function Profile() {
  const name = "장원준";
  const age = "28";
  const birthday = "1999.05.05";
  const textStyle = {color:'white', fontWeight:'bold'};
  return (
    <div style={{background:'blue', borderRadius:'25%', padding:'10px'}}>
      <p style={textStyle}>이름:{name}</p>
      <p style={textStyle}>나이:{age}</p>
      <p style={textStyle}>생년월일:{birthday}</p>
    </div>
  );
}