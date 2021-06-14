import React from 'react'
import '../../pages/Register/Register.css'
function Input({ type, name, id, value, onChangeValue}) {
    return (
        <>
            <input 
            type={type} 
            className={name} 
            id={id} 
            value={value} 
            onChange={(e) => onChangeValue(e.target.value)}/> 
        </>
    )
}

export default Input
