import React from 'react';
import NewTask from './NewTask';

import './TaskList.css'

const TaskList = () => {
    return(
        <React.Fragment>
            <h2>TaskList Works!</h2>
            <NewTask />
        </React.Fragment>
    );
}

export default TaskList;