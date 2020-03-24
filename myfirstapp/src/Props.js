import React from 'react';


//This is a UI component so we don't need a class here, a function will do 
//class Nested extends Component{
const Nested = ({donkeys}) => {

    //inside a function we don't need render method
    //render(){
        //console.log(this.props);
        
        //Outputting single or multiple
        //const { name, course, session } = this.props;

        //Outputting a List having props , here key must be unique
        //const { donkeys } = this.props;
        //donkeys is now a parameter of the function so we don't need a new variable
        const donkeylist = donkeys.map(i => {
            return (
                <div className="donkey" key={i.id}>
                    <div>Name: {i.name}</div>
                    <div>Age: {i.age}</div>
                    <div>Hair: {i.hair}</div>
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
//}

export default Nested;