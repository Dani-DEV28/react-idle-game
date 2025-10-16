import React from 'react'

export default function Main() {
    const [click, setClick] = React.useState(false)

    let count = 0;
    function clicked(){
        count = count + 1;
        console.log(count);
    }

    return (
        <main className="container">
            <h1>Click Me!</h1>
            <div className="counter">
                <button className="plus" onClick={clicked}>{count}</button>
            </div>
        </main>
    )
}

