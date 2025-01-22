'use client'
import { useState } from 'react';
export default function Home() {

    const [email, setEmail] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        console.log(email);
        event.preventDefault();
        if (!email.includes("@")) {
            setErrorMsg("Invalid Email format.")
        }
        else setErrorMsg('');
    };
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Your Email" onChange={handleChange} />
            <button type='submit'>Submit</button>
            {errorMsg && <h1>{errorMsg}</h1>}
        </form>
    );
}
