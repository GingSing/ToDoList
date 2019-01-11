import React, { Component } from 'react';

import './TodoFeed.css';

class TodoFeed extends Component{
    render(){
        let { todos, removeTodo } = this.props;
        return(
            <div className="todoFeed">
                <ul className="todoFeedList">
                    {
                        todos && todos.map((todo, key) => 
                            <TodoFeedCard todo={todo} removeTodo={removeTodo}/>
                        )
                    }
                </ul>
            </div>
        );
    }
}

const TodoFeedCard = (props) => {
    let {todo, removeTodo} = props;
    function removeTodoWithId(){
        removeTodo(todo._id);
    }
    return(
        <React.Fragment>
            <li className="todoFeedCard">
                <label>{todo.todo}</label>
                <div className="todoControls">
                    <button>&#10000;</button>
                    <button onClick={removeTodoWithId}>&#10004;</button>
                </div>
            </li>
        </React.Fragment>
    );
}

export default TodoFeed;