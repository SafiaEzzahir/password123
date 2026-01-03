import { useState, useEffect } from 'react'

export default function PasswordSection() {
    const [CharacterNumber, setCharacterNumber] = useState(0)

    function onPasswordInputChanged(e) {
        var CurrentPassword = String(e.target.value)
        setCharacterNumber(CurrentPassword.length)
    }

    return (
        <div id="PasswordSection">
            <input type="password" name="password" id="PasswordInput" onChange={onPasswordInputChanged}/>
            <p id="CharacterNumberId">{CharacterNumber}</p>
        </div>
    )
}