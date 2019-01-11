import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTodos, removeTodo, changeTodo } from '../../_actions/todoActions';
import { Link } from 'react-router-dom';
import { AddBar, TodoFeed } from '../../components';

import './Home.css';

class Home extends Component{
    
    componentWillMount(){
        this.props.getTodos();
    }

    render(){
        let { todos, removeTodo, changeTodo } = this.props;
        return(
            <div className="home">
                <div className="homeHeader">
                    <h1><Link to="/">Todo List</Link></h1>
                    <h3><Link to="/logs">Logs</Link></h3>
                </div>
                <AddBar />
                <TodoFeed todos={todos} removeTodo={removeTodo} changeTodo={changeTodo}/>
            </div>
        );
    }
}


const mapStateToProps = state => ({
    todos: state.todo.todos
});

const mapDispatchToProps = dispatch => ({
    getTodos: () => {
        dispatch(getTodos());
    },
    removeTodo: (id) => {
        dispatch(removeTodo(id));
    },
    changeTodo: (id, todo) => {
        dispatch(changeTodo(id, todo));
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);