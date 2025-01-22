import React from 'react'

function ChildComponent({ value, setValue }: { value: string, setValue: (arg: string) => void }) {


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value);
        setValue(event.target.value);
    };
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        alert('Name entered:' + value);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange} value={value} placeholder="Enter your name here" />
            <button type='submit'>Submit</button>
        </form>
    )
}

export default ChildComponent
