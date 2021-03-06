import React, { useState, useEffect } from "react";

function Hook() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `You clicked the button ${count} times`;
    })

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click here</button>
        </div>
    )
}

export default Hook;