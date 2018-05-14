import React, { Component } from 'react';

export default class IndividualToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      text: props.todo.text
    }
  }

  // startEditing(){
  // this.setState({editing:true});
  //   this.setEditing(true);
  // }

  setEditing(editing) {
    this.setState({ editing: editing });
  }

  // toggleEditing(){
  //   this.setState((state) => {editing: !state.editing});
  // }


  render() {
    if (this.state.editing) {
      return (
        <div className='row todoitem'>
          <div className='col-sm-10'>
              <textarea
              className='form-control'
              onChange={this.props.textState}
              value={this.state.text} />
          </div>
          <div className='col-sm-2 btn-group'>
            <button
              type='button'
              className='btn btn-block btn-primary btn-sm'
              onClick={() => this.setEditing(false)}
              onChange={this.props.handleSave}><span className='glyphicon glyphicon-floppy-disk'></span><br />Save</button>
          </div>
        </div>
      )
    } else {
      return (
        <div className='row todoitem'>
          <div className='col-sm-1'>
            <input type='checkbox' />
          </div>
          <div className='col-sm-9'>
            {this.props.todo.text}
          </div>
          <div className='col-sm-2 btn-group'>
            <button
              type='button'
              className='btn btn-block btn-primary btn-sm'
              onClick={() => this.setEditing(true)}><span className='glyphicon glyphicon-pencil'></span><br />Edit</button>
            <button
              type='button'
              className='btn btn-block btn-primary btn-sm'
              onClick={() => this.props.handleRemove(this.props.todo)}><span className='glyphicon glyphicon-trash'></span><br />Delete</button>
          </div>
        </div>
      );
    }
  }
}