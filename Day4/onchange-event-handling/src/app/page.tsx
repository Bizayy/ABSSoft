'use client'
import Image from "next/image";
import { useState } from 'react';
export default function Home() {
    const [text, setText] = useState('');
    const handleChange = (e) => {
        setText(e.target.value);
        console.log(`New value: ${e.target.value}`);
    }
    return (
        <div>
            {/*onChange Event Handling*/}
            <input onChange={handleChange} type="text" value={text} placeholder="Type here" />
            <label>Text:{text}</label>
        </div>
    );
}
