import React, { Component } from 'react';
import Form from './Form';
import ToDoList from './ToDoList.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toDoList: []
    };

    this.addItem = this.addItem.bind(this);
  }

  addItem(toDo) {
    this.setState({ toDoList: [...this.state.toDoList, toDo] });
  }

  handleEdit(toDo){

  }

  handleDelete(toDo){
    let newList = this.state.toDoList.splice(toDo, 1);
    this.setState({ toDoList: this.state.toDoList});
  }
  //the more components, the more independent state should be to the component
  //don't change/mutate state in constructor, use setstate cause no rerendering

  render() {
    return (
      <div className='container'>
        <h1><span className='very'>Very</span> Simple To-do App</h1>
        <p><span>Track the thing!</span></p>
        <hr />
        <div className='row'>
          <Form addItem={this.addItem}/>
          <ToDoList toDoList={this.state.toDoList}
          handleEdit={this.handleEdit}
          handleDelete={this.handleDelete}/>
        </div>
      </div>
    );
  }
}

export default App;
