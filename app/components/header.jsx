import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <h1>Header: {this.props.name}</h1>
    );
  }
}

module.exports = Header;
