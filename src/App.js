import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';


import HomePage from './components/pages/Home';
import TaskList from './components/pages/tasks/TaskList';
import CategoryList from './components/pages/Categories/CatList';

const App = () => {
  return <Router>
    <Route path="/" exact>
      <HomePage />
    </Route>
    <Route path="/tlist">
      <TaskList />
    </Route>
    <Route path="/clist">
      <CategoryList />
    </Route>
  </Router>;
}

export default App;
