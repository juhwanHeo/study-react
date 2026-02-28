import type {Dayjs} from "dayjs";

interface ProfileProps {
  username: string;
  age: number;
  birthday: Dayjs;
  isCheck?: boolean;
}

export function Profile({
  username,
  age,
  birthday,
  isCheck = false
}: ProfileProps) {
  return (
      <div
          style={{
            width: '280px',
            padding: '16px',
            borderRadius: '12px',
            backgroundColor: '#1e1e1e',
            color: '#f5f5f5',
            boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
            fontSize: '14px',
          }}
      >
        <div style={{ marginBottom: '6px' }}>
          이름: <strong>{username}</strong>
        </div>

        {
          isCheck && (
              <>
                <div style={{ marginBottom: '6px' }}>
                  나이: <strong>{age}</strong>
                </div>
                <div>
                  생년월일: <strong>{birthday.format('YYYY-MM-DD')}</strong>
                </div>
              </>
            )
        }
      </div>
  )
}