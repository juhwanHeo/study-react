
function AndItem() {
  return (
      <div>
        <h2>And 연산자 우선순위</h2>
        <p>true || (false && false);</p>
        <p> -&gt; {`${true || (false && false)}`}</p>
        <p>true && (false || false);</p>
        <p> -&gt; {`${true && (false && false)}`}</p>
        <p>2 === 3 || (4 &lt; 0 && 1 === 1);</p>
        <p> -&gt; {`${2 === 3 || (4 < 0 && 1 === 1)}`}</p>
      </div>
  );
}

export default AndItem;