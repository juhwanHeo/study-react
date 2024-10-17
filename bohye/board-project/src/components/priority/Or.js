const Or = () => {
  return (
    <div>
      <h3>Or 연산자 우선순위</h3>
      <div>true || true = {`${true || true}`}</div>
      <div>true || false = {`${true || false}`}</div>
      <div>false || true = {`${false || true}`}</div>
      <div>false || false = {`${false || false}`}</div>
      <div>false || cat = {`${false || "cat"}`}</div>
      <div>cat || false = {`${"cat" || false}`}</div>
      <div>cat || dog = {`${"cat" || "dog"}`}</div>
      <div>dog || cat = {`${"dog" || "cat"}`}</div>
      <div>cat || "" = {`${"cat" || ""}`}</div>
      <div>"" || cat = {`${"" || "cat"}`}</div>
      <div>false || "" = {`${false || ""}`}</div>
      <div>"" || false = {`${"" || false}`}</div>
      <h4>
        정리: 좌측 값이 truthy일 때, 즉시 그 값을 반환
        <br />
        좌측 값이 falsy일 때, 우측 값 반환
      </h4>
    </div>
  );
};

export default Or;
