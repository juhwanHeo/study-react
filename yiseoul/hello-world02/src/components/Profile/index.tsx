import './profile.css'

type ProfileInfos = {
  name: string;
  age: number;
  birth: string;
}

export default function Profile({ name, age, birth }: ProfileInfos) {
  return (
    <>
      <div className="profile-container">
        <h2 className="title">자기소개</h2>
        <div className="profile-row">
          <span className="label">이름: </span>
          <span className="label">{name}</span>
        </div>
        <div className="profile-row">
          <span className="label">나이: </span>
          <span className="label">{age}</span>
        </div>
        <div className="profile-row">
          <span className="label">생일: </span>
          <span className="label">{birth}</span>
        </div>
      </div>
    </>
  );
}