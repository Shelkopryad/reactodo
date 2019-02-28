import React, { Component } from 'react';
import TodoItem from './TodoItem';
import tasks from './tasks';

class App extends Component {
  render() {
    const taskItems = tasks.map(task => <TodoItem key={task.id} item={task} />)

    return (
      <div className="todo-list">
        {taskItems}
      </div>
    );
  }
}

export default App;
