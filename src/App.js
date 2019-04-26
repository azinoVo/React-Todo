import React from 'react';

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
      taskMasterList,
      //New input
      newTask: ''
    };
  }


  // Arrow function binds the this and refers to the class App
  // When user types something in
  onUpdate = event => {
    console.log(event.target.name);
    this.setState({
        [event.target.name]:event.target.value
    });
  };

  handleSubmit  = event => {
    event.preventDefault();

  };

//Render is similar to the return part of functions - since this is a class we use a method
//Put components together
//This section "calls" the components and add in what the props are supposed to be
//with the appropriate tasks
  render() {
    return (
      <div>
        <h2>Let's Get to Work!</h2>
        <div className='inputField'></div>
      </div>
    );
  }
}

export default App;
