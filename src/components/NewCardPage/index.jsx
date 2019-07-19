import React, { Component } from "react";
import { addCard, reviewDeck } from "./../../actions/creators";
import { connect } from "react-redux";
import Button from "../common/Button";
import LabeledInput from "../common/LabeledInput";
import NormalText from "../common/NormalText";
import Input from "../common/Input";
import {inputButtonStyle} from '../../../css/styles';

class NewCard extends Component {

  constructor(props) {
    super(props);
    this.state = { front: "", back: "" };
  }

  _deckID = () => {
    return this.props.match.params.deckID;
  };

  _handleFront = value => {
    this.setState({ front: value });
  };

  _handleBack = value => {
    this.setState({ back: value });
  };

  _createCard = () => {
    this.props.createCard(this.state.front, this.state.back, this._deckID());

    //clear front back input fields after add card 
    this.setState({front: '', back: ''});

    if(!this.props.history.location.pathname === `/createCard/${this._deckID()}` ){
      this.props.history.push(`/createCard/${this._deckID()}`);
    }
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
            onChange={this._handleFront}
            value={this.state.front}
            className="nameField wideButton fontNormal"
          />
          <LabeledInput
            label="Back" 
            onChange={this._handleBack}
            value={this.state.back}
            className="nameField wideButton fontNormal"
          />

          <Input type="button" 
            style={inputButtonStyle}//in-line style to override bootstrap.css
            onClick={this._createCard}
            value="Create Card"
            readOnly={true} //button value
          /> 
        </form>

        <div style={{ flexDirection: "row" }}>
          <Button onClick={this._doneCreating}>
            <NormalText>Done</NormalText>
          </Button>

          <Button onClick={this._reviewDeck}>
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