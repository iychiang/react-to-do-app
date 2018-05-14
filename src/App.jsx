import React, { Component } from 'react';
import Form from './Form.jsx';
import MainView from './MainView.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    this.id = 0;

    this.state = {
      text: '',
      priority: 1,
      toDoItems: []
    }

    //the more components, the more independent state should be to the component

    this.handlePriority = this.handlePriority.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.addToDo = this.addToDo.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  handlePriority(e) {
    this.setState({ priority: e.target.value });
  }

  addToDo(e) {
    var newItem = {
      text: this.state.text,
      priority: this.state.priority,
      id: this.id++
    };

    var toDoItemsCopy = [...this.state.toDoItems, newItem];

    this.setState({
      toDoItems: toDoItemsCopy,
      text: ''
    });
  }

  handleRemove(itemSelected) {
    var newList = this.state.toDoItems;

    let index = newList.map(item => item.id).indexOf(itemSelected.id);
    newList.splice(index, 1);

    this.setState({ toDoItems: newList });
  }

  handleSave(itemSelected) {
    this.setState({ text: e.target.value })
  }

  //NOTES:
  //var copy array
  //use dot separator to push obj into copy
  //update state with copy
  //don't change/mutate state in constructor, use setstate cause no rerendering


  render() {
    return (
      <div className='container'>
        <h1><span className='very'>Very</span> Simple To-do App</h1>
        <p><span>Track the thing!</span></p>
        <hr />
        <div className='row'>
          <Form
            priorityState={this.handlePriority}
            addItem={this.addToDo}
            text={this.state.text}
          />
          <div className='col-sm-8'>
            <div className='panel panel-default'>
              <div className='panel-heading'>View To-do</div>
              {
                (this.state.toDoItems.length > 0) ?
                  <MainView
                    viewList={this.state.toDoItems}
                    handleRemove={this.handleRemove}
                    handleSave={this.handleSave}
                    text={this.state.text}
                  />
                  :
                  <div className='alert alert-info'>
                    <strong>Welcome to the Very Simple To-do App!</strong>
                    <br />
                    <br />
                    Get started by adding a new to-do on the left.
                  </div>
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
