import React from 'react';

const TodoList = ({todos, removeItem}) => {
    const mylist = todos.length ? (todos.map(i =>{
        return(
            <div className="collection-item" key={i.id}>
                <span onClick={()=>{removeItem(i.id)}}>{i.todo}</span>
            </div>
        )
    })
    ):(
        <p className="center">You have no todos left ,yay!</p>
    )
    return(
        <div className="todos collection">
            {mylist}
        </div>
    )
}

export default TodoList;