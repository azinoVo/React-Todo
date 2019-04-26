// - `<TodoForm>` will hold your input field and your `Add Todo` and `Clear Completed` buttons.
// - Your input field should take in user input, and allow a user to press `Enter` or 
//click on the `Submit Button` to add a todo to your list.
// - Once a todo is submitted, the Todo List should re-render and show the added todo.

import React from 'react';

//function or class here
const TodoForm = props => {
    return(
        // Add the form below
        <form onSubmit={props.doSubmit}>
          <input type="text"
            placeholder="...Input your Task"
            name='task'
            value={props.value}
            onChange={props.doUpdate}
          />
          <button onClick={props.doAddTask}>Add Task to List</button>
          <button onClick={props.doClearDone}>Clear Completed</button>
        </form>
    )
}



export default TodoForm;