import React from 'react';

interface ProfileProps {
  name: string;
  age: number;
  birthDate: Date;
}

const Profile: React.FC<ProfileProps> = ({name, age, birthDate}) => {
  const formattedDate = birthDate.toISOString().split('T')[0];

  return (
    <div>
      <p>이름: {name}</p>
      <p>나이: {age}</p>
      <p>생년월일: {formattedDate}</p>
    </div>
  );
};

export default Profile;