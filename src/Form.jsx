import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todo: {
        id: 1,
        text: '',
        priority: ''
      },
      obnoxious: false
    };

    this.handleTask = this.handleTask.bind(this);
    this.handlePriority = this.handlePriority.bind(this);
    this.addToDoAndClear = this.addToDoAndClear.bind(this);
    this.spareUser = this.spareUser.bind(this);
  }

  handleTask(e) {
    let newToDoObj = Object.assign({}, this.state.todo);
    newToDoObj.text = e.target.value;
    this.setState({ todo: newToDoObj });

    // let newToDoObj = {...this.state.todo};
    // newToDoObj.text = e.target.value;
    // this.setState({todo: newToDoObj});
  }

  handlePriority(e) {
    // this.setState({ priority: parseInt(e.target.value) });
    let newToDoObj = Object.assign({}, this.state.todo);
    newToDoObj.priority = e.target.value;
    this.setState({ todo: newToDoObj });
  }

  addToDoAndClear() {
    if (this.state.todo.text && this.state.todo.priority) {
      this.props.addItem(this.state.todo);

      this.setState({
        todo: {
          id: this.state.todo.id + 1,
          text: '',
          priority: ''
        },
        obnoxious: false
      });

    } else {
      this.setState({ obnoxious: true });
    }
  }

  spareUser() {
    this.setState({ obnoxious: false });
  }

  render() {
    if (this.state.obnoxious) {
      return (
        <div className='col-sm-4'>
          <div className='panel panel-default'>
            <div className='panel-heading'>Add New To-do</div>
            <div className='panel-body'>
              <div className='bold'>I want to...</div>
              <div><textarea className='create-todo-text animated shakeit'
                onChange={this.handleTask}
                value={this.state.todo.text}
                onClick={this.spareUser} /></div>
              <div></div>
              <div className='bold'>How much of a priority is this?</div>
              <select
                className='form-control'
                onChange={this.handlePriority}
                value={this.state.todo.priority}
                onClick={this.spareUser} 
                required
                >
                <option>Select Priority </option>
                <option value='3'>Low Priority</option>
                <option value='2'>Medium Priority</option>
                <option value='1'>High Priority</option>
              </select>
            </div>
            <div className='panel-footer'>
              <button type='button'
                className='btn btn-success'
                onClick={this.addToDoAndClear}>Add</button>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className='col-sm-4'>
          <div className='panel panel-default'>
            <div className='panel-heading'>Add New To-do</div>
            <div className='panel-body'>
              <div className='bold'>I want to...</div>
              <div><textarea
                className='borders create-todo-text'
                onChange={this.handleTask}
                value={this.state.todo.text} /></div>
              <div></div>
              <div className='bold'>How much of a priority is this?</div>
              <select
                className='form-control create-todo-priority'
                onChange={this.handlePriority}
                value={this.state.todo.priority}>
                <option>Select Priority</option>
                <option value='3'>Low Priority</option>
                <option value='2'>Medium Priority</option>
                <option value='1'>High Priority</option>
              </select>
            </div>
            <div className='panel-footer'>
              <button type='button'
                className='btn btn-success create-todo'
                onClick={this.addToDoAndClear}>Add</button>
            </div>
          </div>
        </div>
      )
    }
  }
}

export default Form;