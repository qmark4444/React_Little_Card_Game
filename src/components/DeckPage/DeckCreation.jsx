import React, { Component } from "react";

import { CreateDeckButton, EnterDeck } from "./DeckCreationFields";

class DeckCreation extends Component {
  constructor(props) {
    super(props);
    this.state = { startCreating: false };
  }

  _newDeck = name => {
    this.setState({ startCreating: false });
    this.props.create(name);
  };

  _startCreating = () => {
    this.setState({ startCreating: true });
  };

  render() {
    let contents = this.state.startCreating
      ? <EnterDeck create={this._newDeck} />
      : <CreateDeckButton onClick={this._startCreating} />;
    return contents;
  }
}

export default DeckCreation;