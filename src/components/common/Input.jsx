import React, { Component } from "react";

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }

  _onSubmit = ev => {
    let keyCode = ev.keyCode || ev.which;
    if(keyCode == 13){
      //console.log('input ref value: ', this.refs.newDeckInput.value);
      this.props.onEntry(ev.target.value);
    }
    if (this.props.clearOnSubmit) {
      this.setState({ text: "" });
    }
  };

  _onChange = text => {
    this.setState({ text: text });
    if (this.props.onChange) {
      this.props.onChange(text);
    }
  };

  render() {
    return (
      <div>
        <input
          type={this.props.type}
          name={this.props.name}
          className="nameField wideButton fontNormal"
          style={this.props.style}
          ref="newDeckInput"
          onChange={this._onChange}
          onKeyUp={this._onSubmit}
        />
      </div>
    );
  }
}

// Default props are used if not otherwise specified
Input.defaultProps = { clearOnSubmit: true };

export default Input;