'use client'
import { useState } from 'react';
export default function Home() {

    const [male, setIsMale] = useState(false);
    const [female, setIsFemale] = useState(false);



    return (
        <div className='flex flex-col gap-2'>
            {/* Conditional Rendering */}
            <label >If male press the male button</label>
            <button onClick={() => {
                setIsMale(true)
                setIsFemale(false)
            }
            }>
                Male
            </button>

            <label >If female press the female button</label>
            <button onClick={() => {
                setIsFemale(true)
                setIsMale(false)
            }
            }>
                Female
            </button>

            {
                male ? (<label>Hello "Male"</label>) : female ? (<label>Hello "Female"</label>) : (<label>Hey, Select a field at least.</label>)
            }
        </div>
    );
}
