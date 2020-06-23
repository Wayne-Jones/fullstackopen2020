import React from 'react';

const Button = (props) => {
    let buttonName = props.name;
    let clickHandler = props.clickHandler;

    return (
        <button onClick={()=> {clickHandler(state => state+1)}}>{buttonName}</button>
    );
}

export default Button;