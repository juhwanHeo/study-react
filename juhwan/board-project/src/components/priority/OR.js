

const OR = () => {
  return (
      <>
        <div> OR </div>
        <div>
          <div>
            true || false && false : {`${true || false && false}`}
          </div>

          <div>
            (true || false) && false : {`${(true || false) && false}`}
          </div>
        </div>

        <div>
          <div>
            true || true : {`${true || true}`}
          </div>

          <div>
            false || true : {`${false || true}`}
          </div>

          <div>
            true || false : {`${true || false}`}
          </div>

          <div>
            false || 3 === 4 : {`${false || 3 === 4}`}
          </div>

          <div>
            false || "Cat";: {`${false || "Cat"}`}
          </div>

          <div>
            "Cat" || false : {`${"Cat" || false}`}
          </div>

          <div>
            "" || false : {`${"" || false}`}
          </div>

          <div>
            false || "" : {`${false || ""}`}
          </div>

          <div>
            false || varObject : {`${false || {}}`}
          </div>
        </div>
      </>
  );
}

export default OR;