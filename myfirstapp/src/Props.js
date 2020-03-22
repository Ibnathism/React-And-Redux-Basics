import React, { Component } from 'react';

class Nested extends Component{
    render(){
        //console.log(this.props);
        
        //Outputting single or multiple
        //const { name, course, session } = this.props;

        //Outputting List
        const { donkeys } = this.props;
        const donkeylist = donkeys.map(eachDonkey => {
            return (
                <div className="donkey" key={eachDonkey.id}>
                    <div>Name: {eachDonkey.name}</div>
                    <div>Age: {eachDonkey.age}</div>
                    <div>Hair: {eachDonkey.hair}</div>
                </div>
            )
        })
        return(

            //Outputting single or multiple element having props
            /*<div className="Nested">
                <div>Name : { name }</div>
                <div>Course : { course }</div>
                <div>Session : { session }</div>
            </div>*/


            //Outputting a List having props
            <div className="donkey-list">
                { donkeylist }
            </div>
        )
    }
}

export default Nested;