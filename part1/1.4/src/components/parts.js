import React from 'react'

const Parts = (props) => {
    const {part} = props;
    return (
        <p>
            {part.name} {part.exercises}
        </p>
    )
}

export default Parts;
