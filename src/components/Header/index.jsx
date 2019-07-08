import React, { Component } from "react";
import HeadingText from "../common/HeadingText";
import Logo from "./Logo";

class Header extends Component {
  static displayName = "Header";

  render() {
    return (
      <div className="header">
        <Logo />
        <HeadingText>Card Game</HeadingText>
        {this.props.children}
      </div>
    );
  }
}

module.exports = Header;