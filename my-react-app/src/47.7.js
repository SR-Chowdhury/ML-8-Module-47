import { useState } from 'react';
import './App.css';

function CountComponent () {
    return (
        <div>
            <DisplayCount />
        </div>
    );
}

function DisplayCount () {
    const [count, setCount] = useState(50);

    const increaseCount = () => setCount(count + 1);
    const decreaseCount = () => setCount(count - 1);

    return (
        <div style={{textAlign: "center"}}>
            <h1>Count: {count}</h1>
            <button onClick={increaseCount}>(+) Increase</button> &nbsp;
            <button onClick={decreaseCount}>(-) Decrease</button>
        </div>
    );
}

export default CountComponent;