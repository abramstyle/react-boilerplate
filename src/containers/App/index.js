import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();

    this.state = {
      value: '111',
    };
  }

  render() {
    const { value } = this.state;
    return (
      <main className="app" />
    );
  }
}

export default App;
