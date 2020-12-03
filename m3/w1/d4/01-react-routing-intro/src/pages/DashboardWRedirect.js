import React, { Component } from 'react'

import { Link, NavLink } from 'react-router-dom';
import { Redirect } from 'react-router';


class Dashboard extends Component {
  state = {
    isLoggedIn: false
  }

  render() {
    if (!this.state.isLoggedIn) {
      return <Redirect to="/login" />
    }
    else if (this.state.isLoggedIn) {
      return (
        <div>
          <h1>Dashboard With Redirect</h1>
          <img src="https://media.giphy.com/media/3oKIPEqDGUULpEU0aQ/giphy.gif" alt="dashboard-gif"/>
          <NavLink to="/contact#running">
            <button>See Contact Page</button>
          </NavLink>
        </div>
      )
    }
  }
}

export default Dashboard