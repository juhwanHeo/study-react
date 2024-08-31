import  './Header.css'

function Header() {
  return (
    <div className="header">
      <div className="header-wrap">
        <div className="seq">
          <span></span>
          <p>Seq</p>
        </div>
        <div className="title">
          <p>Title</p>
        </div>
        <div className="creator">
          <p>Creator</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
