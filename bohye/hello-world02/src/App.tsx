import "./App.css";
import { Profile } from "./components/Profile";

function App() {
  return (
    <main className="profile-page">
      <section className="profile-section">
        <h2>스터디원 프로필</h2>
        <div className="study-members-profile">
          <Profile
            name="Kim"
            age={24}
            birthDate="2020/01/20"
            isChecked={false}
          />
          <Profile
            name="이주원"
            age={28}
            birthDate="1999-04-24"
            isChecked={false}
          />
          <Profile
            name="장원준"
            age={28}
            birthDate="1999.05.05"
            isChecked={false}
          />
          <Profile
            name="한이슬"
            age={31}
            birthDate="19961203"
            isChecked={false}
          />
          <Profile
            name="허주환"
            age={28}
            birthDate="1999-06-30"
            isChecked={false}
          />
          <Profile
            name="홍석민"
            age={29}
            birthDate="1998-03-31"
            isChecked={false}
          />
        </div>
      </section>

      <section className="profile-section my-profile-section">
        <h2>내 프로필</h2>
        <div className="my-profile">
          <Profile name="Bohye Kim" age={32} birthDate="1995-11-06" isChecked />
        </div>
      </section>
    </main>
  );
}

export default App;
