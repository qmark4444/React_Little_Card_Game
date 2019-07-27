import React, { Component } from "react";
import { addCard, reviewDeck } from "./../../actions/creators";
import { connect } from "react-redux";
import Button from "../common/Button";
import LabeledInput from "../common/LabeledInput";
import NormalText from "../common/NormalText";
import Input from "../common/Input";
import {inputButtonStyle} from '../../../../public/css/styles';
import Snackbar from "../common/Snackbar";

class NewCard extends Component {

  constructor(props) {
    super(props);
    this.state = { front: "", back: "", error: null, showMsg: false };
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
    //if card exists, throw exception and catch it
    try {
      this.props.createCard(this.state.front, this.state.back, this._deckID());
      
      //clear front back input fields after adding card 
      this.setState({front: '', back: '', error: null, showMsg: false });

      if(!this.props.history.location.pathname === `/createCard/${this._deckID()}` ){
        this.props.history.push(`/createCard/${this._deckID()}`);
      }
    }
    catch(e){
      this.setState({error: e, showMsg: true})
    }    
  };

  _closeMsg = () => {
    this.setState({showMsg: false});
  }

  _reviewDeck = () => {
    this.props.reviewDeck(this._deckID());
    this.props.history.push('/review');
  };

  _doneCreating = () => {
    this.props.history.push('/');
  };

  render() {
    return (
      <div id="newCardPage">
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

          { 
            (this.state.error)?
            <Snackbar display={this.state.error && this.state.showMsg} handleClick={this._closeMsg} dwellTime={1000}>
              {this.state.error}
            </Snackbar>
            :
            null
          }

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