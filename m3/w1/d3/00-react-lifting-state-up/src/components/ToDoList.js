import React, { Component } from "react";
import Task from "./Task";
import Summary from "./Summary";
import data from "./../data.js";

class ToDoList extends Component {
  constructor() {
    super();
    this.state = {
      tasks: data,
      tasksCompleted: 0
    };

    this.deleteTaskById = this.deleteTaskById.bind(this);
    this.toggleTaskDone = this.toggleTaskDone.bind(this);
  }

  /***  
    1. State shouldn't be modified directly and `splice()` modifies the orginal array it's called on. 
    Therefore we're using the spread operator to copy the array first. ;)
    As an alternative we can also use the `.filter` method.
  ***/
  deleteTaskById(id) {
    // create the copy of the tasks
    const taskListCopy = [...this.state.tasks];
    let tasksCompleted = this.state.tasksCompleted;

    // iterate over the task array copy
    taskListCopy.forEach((taskObj, index) => {
      // we look for the task to be deleted by id
      if (taskObj.id === id) {
        taskListCopy.splice(index, 1);
        if (taskObj.isDone && tasksCompleted > 0) {
          tasksCompleted--;
        }
      }
    });

    this.setState({ tasks: taskListCopy, tasksCompleted: tasksCompleted });
  }


  toggleTaskDone(id) {

    const tasksCopy = [...this.state.tasks];
    let tasksCompleted = this.state.tasksCompleted;

    // Find the selected (clicked) task
    tasksCopy.forEach( (oneTask) => {
      // Update (toggle) the `isDone` property of the selected task
      if ( oneTask.id === id) {
        oneTask.isDone = !oneTask.isDone;

        // Then update `tasksCompleted` counter
        if (oneTask.isDone) {
          tasksCompleted++;
        }
        else if (!oneTask.isDone) {
          tasksCompleted--;
        }
      }
    })

    this.setState( { tasks: tasksCopy, tasksCompleted: tasksCompleted } );
  }

  render() {
    return (
      <div>
        <Summary tasksCompleted={this.state.tasksCompleted} />
        <div className="todo-container">
          {this.state.tasks.map(task => {
            return (
              <Task 
                key={task.id} 
                deleteTask={this.deleteTaskById} 
                updateTaskStatus={this.toggleTaskDone}
                {...task}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default ToDoList;
