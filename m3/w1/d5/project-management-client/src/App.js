import './App.css';

import { Switch, Route } from 'react-router-dom';
import ProjectList from './pages/ProjectList/ProjectList';
import ProjectDetails from './pages/ProjectDetails/ProjectDetails';
import TaskDetails from './pages/TaskDetails/TaskDetails';

import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/projects" component={ProjectList} />
        <Route exact path="/projects/:id" component={ProjectDetails} />
        
        <Route exact path="/projects/:id/tasks/:taskId" component={TaskDetails} />  {/* ADD Route*/}

      </Switch>
    </div>
  );
}

export default App;
