import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getTodoLogs } from '../../_actions/todoLogActions';
import { connect } from 'react-redux';
import { LogsFeed } from '../../components';
import './Logs.css';

class Logs extends Component{
    componentWillMount(){
        this.props.getTodoLogs();
    }
    render(){
        let { todoLogs } = this.props;
        return(
            <div className="logs">
                <div className="logsHeader">
                    <h1><Link to="/logs">Logs</Link></h1>
                    <h3><Link to="/">Todo List</Link></h3>
                </div>
                <LogsFeed todoLogs={todoLogs} />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    todoLogs: state.todoLog.todoLogs
});

const mapDispatchToProps = dispatch => ({
    getTodoLogs: () => {
        dispatch(getTodoLogs());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Logs);