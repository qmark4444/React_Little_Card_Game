import React, { Component } from "react";

import { CreateDeckButton, EnterDeck } from "./DeckCreationFields";

import Snackbar from "../common/Snackbar";

class DeckCreation extends Component {
  constructor(props) {
    super(props);
    this.state = { startCreating: false };
  }

  _newDeck = name => {
    this.props.create(name);
    this.setState({ startCreating: false });
  };

  _startCreating = () => {
    this.setState({ startCreating: true });
  };

  render() {
    let contents = this.props.deckExist
      ? (
        <div>
          <EnterDeck create={this._newDeck} />
          <Snackbar display={this.props.deckExist && this.props.showMsg} handleClick={this.props.closeMsg} dwellTime={1000}>
            deck creation: deck already exists
          </Snackbar>
        </div>
      )
      : this.state.startCreating
      ? <EnterDeck create={this._newDeck} />
      : <CreateDeckButton onClick={this._startCreating} />;
    return contents;
  }
}

export default DeckCreation;