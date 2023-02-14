import React from 'react';

import './Home.css';
import CategoryList from './Categories/CatList';
import TaskList from './tasks/TaskList';

const HomePage = () => {
    return (
        <React.Fragment>
            <h2>HomePage Works!</h2>
            <CategoryList />
            <TaskList />
        </React.Fragment>
    )
};

export default HomePage;