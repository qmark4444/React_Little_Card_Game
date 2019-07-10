import React, { Component } from "react";

import Input from "./Input";
import NormalText from "./NormalText";

class LabeledInput extends Component {
  render() {
    return (
      <div style={{ padding: 5 }}>
        <NormalText style={{ paddingLeft: 10 }}>
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