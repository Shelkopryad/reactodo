import React, { Component } from 'react';
import TodoItem from './TodoItem';
import tasks from './tasks';

class App extends Component {

  constructor() {
    super();
    this.state = {
      taskItems: tasks.map(task => <TodoItem key={task.id} item={task} />)
    }
    this.createTask = this.createTask.bind(this)
  }

  createTask() {

  }

  render() {
    return (
      <div className="container">
      <button type="button" className="btn btn-light" onClick={this.createTask}>New task</button>
        <ul className="list-group list-group-flush">
          {this.state.taskItems}
        </ul>
      </div>
    );
  }
}

export default App;
