import React from 'react';

const Statistic = (props) => {
    const {text, value} = props;
    if(text === "Positive"){
        return (
            <p>{text} {value}%</p>
        );
    }
    else{
        return (
            <p>{text} {value}</p>
        );
    }
}

export default Statistic;