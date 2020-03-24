import React, { Component } from 'react';


class AddDonkey extends Component {
    state = {
        name: null,
        age: null,
        hair: null
    }
    onChangeHandler = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    //This class got a function as a prop from app.js
    //So that prop can be used to hold the new donkey entered 
    onSubmitHandler = (e) => {
        e.preventDefault();
        //console.log(this.state);
        this.props.addDonkey(this.state);
    }
    render() {
        return(
            <div>
                <form onSubmit={this.onSubmitHandler}>
                    <label htmlFor="name">Name : </label>
                    <input type="text" id="name" onChange={this.onChangeHandler}/>
                    <label htmlFor="age">Age : </label>
                    <input type="text" id="age" onChange={this.onChangeHandler}/>
                    <label htmlFor="hair">Hair : </label>
                    <input type="text" id="hair" onChange={this.onChangeHandler}/>
                    <button>Add New Donkey</button>
                </form>
            </div>
        )
    }
}

export default AddDonkey;