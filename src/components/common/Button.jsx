import React, { Component } from "react";

class Button extends Component {
  static displayName = "Button";

  _onClick = (e) => {
    e.preventDefault();
    //e.persist();//will remove the synthetic event from the pool and retake the reference to the event
    this.props.onClick();
  };

  render() {
    let opacity = this.props.disabled ? 1 : 0.5;
    let concatStyles = Object.assign({}, {opacity: opacity}, this.props.style );

    return (
      <button
        className="wideButton"
        onClick={this._onClick}
        style={concatStyles}
        disabled={this.props.disabled}
      >
        {this.props.children}
      </button>
    );
  }
}

Button.defaultProps = { disabled: false };

export default Button;