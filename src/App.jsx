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
    this.handleDelete = this.handleDelete.bind(this);
  }

  addItem(toDo) {
    this.setState({ toDoList: [...this.state.toDoList, toDo] });
  }

  // handleSave(index, text){
    
  //   let newList = [...this.state.toDoList];
  //   newList[index].text = e.target.value;

  //   newList.splice(index, 1, newList[index]);
  //   this.setState({ toDoList: newList });
  //   console.log('hit handleSave');
  // }

  handleDelete(index){
    let newList = [...this.state.toDoList];

    newList.splice(index, 1);
    this.setState({ toDoList: newList });
  }

  //the more components, the more independent state should be to the component
  //don't change/mutate state in constructor, use setstate cause no rerendering

  render() {
    return (
      <div className='container'>
        <h1><span className='very'>Very</span> Simple To-do App</h1>
        <p><span>Track the thing! Don't save the thing!</span></p>
        <hr />
        <div className='row'>
          <Form addItem={this.addItem}/>
          <ToDoList toDoList={this.state.toDoList}
          handleSave={this.handleSave}
          handleDelete={this.handleDelete}/>
        </div>
      </div>
    );
  }
}

export default App;
