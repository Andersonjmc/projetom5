import React from "react";


export const Form = () =>{
    return(
        <form ></form>
    )
}

export  const Legend = ({legend}) =>{
    return(
        <legend>{legend}</legend>
    )
}

export const Label = ({htmlFor,nome}) =>{
    return(
        <label htmlFor={htmlFor}>{nome}</label>
    )
}

export const Input = ({type, name,className, id, onChange}) =>{
    return(
        <input type={type} name={name} className={className} id={id} onChange={onChange} />
    )
}