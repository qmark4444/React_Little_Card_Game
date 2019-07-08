import React, { Component } from "react";
import { addCard, reviewDeck } from "./../../actions/creators";
import { connect } from "react-redux";
import Button from "../common/Button";
import LabeledInput from "../common/LabeledInput";
import NormalText from "../common/NormalText";

class NewCard extends Component {
  static initialState = { front: "", back: "" };

  constructor(props) {
    super(props);
    this.state = this.initialState;
  }

  _deckID = () => {
    return this.props.match.params.deckID;
  };

  _handleFront = text => {
    this.setState({ front: text });
  };

  _handleBack = text => {
    this.setState({ back: text });
  };

  _createCard = () => {
    //console.log('create card, front: ', this.state.front, ' back: ', this.state.back )
    this.props.createCard(this.state.front, this.state.back, this._deckID());
    this.props.history.push(`/createCard/${this._deckID()}`);
  };

  _reviewDeck = () => {
    this.props.reviewDeck(this._deckID());
    this.props.history.push('/review');
  };

  _doneCreating = () => {
    this.props.history.push('/');
  };

  render() {
    return (
      <div>
        <h1>New Card Page</h1>
        {/* <form id="newCardCreate"> */}
          <LabeledInput
            label="Front"
            clearOnSubmit={false}
            onEntry={this._handleFront}
            onChange={this._handleFront}
          />
          <LabeledInput
            label="Back"
            clearOnSubmit={false}
            onEntry={this._handleBack}
            onChange={this._handleBack}
          />
          <Button style={{ backgroundColor: 'green' }} onClick={this._createCard}>
            <NormalText>Create Card</NormalText>
          </Button>
        {/* </form> */}

        <div style={{ flexDirection: "row" }}>
          <Button style={{ backgroundColor: 'blue' }} onClick={this._doneCreating}>
            <NormalText>Done</NormalText>
          </Button>

          <Button style={{ backgroundColor: 'blue' }} onClick={this._reviewDeck}>
            <NormalText>Review Deck</NormalText>
          </Button>
        </div>

      </div>
    );
  }
}

const mapStateToProps = state => {
  return { decks: state.decks };
};

const mapDispatchToProps = dispatch => {
  return {
    createCard: (front, back, deckID) => {
      dispatch(addCard(front, back, deckID));
    },
    reviewDeck: deckID => {
      dispatch(reviewDeck(deckID));
    }
  };
};
 
module.exports = connect(mapStateToProps, mapDispatchToProps)(NewCard);