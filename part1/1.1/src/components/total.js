import React from 'react';


const Total = (props) => {
    const { exercise1, exercise2, exercise3 } = props;

    return (
        <div>
            <p>Number of exercises {exercise1 + exercise2 + exercise3}</p>
        </div>
    )
}

export default Total;