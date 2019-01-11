import React, { Component } from 'react';

class TodoFeedCard extends Component{
    constructor(props){
        super(props);
        this.removeTodoWithId=this.removeTodoWithId.bind(this);
        this.changeTodoWrapper=this.changeTodoWrapper.bind(this);
        this.handleChange=this.handleChange.bind(this);
        this.state={
            shouldChange: false,
            newTodo: null
        }
    }

    componentWillMount(){
        let {todo} = this.props;
        this.setState({
            newTodo: todo.todo
        })
    }
    
    removeTodoWithId(){
        this.props.removeTodo(this.props.todo._id);
    }

    changeTodoWrapper(){
        let { shouldChange, newTodo } = this.state;
        let { todo, changeTodo } = this.props;
        console.log()
        if(shouldChange){
            changeTodo(todo._id, newTodo);
            this.setState({
                shouldChange: false
            });
        }else{
            this.setState({
                shouldChange: true
            })
        }
    }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render(){
        let {todo, key} = this.props;
        let {shouldChange, newTodo} = this.state;
        return(
            <div key={key} className="todoFeedCard">
                {
                    shouldChange ? <input type="text" name="newTodo" value={`${newTodo}`} onChange={this.handleChange}/> : <label>{todo.todo}</label>
                }
                <div className="todoControls">
                    <button onClick={this.changeTodoWrapper}>&#10000;</button>
                    <button onClick={this.removeTodoWithId}>&#10004;</button>
                </div>
            </div>
        );
    }
}

export default TodoFeedCard;