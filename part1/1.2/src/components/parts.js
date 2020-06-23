import React from 'react'

const Parts = (props) => {
    const {part, exercise} = props;
    return (
        <p>
            {part} {exercise}
        </p>
    )
}

export default Parts;
