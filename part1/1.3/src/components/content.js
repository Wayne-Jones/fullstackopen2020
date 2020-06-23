import React from 'react';
import Parts from './parts';


const Content = (props) => {
    const { part1, part2, part3 } = props;

    return (
        <div>
            <Parts part={part1} />
            <Parts part={part2} />
            <Parts part={part3} />
        </div>
    )
}

export default Content;