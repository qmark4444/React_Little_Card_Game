import React, { Component } from "react";

import HeadingText from "../common/HeadingText";
import { mkContinueQuitButtons, mkAnswerButtons } from "./ReviewButtons";

class QuizView extends Component {
  static displayName = "QuizView";

  _getInitialState() {
    return { wasReviewed: false, wasCorrect: false };
  }

  constructor(props) {
    super(props);
    this.state = this._getInitialState();
  }

  _continue = () => {
    this.setState(this._getInitialState());
    this.props.continue();
  };

  _selectAnswer = correct => {
    this.props.onReview(correct);
    this.setState({ wasReviewed: true, wasCorrect: correct });
  };

  render() {
    return (
      <div>
        <h1>View Cards</h1>
        <HeadingText>
          {this.props.prompt}
        </HeadingText>
        {mkAnswerButtons(
          this.props.answers,
          this.props.correctAnswer,
          this.state.wasReviewed,
          this.state.wasCorrect,
          this._selectAnswer
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