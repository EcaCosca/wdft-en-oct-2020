import './App.css';

import { Switch, Route } from 'react-router-dom';
import ProjectList from './pages/ProjectList/ProjectList';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/projects" component={ProjectList} />
      </Switch>
    </div>
  );
}

export default App;
