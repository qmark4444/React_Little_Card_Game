import React, { Component } from "react";

import { scalingFactors } from "../../../../public/css/styles";

class NormalText extends Component {
  static displayName = "NormalText";

  render() {
    //let width = window.screen.width;
    let width = 1200;
    let concatStyles = Object.assign({}, this.props.style, { fontSize: width * 1.0 / scalingFactors.normal });

    return (
      <span className="fontNormal" 
        style={concatStyles}
      >
        {this.props.children}
      </span>
    );
  }
}

export default NormalText;