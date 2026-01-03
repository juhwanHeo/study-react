import type {Dayjs} from "dayjs";

interface ProfileProps {
  username: string;
  age: number;
  birthday: Dayjs;
}

export function Profile({ username, age, birthday }: ProfileProps) {

  return (
      <>
        <div className="profile">
          <div>이름: {username}</div>
          <div>나이: {age}</div>
          <div>생년월일: {birthday.format('YYYY-MM-DD')}</div>
        </div>
      </>
  )
}