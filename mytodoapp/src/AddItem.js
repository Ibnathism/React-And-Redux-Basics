import React, { Component } from 'react';

class AddItem extends Component {
    state = {
        todo: ''
    }
    onSubmitHandler=(e)=>{
        e.preventDefault();
        this.props.addItem(this.state);
        this.setState({
            todo: ''
        })
    }
    onChangeHandler=(e)=>{
        this.setState({
            todo: e.target.value
        })
    }
    render(){
        return(
            <div>
                <form onSubmit={this.onSubmitHandler}>
                    <label>Add New Todo : </label>
                    <input type="text" onChange={this.onChangeHandler} value={this.state.todo}/>
                </form>
            </div>
        )
    }
}

export default AddItem;