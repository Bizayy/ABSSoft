'use client'
import Image from "next/image";
import { useState } from 'react';
export default function Home() {
    const [isMember, setIsMember] = useState(false);
    const isMemberLabel = "Hello Member";
    const handleClick = () => {
        console.log("Member");
        setIsMember(true);
    }

    return (
        <div>
            <label htmlFor="">Click the member button to verify that you're a member.</label>
            <br />
            <button onClick={handleClick} className="border-black border-2" >Im a member</button>

            {
                isMember && (<p>{isMemberLabel}</p>)
            }

        </div>
    );
}
