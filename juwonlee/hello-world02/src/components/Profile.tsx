import React from 'react';

interface ProfileProps {
  name: string;
  age: number;
  birthDate: Date;
}

const Profile: React.FC<ProfileProps> = ({name, age, birthDate}) => {
  const formattedDate = birthDate.toISOString().split('T')[0];

  return (
      <div style={{
          textAlign: 'center',
          padding: '2rem',
          maxWidth: '400px',
          margin: '0 auto',
          backgroundColor: '#ffffff',
          borderRadius: '12px',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
      }}>
          <p style={{
              fontSize: '1.1rem',
              margin: '0.8rem 0',
              color: '#333333',
              display: 'flex',
              justifyContent: 'space-between',
              padding: '0.5rem 1rem',
              borderBottom: '1px solid #eee'
          }}>
              <span style={{fontWeight: 'bold'}}>이름</span>
              <span>{name}</span>
          </p>
          <p style={{
              fontSize: '1.1rem',
              margin: '0.8rem 0',
              color: '#333333',
              display: 'flex',
              justifyContent: 'space-between',
              padding: '0.5rem 1rem',
              borderBottom: '1px solid #eee'
          }}>
              <span style={{fontWeight: 'bold'}}>나이</span>
              <span>{age}</span>
          </p>
          <p style={{
              fontSize: '1.1rem',
              margin: '0.8rem 0',
              color: '#333333',
              display: 'flex',
              justifyContent: 'space-between',
              padding: '0.5rem 1rem',
          }}>
              <span style={{ fontWeight: 'bold' }}>생년월일</span>
              <span>{formattedDate}</span>
          </p>
    </div>
  );
};

export default Profile;