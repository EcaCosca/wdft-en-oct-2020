import React from 'react';
import Navbar from './components/Navbar';
import './App.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import About from './pages/About';
import Contact from './pages/Contact';
import Error from './pages/Error';

import DashboardWRedirect from './pages/DashboardWRedirect';




// <BrowserRouter> is a React Routing root component
// <Route> is used to specify which component will be render for a specific URL in the browser


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Switch>
          {/* <Route path="/" component={Dashboard} exact /> */}
          <Route path="/" component={DashboardWRedirect} exact />
          <Route path="/about" component={About} exact />
          <Route path="/contact" component={Contact} exact />
          <Route component={Error} />
        </Switch>

      </BrowserRouter>
    </div>
  );
}

export default App;
