import "../App.css"

type ProfileProps = {
  name: string;
  age: number;
  birthday: string;
  isCheck: boolean;
};

export default function Profile(props: ProfileProps) {
  return (
    <div className={props.isCheck ? "profile highlight" : "profile"}>
      <p>이름: {props.name}</p>

      {props.isCheck && (
        <>
          <p>나이: {props.age}</p>
          <p>생년월일: {props.birthday}</p>
        </>
      )}
    </div>
  );
}