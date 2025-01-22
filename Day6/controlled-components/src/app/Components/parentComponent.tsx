'use client'

{/* Controlled Components using form and input fields */ }

import React from 'react'
import { useState } from 'react';
import ChildComponent from './childComponent';

function ParentComponent() {

    {/* I used parent and child component to show that when the state variable of parent is changed, parent is re-rendered
    and in turn the child using the parent component's state value as its props also re-renders when parent re-renders
    Yeslai yettikai eutai page.tsx file mai form banayera event handler method banayera garna ni milxa, very much related to
    event handling topic. */}

    const [value, setValue] = useState('');

    return (
        <div>
            <h2>Controlled Component Demo:</h2>
            <ChildComponent value={value} setValue={setValue} />
        </div>
    )
}

export default ParentComponent
