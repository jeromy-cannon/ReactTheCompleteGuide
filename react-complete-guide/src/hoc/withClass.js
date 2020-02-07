import React from 'react';

const withClass = (WrappedComponent, className) => {
    return props => (
        <div class={className}>
            <WrappedComponent />
        </div>
    );
};

export default withClass;

// import React from 'react';

// const withClass = props => (
//     <div className={props.classes}>
//         {props.children}
//     </div>
// );

// export default withClass; 