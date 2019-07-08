import React, { Component } from "react";

class Button extends Component {
  static displayName = "Button";

  _onClick = (e) => {
    console.log('button clicked: ', e.target.innerHTML);
    e.preventDefault();
    e.persist();
    this.props.onClick();
  };

  render() {
    let opacity = this.props.disabled ? 1 : 0.5;
    let concatStyles = Object.assign({}, {opacity: opacity}, this.props.style );

    return (
      <button
        className="wideButon"
        onClick={this._onClick}
        style={concatStyles}
      >
        {this.props.children}
      </button>
    );
  }
}

Button.defaultProps = { disabled: false };

export default Button;