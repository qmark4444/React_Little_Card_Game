import React, { Component } from "react";

import Button from "./../common/Button";
import NormalText from "./../common/NormalText";
import {colors} from "./../../../css/styles";

class ContinueButton extends Component { 
  render() {
    let text = this.props.wasCorrect
      ? "Correct! Next card?"
      : "Oops, not quite. Next card?";
    return (
      <Button onClick={this.props.onClick} style={{ backgroundColor: colors.blue }}>
        <NormalText>{text}</NormalText>
      </Button>
    );
  }
}

function mkContinueQuitButtons(
  wasReviewed,
  wasCorrect,
  continueFunc,
  quitFunc
) {
  if (wasReviewed) {
    return <ContinueButton onClick={continueFunc} wasCorrect={wasCorrect} />;
  } else {
    return (
      <Button onClick={quitFunc} style={{ backgroundColor: colors.pink }}>
        <NormalText>Stop Quiz</NormalText>
      </Button>
    );
  }
}

function mkAnswerButtons(
  answers,
  correctAnswer,
  wasReviewed,
  wasCorrect,
  selectAnswerFunc
) {
  if (!answers) return null;

  return answers.map((a, aIndex) => {
    let isCorrectAnswer = a === correctAnswer;
    let buttonStyle = styles.options;
    
    if (wasReviewed) {
      if (wasCorrect) {
        Object.assign(buttonStyle, styles.rightAnswer);
      } else {
        Object.assign(buttonStyle, styles.wrongAnswer);
      }
    }

    return (
      <div key={a} className="answerOptions">
        <Button
          disabled={wasReviewed}
          style={buttonStyle}
          onClick={() => {
            selectAnswerFunc(isCorrectAnswer);
          }}
        >
          <NormalText>
            {aIndex+1}. {a}
          </NormalText>
        </Button>
      </div>
    );
  });
}

const styles = ({
  options: { backgroundColor: "#FFFFFF" },
  continueButton: { backgroundColor: colors.tan },
  rightAnswer: { backgroundColor: colors.green },
  wrongAnswer: { backgroundColor: colors.pink }
});

module.exports = { mkContinueQuitButtons, mkAnswerButtons }; 