
import React, { Component } from 'react';

import IndividualToDo from './IndividualToDo.jsx';
import NoToDo from './NoToDo.jsx';

class ToDoList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.toDoList == 0) {
      return (
        <div className='col-sm-8'>
          <NoToDo />
        </div>
      );
    } else {
      return (
        <div className='col-sm-8'>
          {this.props.toDoList.map(todo => (
            <IndividualToDo
              handleEdit={this.props.handleEdit}
              handleDelete={this.props.handleDelete}
              todo={todo}
              key={todo.id} />
          ))
          }
        </div>
      );
    }
  }
}

export default ToDoList;