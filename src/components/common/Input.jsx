import React, { Component } from "react";

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }

  _onSubmit = ev => {
    let keyCode = ev.keyCode || ev.which;
    if(keyCode == 13){
      if(this.props.onEntry && typeof this.props.onEntry === 'function'){
        this.props.onEntry(ev.target.value);
      }
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
          className={this.props.className}
          style={this.props.style}
          ref="inputRef" //use ref if not capture state change
          onChange={this._onChange}
          onKeyUp={this._onSubmit}
          onClick={this.props.onClick}
          value={this.props.value}
          //clearOnSubmit={this.props.clearOnSubmit} //custom attribute
          //warning: html DOM not recognize this custom attribute
        />
      </div>
    );
  }
}

// Default props for custom attributes
Input.defaultProps = { clearOnSubmit: true };

export default Input;