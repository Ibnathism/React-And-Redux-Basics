import React, { Component } from 'react';

class Nested extends Component{
    render(){
        //console.log(this.props);
        const { name, course, session } = this.props;
        return(
            <div className="Nested">
                <div>Name : { name }</div>
                <div>Course : { course }</div>
                <div>Session : { session }</div>
            </div>
        );
    }
}

export default Nested;