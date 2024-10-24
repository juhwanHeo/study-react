function OR() {
    const array = [
        "true || false && false",
        "(true || false) && false",
        "2 === 3 || 4 < 0 && 1 === 1"
    ]
    const list = []

    array.forEach((item) => {
        const result = eval(item)
        list.push(
            <div>
                <span>{item} = {`${result}`}</span>
            </div>
        )
    })
    return (
        <div>
            { list }
        </div>
    );
}

export default OR;