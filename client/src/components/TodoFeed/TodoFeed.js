import React, { Component } from 'react';
import TodoFeedCard from './TodoFeedCard';

import './TodoFeed.css';

class TodoFeed extends Component{
    render(){
        const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
        let { todos, removeTodo, changeTodo } = this.props;
        let month;
        return(
            <div className="todoFeed">
                <ul className="todoFeedList">
                    {
                        todos && todos.map((todo, key) => {
                            let todoDate = new Date(todo.date_added);
                            if(month === undefined || (todoDate.getMonth() + 1) % 10 === month){
                                month=todoDate.getMonth();
                                return <li key={key}><h2>{`${monthNames[todoDate.getMonth()]} ${todoDate.getFullYear()} `}</h2>
                                    <TodoFeedCard todo={todo} removeTodo={removeTodo} changeTodo={changeTodo}/></li>;
                            }
                            return <li key={key}><TodoFeedCard todo={todo} removeTodo={removeTodo} changeTodo={changeTodo}/></li>;
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default TodoFeed;