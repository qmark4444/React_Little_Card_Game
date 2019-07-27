import React, { Component } from "react";

class Button extends Component {
  static displayName = "Button";

  constructor(props){
    super(props);
    this.buttonRef = React.createRef();
  }

  _onClick = (e) => {
    e.preventDefault();
    //e.persist();//will remove the synthetic event from the pool and retake the reference to the event
    this.props.onClick(this.buttonRef.current.id);
  };

  render() {
    let concatStyles = Object.assign({}, this.props.style );

    return (
      <button
        className="wideButton"
        onClick={this._onClick}
        style={concatStyles}
        disabled={this.props.disabled}
        id={this.props.id}
        ref={this.buttonRef}
      >
        {this.props.children}
      </button>
    );
  }
}

Button.defaultProps = { disabled: false };

export default Button;