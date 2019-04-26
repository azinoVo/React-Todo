import React from 'react';
import { timingSafeEqual } from 'crypto';

const taskMasterList = [
  {
    task:'Initial Task',
    id: 12345,
    completed: false // false is the default
  },
  
  {
    task:'Task II',
    id:123456,
    Completed:false
  }
];


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, 
  // and any change handlers you need to work with your state.
  constructor() {
    super();
    this.state = {
      //Items already in list
      taskOnState: taskMasterList,
      //New input
      newTask: {
        task:'',
        id:'',
        Completed:''
      }
    };
  }

// Arrow function binds the this and refers to the class App
// When user types something in
// Regulated Input

  doUpdateInput = event => {
    this.setState({
      // newTask: event.target.value
      newTask: {
        ...this.state.student,
        [event.target.name]: event.target.value
      }
    });
  }

  doAddTask = event => {
    event.preventDefault();
    this.setState({
      // Make a new array with the original with new Task
      taskOnState: [...this.state.taskOnState, this.state.newTask],
      // Reset input so it doesn't keep track of that one thing forever
      newTask: {}
    });
  };

  doClearDone = event => {
    event.preventDefault();
  };

//Render is similar to the return part of functions - since this is a class we use a method
//Put components together
//This section "calls" the components and add in what the props are supposed to be
//with the appropriate tasks
  render() {
    return (
      <div className='container'>
        <h2>Let's Get to Work!</h2>
        <div className="task-list">
          <h3>{this.state.newTask}</h3>
        </div>
        <div>
        <form onSubmit={this.doAddTask}>
          <input type="text"
            value={this.state.newTask}
            onChange={this.doUpdateInput}
            placeholder="...Input your Task"
            name='newTask'
          />
          <button>Add Task to List</button>
        </form>
        <button onClick={this.doClearDone}>Clear Completed</button>
        </div>
      </div>
    )};
  }

export default App;
