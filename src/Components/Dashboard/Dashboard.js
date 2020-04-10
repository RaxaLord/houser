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
  }

  componentDidMount() {
    axios.get('/api/get_homes').then((res) => {
      this.setState({
        houses: res.data,
      });
    });
  }

  render() {
    const houses = this.state.houses.map((houses, i) => (
      <div>
        <div key={i}>
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
        <button>Delete</button>
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
