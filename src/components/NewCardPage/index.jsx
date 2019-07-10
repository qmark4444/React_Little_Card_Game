import React, { Component } from "react";
import { addCard, reviewDeck } from "./../../actions/creators";
import { connect } from "react-redux";
import Button from "../common/Button";
import LabeledInput from "../common/LabeledInput";
import NormalText from "../common/NormalText";
import Input from "../common/Input";

class NewCard extends Component {

  constructor(props) {
    super(props);
    this.state = { front: "", back: "" };
  }

  _deckID = () => {
    return this.props.match.params.deckID;
  };

  _handleFront = event => {
    this.setState({ front: event.target.value });
  };

  _handleBack = event => {
    console.log('handle back event ', event.target);
    this.setState({ back: event.target.value });
  };

  _createCard = () => {
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
        <form id="createCard">
          <LabeledInput
            label="Front"
            clearOnSubmit={false} 
            onChange={this._handleFront}
            value={this.state.front}
            className="nameField wideButton fontNormal"
          />
          <LabeledInput
            label="Back"
            clearOnSubmit={false}
            onChange={this._handleBack}
            value={this.state.back}
            className="nameField wideButton fontNormal"
          />

          <Input type="button" 
            onClick={this._createCard}
            value="Create Card"
          />
        </form>

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