// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
    const usernameRef = React.useRef(null);
    const [username, setUsername] = React.useState('')
    const handleSubmit = (event) => {
        //Normally react events are synthetic events(Fake ones). If we want to work native one we can use like so
        // console.log(event.nativeEvent);
        //console.dir(event.target)

        event.preventDefault();
        //there are multiple ways to get target element value.
        // 1- Access via id or name of the element.
        // 2- Access via elements array index.
        // 3- Access via react ref object

        // onSubmitUsername(event.target.elements.username.value);
        // onSubmitUsername(event.target.elements[0].value);
        //onSubmitUsername(usernameRef.current.value);
        onSubmitUsername(username)
    }

    const handleUsernameChange = (event) => {
        const value = event.target.value;
        setUsername(value.toLocaleLowerCase());
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor={'username'}>Username:</label>
                <input type="text" id={'username'}  ref={usernameRef} onChange={handleUsernameChange} value={username}/>
            </div>
            <button type="submit" disabled={!username}>Submit</button>
        </form>
    )
}

function App() {
    const onSubmitUsername = username => alert(`You entered: ${username}`)
    return <UsernameForm onSubmitUsername={onSubmitUsername}/>
}

export default App
