import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../_actions/todoActions';
import './AddBar.css';

class AddBar extends Component{
    constructor(props){
        super(props);
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.state={
            todo: ""
        }
    }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    async handleSubmit(e){
        e.preventDefault();
        if(this.state.todo.trim() !== ""){
            await this.props.addTodo(this.state);
            this.setState({
                todo: ""
            });
            document.getElementById("todoInput").value = "";
        }
    }

    render(){
        return(
            <div className="addBar">
                <form className="todoForm" onSubmit={this.handleSubmit}>
                <input id="todoInput" placeholder="Add todo..." name="todo" onChange={this.handleChange}/>
                <button className="addButton" value="submit" type="submit">&#10010;</button>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    addTodo: (state) => {
        const { todo } = state;
        dispatch(addTodo(todo));
    }
});

export default connect(null, mapDispatchToProps)(AddBar);