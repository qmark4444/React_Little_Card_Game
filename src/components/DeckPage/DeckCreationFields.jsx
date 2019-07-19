import React, { Component } from "react";

import Button from "../common/Button";
import NormalText from "./../common/NormalText";
import LabeledInput from "../common/LabeledInput";

class CreateDeckButton extends Component { 
  render() {
    return (
      <Button className="createDeck" onClick={this.props.onClick}>
        <NormalText>Create Deck</NormalText>
      </Button>
    );
  }
}

class EnterDeck extends Component {
  constructor(props) {
    super(props);
    this.state = { deckName: "" };
  }

  _create = () => {
    this.props.create(this.state.deckName);
  };

  _onChange = deckName => {
    this.setState({ deckName });
  }

  render() {
    return (
      <div id="deckCreation">
        <LabeledInput 
          onEntry={this.props.create}
          onChange={this._onChange}
          className="nameField fontNormal"
          label='Deck Name'
          placeholder=' New Deck Name '
        />
        <CreateDeckButton 
          onClick={this._create}
        />
      </div>
    );
  }
}

export { CreateDeckButton, EnterDeck };