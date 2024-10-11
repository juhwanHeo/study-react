function OR() {
  return (
    <div>
      <h2>OR 연산자 우선순위</h2>
      <ul>
        <li>
          <span>true || false && false : </span>{`${true || false && false}`}
        </li>
        <li>
          <span>(true || false) && false) : </span>{`${(true || false) && false}`}
        </li>
      </ul>
    </div>
  );
}

export default OR;
