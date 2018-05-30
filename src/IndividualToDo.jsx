import React, { Component } from 'react';

class IndividualToDo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false,
      text: props.todo.text,
      priority: props.todo.priority,
      checked: false
    };

    this.setEdit = this.setEdit.bind(this);
    this.setText = this.setText.bind(this);
    this.setPriority = this.setPriority.bind(this);
    this.saveEdit = this.saveEdit.bind(this);

    this.changeClass = this.changeClass.bind(this);
    this.setCheck = this.setCheck.bind(this);
    this.toggleStrike = this.toggleStrike.bind(this);
  }

  setText(e) {
    this.setState({ text: e.target.value });
  }

  setPriority(e) {
    this.setState({ priority: e.target.value });
  }

  setEdit(e) {
    // console.log(this.state.text);
    this.setState({
      editing: !this.state.editing
    }, () => console.log(this.state));

  }

  saveEdit() {
    this.props.handleUpdate(this.props.index, this.props.todo, { text: this.state.text, priority: this.state.priority });
    this.setState({
      editing: !this.state.editing
    });
  }

  changeClass() {
    if (this.props.todo.priority == 1) {
      return 'bg-danger';
    } else if (this.props.todo.priority == 2) {
      return 'bg-warning';
    } else if (this.props.todo.priority == 3) {
      return 'bg-success';
    } else {
      return '';
    }
  }

  setCheck() {
    this.setState({ checked: !this.state.checked });
  }

  toggleStrike() {
    if (this.state.checked) {
      return 'strike-through';
    } else {
      return '';
    }
  }

  // startEditing(){
  // this.setState({editing:true});
  //   this.setEditing(true);
  // }

  // toggleEditing(){
  //   this.setState((state) => {editing: !state.editing});
  // }

  //when working with <input> types, use onChange (even checkboxes)
  render() {
    if (this.state.editing) {
      return (
        <div className={`panel-body ${this.changeClass()}`}>
          <div className='row'>
            <div className='col-sm-10'>
              <div>Description</div>
              <textarea className='form-control update-todo-text'
                value={this.state.text}
                onChange={this.setText} />
              <div>
                <div className='priority'>Priority</div>
              </div>
              <select className='form-control update-todo-priority'
                onChange={this.setPriority}
                value={this.state.priority}>>
                <option value='3'>Low Priority</option>
                <option value='2'>Medium Priority</option>
                <option value='1'>High Priority</option>
              </select>
            </div>
            <div className='col-sm-2 btn-group'>
              <button type='button' className='btn btn-block btn-primary btn-sm update-todo'
                onClick={this.saveEdit}>
                <span className='glyphicon glyphicon-floppy-saved'></span>
              </button>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div className={`panel-body ${this.changeClass()}`}>
          <div className='row'>
            <div className='col-sm-1'>
              <input type='checkbox'
                onChange={this.setCheck} />
            </div>
            <div className={`col-sm-8 todo-text success ${this.toggleStrike()}`}>
              {this.state.text}
            </div>
            <div className='col-sm-3 text-right btn-group'>
              <button
                type='button' className='btn btn-block btn-primary btn-sm edit-todo'
                onClick={this.setEdit}><span className='glyphicon glyphicon-pencil '></span></button>
              <button
                type='button' className='btn btn-block btn-primary btn-sm delete-todo'
                onClick={() => this.props.handleDelete(this.props.index)}><span className='glyphicon glyphicon-trash'></span></button>
              { <button type='button' className={`btn btn-block ${this.state.checked ? 'btn-success' : 'archive' } btn-sm`}
                onClick={this.state.checked ? () => this.props.handleArchive(this.props.index) : null }><span className='glyphicon glyphicon-ok'></span></button>
              }
            </div>
          </div>
        </div>
      );
    }
  }
}

export default IndividualToDo;