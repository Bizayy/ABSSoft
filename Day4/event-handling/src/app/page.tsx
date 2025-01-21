'use client'
import Image from "next/image";
import { useState } from 'react'
export default function Home() {
    const [click, setClicks] = useState(0);
    function handleClick() {
        console.log("Clicked");
        setClicks(click + 1);
    }
    return (
        <div>
            {/*Handling Onclick events*/}
            <button onClick={handleClick}>Click me
            </button>
            <span>Total Clicks: {click}</span>
        </div>
    );
}
