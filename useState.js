import React, { useState, useEffect } from 'react';

export const App = () => {
    const [username, setUsername] = useState("Harshitha");

    useEffect(() => {
        console.log("Username changed:", username);
    }, [username]);

    const changeHandler = (e) => {
        setUsername(e.target.value); // Update the state with the input value
    };

    return (
        <div>
            <input 
                type="text" 
                name="username" 
                value={username} 
                onChange={changeHandler} 
            />
            <h1>{username}</h1>
        </div>
    );
}

export default App;

