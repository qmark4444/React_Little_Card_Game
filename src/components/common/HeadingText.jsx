import React, { Component } from "react";
import { scalingFactors } from "./../../../css/styles";

class HeadingText extends Component {
  static displayName = "HeadingText";

  render() {
    let width = window.screen.width;
    let concatStyles = Object.assign({}, this.props.style, { fontSize: width / scalingFactors.big });

    return (
      <div>
        <span style={concatStyles}>
          {this.props.children}
        </span>
      </div>
    );
  }
}

export default HeadingText;