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
          name={this.props.label}
          onEntry={this.props.onEntry}
          onChange={this.props.onChange}
          clearOnSubmit={this.props.clearOnSubmit}
          style={this.props.inputStyle}
        />
      </div>
    );
  }
}

export default LabeledInput;