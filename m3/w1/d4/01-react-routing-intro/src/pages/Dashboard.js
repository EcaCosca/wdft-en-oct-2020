import React, { Component } from 'react'

import { Link, NavLink } from 'react-router-dom';


class Dashboard extends Component {
  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        <img src="https://media.giphy.com/media/3oKIPEqDGUULpEU0aQ/giphy.gif" alt="dashboard-gif"/>
        <NavLink to="/contact#running">
          <button>See Contact Page</button>
        </NavLink>
      </div>
    )
  }
}

export default Dashboard