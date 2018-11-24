import React from 'react';

export const Input = (props) => {
    return (
        <input value={props.value} onChange={props.onChange} className={props.className}/> 
    )
};