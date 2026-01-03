import { useState, useEffect } from 'react'

const NumCharacters = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
const SCharacters = ['!', '@', '#', '£', '€', '$', '%', '^', '&', '*', '(', ')', '_', '-', '+', '=', '{', '}', '[', ']', '|', '/', '?', '<', '>', ',', '.', '`', '~', '±', '§']

export default function PasswordSection() {
    const [CharacterNumber, setCharacterNumber] = useState(0)
    const [ErrorMessage, setErrorMessage] = useState(null)

    function isInString(String, Characters) {
        for (let Char of Characters) {
            if (String.includes(Char)) {
                return true
            }
        }

        return false
    }

    function onPasswordInputChanged(e) {
        var CurrentPassword = String(e.target.value)
        setCharacterNumber(CurrentPassword.length)
        
        if (CurrentPassword.length >= 30) {
            setErrorMessage(null)
        } else {
            var ContainsSC = isInString(CurrentPassword, SCharacters)
            var ContainsNum = isInString(CurrentPassword, NumCharacters)
            if (!ContainsNum) {
                setErrorMessage("no numbers in password!!")
            } else if (!ContainsSC) {
                console.log("here")
                setErrorMessage("no special characters in password!!")
            } else {setErrorMessage(null)}
        }

    }

    return (
        <div id="PasswordSection">
            <input type="password" name="password" id="PasswordInput" onChange={onPasswordInputChanged}/>
            <p id="CharacterNumberId">{CharacterNumber}</p>
            <p>{ErrorMessage}</p>
        </div>
    )
}