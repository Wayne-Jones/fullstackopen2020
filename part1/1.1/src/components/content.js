import React from 'react';


const Content = (props) => {
    const { part1, part2, part3, exercise1, exercise2, exercise3 } = props;

    return (
        <div>
            <p>{part1} {exercise1}</p>
            <p>{part2} {exercise2}</p>
            <p>{part3} {exercise3}</p>
        </div>
    )
}

export default Content;