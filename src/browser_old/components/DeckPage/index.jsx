import React, { Component } from "react";
import { connect } from "react-redux";

import { addDeck, studyDeck, reviewDeck, deleteDeck } from "./../../actions/creators";
import Deck from "./Deck";
import DeckCreation from "./DeckCreation";

class DecksScreen extends Component {
  static displayName = "DecksScreen";

  constructor(props){
    super(props);
    this.state = {error: null, showMsg: false};
  }

  _createDeck = name => { 
    try{
      let createDeckAction = addDeck(name);
      this.props.createDeck(createDeckAction);
      this.setState({error: null, showMsg: false});
      this.props.history.push(`/createCard/${createDeckAction.data.id}`);
    }
    catch(e){
      this.setState({error: e, showMsg: true});
    }
  };

  _closeMsg = () => {
    this.setState({showMsg: false})
  }

  _addCards = deckID => {
    this.props.history.push({
      pathname: `/createCard/${deckID}`,
      state: {
        returnto: this.props.location.pathname
      }
    });
  };

  _study = deckID => {
    this.props.studyDeck(deckID);
    this.props.history.push(
      {
        pathname: '/study',
        state: {
          deckID: deckID //access: this.props.location.state.deckID
        }
      }
    );
  };

  _review = deckID => {
    this.props.reviewDeck(deckID);
    this.props.history.push('review');
  };

  _delete = deckID => {
    this.props.deleteDeck(deckID);
  };

  _mkDeckViews() {
    if (!this.props.decks) {
      return null;
    }

    return (
      <div className="playTable">
        {
          this.props.decks.map(deck => {
            return (
              <Deck
                deck={deck}
                count={this.props.counts[deck.id]}
                key={deck.id}
                id={'_' + deck.id} //JS variable for querySelector can't start with a number
                add={() => {
                  this._addCards(deck.id);
                }}
                study={() => {
                  this._study(deck.id);
                }}
                delete={() => {
                  this._delete(deck.id);
                }}
                review={() => {
                  this._review(deck.id);
                }}
              />
            );
          })
        }
      </div>
    );
  }

  render() {
    return (
      <div id="deckPage">
        <DeckCreation create={this._createDeck} error={this.state.error} showMsg={this.state.showMsg} closeMsg={this._closeMsg} />
        {this._mkDeckViews()}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createDeck: deckAction => {
      dispatch(deckAction);
    },
    studyDeck: deckID => {
      dispatch(studyDeck(deckID));
    },
    reviewDeck: deckID => {
      dispatch(reviewDeck(deckID));
    },
    deleteDeck: deckID => {
      dispatch(deleteDeck(deckID));
    },
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