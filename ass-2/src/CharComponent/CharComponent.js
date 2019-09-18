import React from 'react';
import './CharComponent.css';

const charComponent = (props) => {
    return (
        <div className="CharComponent" onClick={props.deleteClick}>
            <p>{props.letter}</p>
        </div>
    );
};

export default charComponent;