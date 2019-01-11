import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { LogsFeed } from '../../components';
import './Logs.css';

class Logs extends Component{
    render(){
        return(
            <div className="logs">
                <div className="logsHeader">
                    <h1><Link to="/logs">Logs</Link></h1>
                    <h3><Link to="/">Todo List</Link></h3>
                </div>
                <LogsFeed />
            </div>
        );
    }
}

export default Logs;