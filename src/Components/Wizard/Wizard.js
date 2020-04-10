import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Wizard extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      address: '',
      city: '',
      state: '',
      zip: 0,
    };
    this.handleEvent = this.handleEvent.bind(this);
  }

  handleEvent(e) {
    this.setState({
      [e.target.name]: e.target.value,
      [e.target.address]: e.target.value,
      [e.target.city]: e.target.value,
      [e.target.state]: e.target.value,
      [e.target.zip]: e.target.value,
    });
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <h1>Wizard Component</h1>

        <input
          type='text'
          placeholder='Property Name'
          name='name'
          value={this.state.name}
          onChange={this.handleEvent}
        />
        <input
          type='text'
          placeholder='Address'
          name='address'
          value={this.state.address}
          onChange={this.handleEvent}
        />
        <input
          type='text'
          placeholder='City'
          name='city'
          value={this.state.city}
          onChange={this.handleEvent}
        />
        <input
          type='text'
          placeholder='State'
          maxLength='2'
          name='state'
          value={this.state.state}
          onChange={this.handleEvent}
        />
        <input
          type='text'
          maxLength='5'
          placeholder='Zipcode'
          name='zip'
          value={this.state.zip}
          onChange={this.handleEvent}
        />

        <Link to='/'>
          <button>Cancel</button>
        </Link>
      </div>
    );
  }
}
