'use client'
import Image from "next/image";
import { useState } from 'react';
export default function Home() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted!");
        console.log(`Name: ${name} Email: ${email}`)
    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input value={name} onChange={(e) => { setName(e.target.value) }} placeholder="Name goes here" />
                <input value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder="Email goes here" />
                <button type='submit'>SUBMIT</button>
            </form>
        </div>
    );
}
