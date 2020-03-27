import React, { Component } from 'react';

class AddItem extends Component {
    state = {
        id:null,
        todo:null
    }
    onSubmitHandler=(e)=>{
        e.preventDefault();
        this.props.addItem(this.state);
    }
    onChangeHandler=(e)=>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    render(){
        return(
            <div className="add-item">
                <form onSubmit={this.onSubmitHandler}>
                    <label htmlFor="todo">New Item</label>
                    <input type="text" id="todo" onChange={this.onChangeHandler}/>
                    <button>Add</button>
                </form>
            </div>
        )
    }
}

export default AddItem;