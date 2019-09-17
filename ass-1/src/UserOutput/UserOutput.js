import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>{props.username}</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi feugiat felis turpis, eget ultrices lorem pharetra sed. Mauris est diam, pretium quis ex vitae, tincidunt rhoncus mi. Maecenas eu ullamcorper dolor. Mauris dui dui, posuere sed diam in, fringilla mollis massa. Quisque imperdiet dictum tortor eu pharetra. Nulla facilisi. Suspendisse potenti. Phasellus fermentum id lacus ut fringilla.</p>
        </div>
    );
};

export default userOutput;