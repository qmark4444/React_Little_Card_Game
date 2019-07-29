import React, { Component } from "react";
// import { scalingFactors } from "../../../../public/css/styles";

class HeadingText extends Component {
  static displayName = "HeadingText";

  render() {
    // let width = window? window.screen.width : '';
    // let fontSize = window? window.screen.width/scalingFactors.big: '';
    // let concatStyles = Object.assign({}, this.props.style, { fontSize: width / scalingFactors.big });
    // let concatStyles = Object.assign({}, this.props.style, { fontSize: fontSize });

    return (
      <span className="fontNormal"
        // style={concatStyles}
        style={this.props.style}
      >
        {this.props.children}
      </span>
    );
  }
}

export default HeadingText;