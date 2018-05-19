import React, { Component } from 'react';
import Form from './Form';
import ToDoList from './ToDoList';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toDoList: [],
      archive: []
    };

    this.addItem = this.addItem.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleArchive = this.handleArchive.bind(this);
  }

  addItem(toDo) {
    this.setState({ toDoList: [...this.state.toDoList, toDo] });
  }

  // handleUpdate(index, todo){
  //   let newList = [...this.state.toDoList];

  //   newList.splice(index, 1, todo);
  //   this.setState({ toDoList: newList})
  // }

  handleUpdate(index, prevToDo, nextToDo) {
    let newList = [...this.state.toDoList];
    //spread properties of prevToDo while replacing all relevant properties with nextToDo
    const newToDo = {
      ...prevToDo,
      ...nextToDo
    }

    newList.splice(index, 1, newToDo);
    this.setState({ toDoList: newList });
  }

  handleDelete(index) {
    let newList = [...this.state.toDoList];

    newList.splice(index, 1);
    this.setState({ toDoList: newList });

  }

  handleArchive(index) {
    let newList = [...this.state.toDoList];

    var item = newList.splice(index, 1);
    this.setState({ toDoList: newList, archive: [...this.state.archive, item] });

  }
  
  //the more components, the more independent state should be to the component
  //don't change/mutate state in constructor, use setstate cause no rerendering

  render() {
    return (
      <div className='container'>
        <h1><span className='very'>Very</span> Simple To-do App</h1>
        <p><span className='subheader'>Track all the things!</span></p>
        <hr />
        <div className='row'>
          <Form addItem={this.addItem} />
          <ToDoList toDoList={this.state.toDoList}
            handleUpdate={this.handleUpdate}
            handleDelete={this.handleDelete}
            handleArchive={this.handleArchive} />
        </div>
        <div className='col-sm-4 row footer'>
          Tasks completed: {this.state.archive.length}
        </div>
      </div>
    );
  }
}

export default App;
