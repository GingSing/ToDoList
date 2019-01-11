import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTodos, removeTodo } from '../../_actions/todoActions';
import { AddBar, TodoFeed } from '../../components';

import './Home.css';

class Home extends Component{
    
    componentWillMount(){
        this.props.getTodos();
    }

    render(){
        let { todos, removeTodo } = this.props;
        return(
            <div className="home">
                <h3>TodoList</h3>
                <AddBar />
                <TodoFeed todos={todos} removeTodo={removeTodo}/>
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
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);