import React from 'react';

class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      changeContent: false
    };
  }
  clickHere() {
    this.setState({ changeContent: !this.state.changeContent });
  }

  render() {
    const c1 = <h1>Body: {this.props.children}</h1>;
    const c2 = <h1>LALALA: {this.props.children}</h1>;
    const content = !this.state.changeContent ? c1 : c2;
    return (
      <div>
        {content}
      <button onClick={this.clickHere.bind(this)}>Click here!!!!</button>
      </div>
    );
  }
}

module.exports = Body;
