import React, { Component } from 'react';

import './LogsFeed.css';

class LogsFeed extends Component{
    render(){
        let { todoLogs } = this.props;
        return(
            <div className="logsFeed">
                <div className="logsFeedLabels">
                    <label>Todo Completed</label>
                    <label>Date Added</label>
                    <label>Date Completed</label>
                </div>
                <ul className="logsFeedList">
                {
                    todoLogs && todoLogs.map((todoLog, key) => {
                        return (
                        <li key={key}>
                            <LogsFeedCard todoLog={todoLog} />
                        </li>);
                    })
                }
                </ul>
            </div>
        );
    }
}

const LogsFeedCard = ({todoLog}) => {
    let { todo } = todoLog;
    let date_added = new Date(todoLog.date_added);
    let date_completed = new Date(todoLog.date_completed);
    let date_modified = new Date(todoLog.date_modified);
    function formatDate(date){
        const months = ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May.', 'Jun.', 'Jul.', 'Aug.', 'Sept.', 'Oct.', 'Nov.', 'Dec.'];
        return `${months[date.getMonth()]}${date.getDate()},${date.getFullYear()}`;
    }
    return(
        <div className="logsFeedCard">
            <span>{todo}</span>
            <span>{formatDate(date_added)}</span>
            <span>{formatDate(date_completed)}</span>
        </div>
    );
}

export default LogsFeed;