'use client'
import { useEffect, useState } from 'react';
export default function Home() {
    const [count, setCount] = useState(0);
    document.title = `Count: ${count}`;
    useEffect(() => {
        console.log("Count value: " + count);
    }, [count])
    return (
        <div className='flex flex-col items-center'>
            <h1>Counter: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increase count</button>
            <button onClick={() => setCount(count - 1)}>Decrease count</button>
        </div>
    );
}
