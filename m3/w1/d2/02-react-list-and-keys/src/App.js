import React, { Component } from "react";
import Navbar from "./components/Navbar";
import './App.css'

import List from "./components/List";
import MovieList from './components/MovieList';

class App extends Component {
  state = {
    students: ["Tasha", "Alvaro", "Marc", "Emma", "Mirko", "Lucia", "Sergio"],
    projects: [
      { _id: "123fqw2asd", name: "EatBCN", techStack: "Express, Node, React" },
      {
        _id: "985asw5erh",
        name: "TravelLite",
        techStack: "React, Express, Redux",
      },
      { _id: "347jh45qww", name: "IronClub", techStack: "Express, Handlebars" },
      {
        _id: "90r1h9t1ea",
        name: "ChatApp",
        techStack: "React, Express, SocketIO",
      },
    ],
  };

  render() {
    return (
      <div className="App">
        <Navbar />

        <MovieList />


        {/* 

        {this.state.students.map((studentName, i) => {
          return <h3 key={i}> {studentName} </h3>;
        })}

        <List projectsList={this.state.projects} /> 
        
        */}
      </div>
    );
  }
}

export default App;
