import React from 'react';

const TodoList = ({todos}) => {
    const mylist = todos.map(i =>{
        return(
            <div className="todo-list" key={i.id}>
                <div># {i.todo}</div>
            </div>
        )
    })
    return(
        <div className="show-list">
            {mylist}
        </div>
    )
}

export default TodoList;