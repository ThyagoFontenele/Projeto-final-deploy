import React from 'react'
import { Confirmar } from '../../service/api'
import { Link } from 'react-router-dom'
function Confirm() {

    const params = (new URL(document.location)).searchParams;
    
    const key = params.get("key");
    const id = params.get("id"); 
    console.log(key, id)
    const confirm = {
        "validate_token": key
    }
    return (
        
        <>
            {Confirmar(confirm, id)}
        </>
    )
}

export default Confirm
