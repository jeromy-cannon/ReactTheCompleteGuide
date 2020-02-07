import React, { useEffect } from 'react';

import classes from './Cockpit.css';

const cockpit = (props) => {
    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        // Http request...
        // const timer = setTimeout(() => {
        //     alert('Saved data to cloud!');
        // }, 1000);
        // commenting out, because this is annoying
        // setTimeout(() => {
        //     alert('Saved data to cloud!');
        // }, 1000);
        return () => {
            // clearTimeout(timer);
            console.log('[Cockpit.js] cleanup work in useEffect');
        }
    }, []);  // will only run once on default, and never afterwards, 
    // runs return function (cleanup function) on unmount
    // }, [props.persons]);

    useEffect(() => {
        console.log('[Cockpit.js] 2nd useEffect');
        return () => {
            console.log('[Cockpit.js] cleanup work in 2nd useEffect');
        }
    }); // runs every time

    // useEffect();
    let assignedClasses = [];
    let btnClass = '';

    if (props.showPersons) {
        btnClass = classes.Red;
    }

    if (props.personsLength <= 2) {
        assignedClasses.push(classes.red); // classes = ['red']
    }

    if (props.personsLength <= 1) {
        assignedClasses.push(classes.bold);// classes = '[red', 'bold']
    }



    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button
                className={btnClass}
                onClick={props.clicked}>
                Toggle Names</button>
        </div>
    );
};

//export default cockpit;
// React will store a snapshot and only re-render if input changes
export default React.memo(cockpit);