import React from 'react';
import Parts from './parts';


const Content = (props) => {
    const { parts } = props;

    return (
        <div>
            { 
                parts.map((part)=>{
                    return <Parts part={part} />
                })
            }
        </div>
    )
}

export default Content;