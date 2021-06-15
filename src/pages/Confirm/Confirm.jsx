import React from 'react'
import { Confirmar } from '../../service/api'
import { Link } from 'react-router-dom'
function Confirm() {

    const params = (new URL(document.location)).searchParams;
    const key = params.get("key"); // é a string "Jonathan"
    console.log(key)
    const confirm = {
        "validate_token": key
    }
    
    return (
        
        <>
            {Confirmar(confirm)}
        </>
    )
}

export default Confirm
