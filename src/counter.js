import React, { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div className="counter-box">

            <button onClick={() => setCount(count - 1)}>-</button>
            <span>{count}</span>
            <button onClick={() => setCount(count + 1)}>+</button>

        </div>
    );
};

export default Counter;
