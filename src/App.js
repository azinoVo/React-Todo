// - `<App />` will hold all the data needed for this project. 
// It will also be the container for your Todo Components.
// - All of your application data will be stored here on `<App />`.
// - All of your `handler` functions should live here on `<App />`.

// Example
// class HogwartsStudents extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       studentsOnState: students,
//       student: {
//         name: '',
//         identity: '',
//         img: '',
//         age: '',
//         bestFriend: ''
//       }
//     };
//   }

import React from 'react';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, 
  // and any change handlers you need to work with your state.
  constructor(){
    super();
    this.state = {
      //
    }

  }

  // Example Event Handlers
  // handleChanges = event => {
  //   console.log(event.target.name);
  //   this.setState({
  //     student: {
  //       ...this.state.student,
  //       [event.target.name]: event.target.value
  //     }
  //   });
  // };

  // addStudent = event => {
  //   event.preventDefault();
  //   this.setState({
  //     studentsOnState: [...this.state.studentsOnState, this.state.student],
  //     student: {}
  //   });
  // };



  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
      </div>
    );
  }
}

export default App;
