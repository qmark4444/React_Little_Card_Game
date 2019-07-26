import React, { Component } from "react";

import HeadingText from "../common/HeadingText";
import { mkContinueQuitButtons, mkAnswerButtons } from "./ReviewButtons";

class QuizView extends Component {
  static displayName = "QuizView";

  _getInitialState() {
    return { wasReviewed: false, wasCorrect: false, id: null };
  }

  constructor(props) {
    super(props);
    this.state = this._getInitialState();
  }

  _continue = () => {
    this.setState(this._getInitialState());
    this.props.continue();
  };

  _selectAnswer = (correct, id) => {
    this.props.onReview(correct);
    this.setState({ wasReviewed: true, wasCorrect: correct, wasClicked: id });
  };

  render() {
    return (
      <div>
        <div className="quizView"> 
          <HeadingText>
            Question: {this.props.prompt}
          </HeadingText>
        </div>
        {mkAnswerButtons(
          this.props.answers,
          this.props.correctAnswer,
          this.state.wasReviewed,
          this.state.wasCorrect,
          this._selectAnswer,
          this.state.wasClicked
        )}
        {mkContinueQuitButtons(
          this.state.wasReviewed,
          this.state.wasCorrect,
          this._continue,
          this.props.quit
        )}
      </div>
    );
  }
}

module.exports = QuizView;