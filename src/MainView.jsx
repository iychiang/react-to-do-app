import React, { Component } from 'react';
import IndividualToDo from './IndividualToDo.jsx';

export default class MainView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewList: props.viewList,
    }
  }

  // true && 'test' - if 
  // if (true){
  //   return "test"
  // }

  // handleRemove(key){
  //   var newList = this.props.viewList;
  //   newList.splice(key, 1);

  //   this.setState({ viewList: newList });
  // }
  render() {
    return (
      <div className='panel-body'>
        {this.props.viewList.map(todo => (
          <IndividualToDo
            key={todo.id}
            todo={todo}
            handleRemove={this.props.handleRemove}
            handleSave={this.props.handleSave}
            text={this.props.text}
          />
        ))
        }
      </div>
    );
  }
}