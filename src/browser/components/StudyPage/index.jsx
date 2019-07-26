import React, { Component } from "react";
import { connect } from "react-redux";

import { studyDeck, reviewDeck } from "./../../actions/creators";
import Card from "../NewCardPage/Card.jsx";
import Button from "../common/Button";
import NormalText from "../common/NormalText";

class CardsScreen extends Component {
  static displayName = "CardsScreen";

  constructor(props){
    super(props);
    this.state = {cardFigWidth: 0, cardFigHeight: 0};
    this._updatePosition = this._updatePosition.bind(this);
    this.cardFigRef = React.createRef();//just for current card
  }

  componentDidMount(){
    this._updatePosition();
    //to make responsive
    window.addEventListener('resize', this._updatePosition);
  }

  componentWillUnmount(){
    window.removeEventListener('resize', this._updatePosition);
  }

  _updatePosition(e){
    let cardFig = this.cardFigRef.current;
    //update card figure container size
    this.setState({
      cardFigWidth: cardFig.offsetWidth,
      cardFigHeight: cardFig.offsetHeight
    });
  }

  _review = () => {
    this.props.reviewDeck(this.props.location.state.deckID);
    this.props.history.push('review');
  };

  render() {
    return (
      <div id="studyPage">
        <div id="cards">
          {
            this.props.cards.map(card => {
              return (
                <figure key={card.id} ref={this.cardFigRef}>
                  <Card
                    card={card}
                    id={'_' + card.id} //JS variable for querySelector can't start with a number
                    containerWidth={this.state.cardFigWidth}
                    containerHeight={this.state.cardFigHeight} 
                    uncover={true}//show front and back
                  />
                </figure>
              );
            })
          }
        </div>

        <div className="">
          <Button className="editButton" onClick={this._review}>
            <NormalText>Start Quiz</NormalText>
          </Button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    reviewDeck: deckID => {
      dispatch(reviewDeck(deckID));
    },
  };
};

const mapStateToProps = state => {
  return {
    cards: state.currentCards,
  };
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(CardsScreen);