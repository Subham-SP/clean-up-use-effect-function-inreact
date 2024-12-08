import React, { useState, useEffect, createRef } from "react";

export const App = () => {
    const [size, setsize] = useState(window.innerWidth);
    const sizeChange = () => {
        setsize(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', sizeChange);
        return () => {
            //cleaning effect of useEffect
            window.removeEventListener('resize', sizeChange);
        }
    })

    return (
        <>
            <h3>Actual size of the window 🚀</h3>
            <h1> {size} </h1>
        </>
    )

}