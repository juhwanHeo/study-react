const titleStyle = {
  color: "#2c3e50",
  marginBottom: "20px",
  fontSize: "32px",
  fontWeight: "bold",
  textAlign: "center" as const,
  borderBottom: "3px solid #3498db",
  paddingBottom: "10px",
};

const textStyle = {
  fontSize: "18px",
  color: "#34495e",
  margin: "15px 0",
  padding: "8px 0",
  borderLeft: "4px solid #3498db",
  paddingLeft: "15px",
  lineHeight: "1.6",
};

type ProfileProps = {
  name: string;
  age: number;
  birthDate: string;
  isChecked: boolean;
};

export const Profile = ({
  name,
  age,
  birthDate,
  isChecked = true,
}: ProfileProps) => {
  return (
    <div
      style={{
        maxWidth: "500px",
        minWidth: "260px",
        padding: "30px",
        backgroundColor: "#f8f9fa",
        borderRadius: "12px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h1 style={titleStyle}>Profile</h1>
      <p style={textStyle}>Name: {name}</p>
      {isChecked && <p style={textStyle}>Age: {age}</p>}
      {isChecked && <p style={textStyle}>Birthday: {birthDate}</p>}
    </div>
  );
};
