import React, { Component } from 'react';

export default class House extends Component {
  render() {
    return (
      <div>
        {/* <h1>House Component</h1> */}
        {this.props.houses}
      </div>
    );
  }
}
