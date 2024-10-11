function And() {
  return (
    <div>
      <h2>And 연산자 우선순위</h2>
      <ul>
        <li>
          <span>true || (false && false) : </span>{`${true || (false && false)}`}
        </li>
        <li>
          <span>true && (false || false) : </span>{`${true && (false || false)}`}
        </li>
        <li>
          <span>2 === 3 || (4 &lt; 0 && 1 === 1) : </span>{`${2 === 3 || (4 < 0 && 1 === 1)}`}
        </li>
      </ul>
    </div>
  );
}

export default And;
