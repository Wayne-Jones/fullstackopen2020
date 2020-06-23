import React from 'react';

const Statistic = (props) => {
    const {text, value} = props;
    if(text === "Positive"){
        return (
            <tr>
                <td>{text}</td>
                <td>{value}%</td>
            </tr>
        );
    }
    else{
        return (
            <tr>
                <td>{text}</td>
                <td>{value}</td>
            </tr>
        );
    }
}

export default Statistic;