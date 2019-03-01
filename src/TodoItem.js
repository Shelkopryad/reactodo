import React, { Component } from 'react';

class TodoItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      completed: props.item.completed
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange() {
    this.setState(prevState => {
      return {
        completed: !prevState.completed
      }
    })
  }

  render() {
    return (
      <li className="list-group-item">
        <input id={"taskCheck" + this.props.item.id}
          type="checkbox" 
          checked={this.state.completed} 
          onChange={this.handleChange}
        />
        
        <label htmlFor={"taskCheck" + this.props.item.id}
          className={this.state.completed === true ? "alertMy alert-success" : "alertMy alert-danger"}>{this.props.item.text}
        </label>
      </li>
    )
  }
}

export default TodoItem