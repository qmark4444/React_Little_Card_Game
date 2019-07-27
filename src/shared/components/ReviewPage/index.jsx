import React, { Component } from "react";
import { connect } from "react-redux";
const QuizView = require('./QuizView');
import { mkReviewSummary } from "./ReviewSummary";
import {colors} from "../../../../public/css/styles";
import { nextReview, stopReview } from "./../../actions/creators";

class ReviewScreen extends Component {
  static displayName = "ReviewScreen";

  constructor(props) {
    super(props);
    this.state = { numReviewed: 0, numCorrect: 0 };
  }

  _onReview = correct => {
    if (correct) {
      this.setState({ numCorrect: this.state.numCorrect + 1 });
    }
    this.setState({ numReviewed: this.state.numReviewed + 1 });
  };

  _nextReview = () => {
    this.props.nextReview();
  };

  _quitReviewing = () => {
    this.props.stopReview();
    this.props.history.goBack();
  };

  _contents() {
    if (!this.props.reviews || this.props.reviews.length === 0) {
      return null;
    }

    if (this.props.currentReview < this.props.reviews.length) {
      return (
        <QuizView
          onReview={this._onReview}
          continue={this._nextReview}
          quit={this._quitReviewing}
          {...this.props.reviews[this.props.currentReview]}
        />
      );
    } else {
      let percent = this.state.numCorrect / this.state.numReviewed;
      return mkReviewSummary(percent, this._quitReviewing);
    }
  }

  render() {
    return (
      <div style={styles.container}>
        {this._contents()}
      </div>
    );
  }
}

const styles = ({
  container: { backgroundColor: colors.blue, flex: 1, paddingTop: 24 }
});

const mapDispatchToProps = dispatch => {
  return {
    nextReview: () => {
      dispatch(nextReview());
    },
    stopReview: () => {
      dispatch(stopReview());
    }
  };
};

const mapStateToProps = state => {
  return {
    reviews: state.currentReview.questions,
    currentReview: state.currentReview.currentQuestionIndex
  };
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(ReviewScreen);