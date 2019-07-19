import React, { Component } from "react";

import Input from "./Input";
import NormalText from "./NormalText";

class LabeledInput extends Component {
  render() {
    let localStyle ={
      container: {
        display:'flex', 
        flexDirection:'row'
      },
    };
    
    return (
      <div style={localStyle.container}>
        <NormalText>
          {this.props.label}:
        </NormalText>
        <Input
          type="text"
          {...this.props}
        />
      </div>
    );
  }
}

export default LabeledInput;