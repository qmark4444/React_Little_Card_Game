import React, { Component } from "react";

// import { scalingFactors } from "../../../../public/css/styles";

class NormalText extends Component {
  static displayName = "NormalText";

  render() {
    // let width = window? window.screen.width : '';//ReferenceError: window is not defined--- on server-side rendering
    // let width = 1200;// do it with media queries
    // let fontSize = window? window.screen.width/scalingFactors.normal: '';
    // let concatStyles = Object.assign({}, this.props.style, { fontSize: width * 1.0 / scalingFactors.normal });
    // let concatStyles = Object.assign({}, this.props.style, { fontSize: fontSize });

    return (
      <span className="fontNormal" 
        // style={concatStyles} 
        //when window not exist, fontsize determined by class, 
        //when window exist, style override the class
        style={this.props.style}
      >
        {this.props.children}
      </span>
    );
  }
}

export default NormalText;