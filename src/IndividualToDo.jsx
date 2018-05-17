import React, { Component } from 'react';

class IndividualToDo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false,
    };

    this.setEdit = this.setEdit.bind(this);
  }

  setEdit(editing) {
    this.setState({ editing: editing });
    if (false){
      this.props.handleSave(this.props.index);
    }
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
                  value={this.props.todo.text}
                  onChange={this.props.handleSave} />
                </div>
                <div className='col-sm-2 btn-group'>
                  <button type='button' className='btn btn-block btn-primary btn-sm'
                    onClick={() => this.setEdit(false)}>
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
                {this.props.todo.text}
                </div>
                <div className='col-sm-2 btn-group'>
                  <button
                    type='button' className='btn btn-block btn-primary btn-sm'
                    onClick={() => this.setEdit(true)}><span className='glyphicon glyphicon-pencil'></span></button>
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