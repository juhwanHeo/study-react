
function OrItem() {
  return (
      <div>
        <h2>OR 연산자 우선순위</h2>
        <p>true || false && false;</p>
        <p> -&gt; {`${true || false && false}`}</p>
        <p>(true || false) && false;</p>
        <p> -&gt; {`${(true || false) && false}`}</p>
      </div>
  );
}

export default OrItem;