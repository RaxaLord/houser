import React, { Component } from 'react';
import House from '../House/House';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      houses: [],
    };
    this.deleteHome = this.deleteHome.bind(this);
  }

  componentDidMount() {
    axios.get('/api/houses').then((res) => {
      this.setState({
        houses: res.data,
      });
    });
  }

  deleteHome(id) {
    axios.delete('/api/houses/:id');
    console.log('button clicked');
  }

  render() {
    const houses = this.state.houses.map((houses, i) => (
      <div>
        <div>
          Property Name: {houses.name}
          <br />
          Address: {houses.address}
          <br />
          City: {houses.city}
          <br />
          State: {houses.state}
          <br />
          Zip: {houses.zip}
        </div>
        <button onClick={this.deleteHome}>Delete</button>
      </div>
    ));

    return (
      <div>
        <h1>Dashboard Component</h1>
        <Link to='/wizard'>
          <button>Add New Property</button>
        </Link>
        <br />
        <br />
        <House houses={houses[0]} />
        <House houses={houses[1]} />
        <House houses={houses[2]} />
        <House houses={houses[3]} />
        <House houses={houses[4]} />
      </div>
    );
  }
}
