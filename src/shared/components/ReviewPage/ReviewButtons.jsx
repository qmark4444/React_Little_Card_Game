import React, { Component } from "react";

import Button from "./../common/Button";
// import NormalText from "./../common/NormalText";
import Text, {withText} from "../common/Text";
const NormalText = withText(Text, 'normal');
import {colors} from "../../../browser/css/styles";

import md5 from "md5";

class ContinueButton extends Component { 
  render() {
    let text = this.props.wasCorrect
      ? "Correct! Next card?"
      : "Oops, not quite. Next card?";
    return (
      <Button onClick={this.props.onClick} style={{ backgroundColor: colors.pink }}>
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
      <Button onClick={quitFunc} style={{ backgroundColor: colors.yellow }}>
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
  selectAnswerFunc,
  wasClicked
) {
  if (!answers) return null;

  return answers.map((a, aIndex) => {
    let isCorrectAnswer = a === correctAnswer;
    let buttonStyle = styles.options;
    
    let myID = '_' + md5(a);
    if(wasReviewed && wasClicked === myID) { 
      if (wasCorrect) {
        buttonStyle = Object.assign({}, buttonStyle, styles.rightAnswer);
      } else {
        buttonStyle = Object.assign({}, buttonStyle, styles.wrongAnswer);
      }
    }

    return (
      <div key={a} className="answerOptions">
        <Button
          disabled={wasReviewed}
          style={buttonStyle}
          id={myID} 
          onClick={(thisID) => {
            selectAnswerFunc(isCorrectAnswer, thisID);
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