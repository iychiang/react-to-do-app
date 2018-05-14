import React, { Component } from 'react'

export default class Form extends Component {
  constructor(props) {
    super(props);
  }
  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  render() {
    return (
      <div className='col-sm-4'>
        <div className='panel panel-default'>
          <div className='panel-heading'>Add New To-do</div>
          <div className='panel-body'>
            <strong>I want to...</strong>
            <br />
            <textarea
              className='form-control'
              onChange={this.props.textState}
              value={this.props.text} />
            <br />
            <strong>How much of a priority is this?</strong>
            <br />
            <select required
              className='form-control'
              onChange={this.props.priorityState}>
              <option>Select Priority</option>
              <option value='3'>Low Priority</option>
              <option value='2'>Medium Priority</option>
              <option value='1'>High Priority</option>
            </select>
          </div>
          <div className='panel-footer'>
            <button type='button'
              className='btn btn-success'
              onClick={this.props.addItem}>Add</button>
          </div>
        </div>
      </div>


    );
  }
}