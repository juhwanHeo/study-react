
const And = () => {
  return (
      <>
        <div> And </div>
        <div>
          <div>
            true || (false && false) : {`${true || (false && false)}`}
          </div>

          <div>
            true && (false || false) : {`${true && (false || false)}`}
          </div>

          <div>
            2 === 3 || (4 &lt; 0 && 1 === 1) : {`${2 === 3 || (4 < 0 && 1 === 1)}`}
          </div>
        </div>

        <div>
          <div>
            true && true : {`${true && true}`}
          </div>

          <div>
            true && false : {`${true && false}`}
          </div>

          <div>
            false && true : {`${false && true}`}
          </div>

          <div>
            false && 3 === 4 : {`${false && 3 === 4}`}
          </div>

          <div>
            "Cat" && "Dog": {`${"Cat" && "Dog"}`}
          </div>

          <div>
            false && "Cat" : {`${false && "Cat"}`}
          </div>

          <div>
            "Cat" && false : {`${"Cat" && false}`}
          </div>

          <div>
            "" && false : {`${"" && false}`}
          </div>

          <div>
            false && "" : {`${false && ""}`}
          </div>
        </div>
      </>
  );
}

export default And;