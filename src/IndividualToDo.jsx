import React, { Component } from 'react';

class IndividualToDo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false,
      text: props.todo.text
    };

    this.setEdit = this.setEdit.bind(this);
  }

  setEdit(e) {
    console.log(this.state.text);
    this.setState({ 
    editing: !this.state.editing,
    text: this.state.text }, () => console.log(this.state));
    
  }

  // startEditing(){
  // this.setState({editing:true});
  //   this.setEditing(true);
  // }

  // toggleEditing(){
  //   this.setState((state) => {editing: !state.editing});
  // }

  render() {
    if (this.state.editing) {
      return (
        <div className='panel-body'>
              <div className='row'>
                <div className='col-sm-10'>
                  <textarea className='form-control'
                  value={this.state.text}
                  onChange={(e) => this.setState({text: e.target.value})} />
                </div>
                <div className='col-sm-2 btn-group'>
                  <button type='button' className='btn btn-block btn-primary btn-sm'
                    onClick={this.setEdit}>
                    <span className='glyphicon glyphicon-floppy-disk'></span></button>
                </div>
              </div>
              </div>
      )
    } else {
      return (
        <div className='panel-body'>
              <div className='row'>
                <div className='col-sm-1'>
                  <input type='checkbox' />
                </div>
                <div className='col-sm-9'>
                {this.state.text}
                </div>
                <div className='col-sm-2 btn-group'>
                  <button
                    type='button' className='btn btn-block btn-primary btn-sm'
                    onClick={this.setEdit}><span className='glyphicon glyphicon-pencil'></span></button>
                  <button
                    type='button' className='btn btn-block btn-primary btn-sm'
                    onClick={() => this.props.handleDelete(this.props.index)}><span className='glyphicon glyphicon-trash'></span></button>
                </div>
              </div>
            </div>
      );
    }
  }
}

export default IndividualToDo;