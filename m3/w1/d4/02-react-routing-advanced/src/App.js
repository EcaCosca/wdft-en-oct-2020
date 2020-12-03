import React from 'react';
import { Route, Switch } from 'react-router-dom';

// import DashboardWRedirect from './pages/DashboardWRedirect';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import Contact from './pages/Contact';
import Error from './pages/Error';
import Navbar from './components/Navbar';

import Projects from './pages/Projects';
import ProjectDetails from './pages/ProjectDetails';

import './App.css';

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter> */}
      <Navbar />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />

        <Route exact path="/projects" component={Projects} />
        <Route exact path="/projects/:projectId" component={ProjectDetails} />

        <Route component={Error} />
      </Switch>
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
