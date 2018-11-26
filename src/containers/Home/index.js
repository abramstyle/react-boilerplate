import React, { Component } from 'react';
import Input from '../../components/Input';

class App extends Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();

    this.state = {
      value: '111',
    };
  }

  handleClickChangeValue = () => {
    const newValue = Math.ceil(Math.random() * 10000);
    this.setState({
      value: newValue,
    }, () => {
      this.input.current.updateValue(newValue);
    });
  }

  render() {
    const { value } = this.state;
    return (
      <div className="app">
        <h1>React Boilerplate</h1>
        <Input
          value={value}
          placeholder="Input value"
          ref={this.input}
        />
        <button
          type="button"
          onClick={this.handleClickChangeValue}
        >change value
        </button>
      </div>
    );
  }
}

export default App;
