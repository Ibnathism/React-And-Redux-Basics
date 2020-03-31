import React from 'react'

const Rainbow = (WrappedComponent) => {
    const colours = ['red', 'pink', 'orange', 'blue', 'green', 'yellow'];
    const randomColour = colours[Math.floor(Math.random()*5)];
    const className = randomColour + '-text';
    //this props would have been passed into the wrapped component
    // '...' spread operator is gonna pass props into wrappedcomponent again
    return(props) => {
        return(
            <div className={className}>
                <WrappedComponent {...props}/>
            </div>
        )
    } 
}

export default Rainbow;