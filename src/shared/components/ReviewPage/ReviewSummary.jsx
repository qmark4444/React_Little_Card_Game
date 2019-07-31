import React, { Component } from "react";

import Text, {withText} from "../common/Text";
const HeadingText = withText(Text, 'big');
const NormalText = withText(Text, 'normal');
import Button from "../common/Button";
import {colors} from "../../../../public/css/styles";

function mkReviewSummary(percentCorrect, quitFunc) {
  return (
    <div style={styles.done}>
      <HeadingText style={styles.alternate}>
        Reviews cleared!
      </HeadingText>
      <NormalText style={styles.alternate}>
        {Math.round(percentCorrect * 100)}% correct
      </NormalText>
      <Button onClick={quitFunc} style={styles.doneButton}>
        <NormalText>Done</NormalText>
      </Button>
    </div>
  );
}

const styles = ({
  alternate: { color: "#FFFFFF" },
  done: { display:'flex', flexDirection:'column', alignItems: "center" },
  doneButton: { backgroundColor: colors.tan }
});

export { mkReviewSummary };