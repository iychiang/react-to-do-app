
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
        <NoToDo />
      );
    } else {
      return (
        <div className='col-sm-8'>
          <div className='panel panel-default'>
            <div className='panel-heading'>View To-do</div>
              {this.props.toDoList.map((todo, index) => (
                <IndividualToDo
                  handleUpdate={this.props.handleUpdate}
                  handleDelete={this.props.handleDelete}
                  handleArchive={this.props.handleArchive}
                  todo={todo}
                  index={index}
                  key={todo.id} />
              ))
              }
          </div>
        </div>
      );
    }
  }
}

export default ToDoList;