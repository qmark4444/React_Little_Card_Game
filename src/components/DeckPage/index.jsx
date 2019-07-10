import React, { Component } from "react";
import { connect } from "react-redux";

import { addDeck, reviewDeck } from "./../../actions/creators";
import Deck from "./Deck";
import DeckCreation from "./DeckCreation";

class DecksScreen extends Component {
  static displayName = "DecksScreen";

  _createDeck = name => { 
    let createDeckAction = addDeck(name);
    this.props.createDeck(createDeckAction);
    this.props.history.push(`/createCard/${createDeckAction.data.id}`);
  };

  _addCards = deckID => {
    this.props.history.push({
      pathname: `/createCard/${deckID}`,
      state: {
        isModal: false,
        returnto: this.props.location.pathname
      }
    });
  };

  _review = deckID => {
    this.props.reviewDeck(deckID);
    this.props.history.push('review');
  };

  _mkDeckViews() {
    if (!this.props.decks) {
      return null;
    }

    return this.props.decks.map(deck => {
      return (
        <Deck
          deck={deck}
          count={this.props.counts[deck.id]}
          key={deck.id}
          add={() => {
            this._addCards(deck.id);
          }}
          review={() => {
            this._review(deck.id);
          }}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <h1>Deck Page</h1>
        {this._mkDeckViews()}
        <DeckCreation create={this._createDeck} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createDeck: deckAction => {
      dispatch(deckAction);
    },
    reviewDeck: deckID => {
      dispatch(reviewDeck(deckID));
    }
  };
};

const mapStateToProps = state => {
  return {
    decks: state.decks,
    counts: state.decks.reduce(
      (sum, deck) => {
        sum[deck.id] = deck.cards.length;
        return sum;
      },
      {}
    )
  };
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(DecksScreen);