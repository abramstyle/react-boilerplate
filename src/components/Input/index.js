import React, { Component } from 'react';

class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.value,
      // lastValue: null,
    };
  }

  updateValue(newValue) {
    this.setState({
      value: newValue,
    });
  }

  // static getDerivedStateFromProps(props, state) {
  //   if (props.value !== state.lastValue) {
  //     state.lastValue = props.value;
  //     return {
  //       value: props.value,
  //     };
  //   }
  //   return null;
  // }

  componentDidUpdate(prevProps, prevState) {
  }

  handleVlaueChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  }

  render() {
    const { placeholder } = this.props;
    const { value } = this.state;
    return (
      <input
        type="text"
        placeholder={placeholder}
        onChange={this.handleVlaueChange}
        value={value}
      />
    );
  }
}

export default Input;
