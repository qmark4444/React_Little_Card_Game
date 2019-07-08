import React, { Component } from "react";

import Button from "../common/Button";
import NormalText from "../common/NormalText";

class Deck extends Component {
  static displayName = "Deck";

  _review = () => {
    this.props.review();
  };

  _addCards = () => { 
    this.props.add();
  };

  render() {
    return (
      <div className="deckGroup">
        <Button className="deckButton" onClick={this._review}>
          <NormalText>
            {this.props.deck.name}: {this.props.count} cards
          </NormalText>
        </Button>

        <Button className="editButton" onClick={this._addCards}>
          <NormalText>+</NormalText>
        </Button>
      </div>
    );
  }
}

export default Deck;