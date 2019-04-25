import React from 'react';

const taskMaster = [
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
  constructor(){
    super();
    this.state = {
      taskOnState: taskMaster,
      taskItem: {
        task:'',
        id:'',
        completed:''
      }
    }

  }

  // Arrow function binds the this and refers to the class App

  handleChanges = event => {
    console.log(event.target.name);
    this.setState({
      taskItem: {
        ...this.state.taskItem,
        //event.target.name refers to the name on the input button and substitutes for task on 
        //constructor where initial list is stored; we will be making a new array, not affecting
        //the original.
        [event.target.name]:event.target.value
      }
    });
  };



//Render is similar to the return part of functions - since this is a class we use a method
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <div className='inputField'></div>
        <form>
          <input type="text"
            placeholder="...Input your Task"
            value={this.state.taskItem.task}
            onChange={this.handleChanges}
            name='task'
          />
          <button onClick={this.handleChanges}>Add Task to List</button>
          <button onClick={this.clearAll}>Clear All</button>
        </form>
      </div>
    );
  }
}

export default App;
