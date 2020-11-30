import React from "react";
import "./App.css"; // with React CSS files are imported directly into the .js file

import MyComponent from "./MyComponent";
import CourseInfo from './CourseInfo';

class App extends React.Component {
  state = {
    students: ['Juanmi', 'Lucy', 'Mirko', 'Sergi', 'Emma', 'Marc'],
    course: {
      startDate: '19 October 2020',
      size: 24,
      endDate: '18 December 2020',
      courseType: 'WebDev Full Time'
    }
  }

  render() {
    return (
      <div className="App">
        <h1> Hello Ironhackers! </h1>
        <h3> React Intro </h3>

        <MyComponent />

        <MyComponent city="Barcelona" />

        <CourseInfo 
          studentsArr={this.state.students}
          courseObj={this.state.course} 
        />

      </div>
    );
  }
}

export default App;
