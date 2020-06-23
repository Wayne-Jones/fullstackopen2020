import React from 'react';
import Parts from './parts';


const Content = (props) => {
    const { part1, part2, part3, exercise1, exercise2, exercise3 } = props;

    return (
        <div>
            <Parts part={part1} exercise={exercise1} />
            <Parts part={part2} exercise={exercise2} />
            <Parts part={part3} exercise={exercise3} />
        </div>
    )
}

export default Content;