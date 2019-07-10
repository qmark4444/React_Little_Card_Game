import React, { Component } from "react";

import Button from "../common/Button";
import NormalText from "./../common/NormalText";
import Input from "../common/Input";

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
      <div>
        <Input
          onEntry={this.props.create}
          onChange={this._onChange}
          className="nameField fontNormal"
        />
        <CreateDeckButton 
          onClick={this._create} 
        />
      </div>
    );
  }
}

export { CreateDeckButton, EnterDeck };