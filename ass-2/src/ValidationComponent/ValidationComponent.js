import React from 'react';
import './ValidationComponent.css';

const validationComponent = (props) => {
    let textLengthMessage = "Text too short";
    if (props.textLength >= 5) {
        textLengthMessage = "Text long enough";
    }
    return (
        <div className="ValidationComponent">
            <p>this is the validation component</p>
            <p>text length: {props.textLength}</p>
            <p>{textLengthMessage}</p>
        </div>
    )
}

export default validationComponent;