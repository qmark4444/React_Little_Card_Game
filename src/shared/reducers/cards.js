import { STUDY_DECK } from "./../actions/types";

function findDeck(decks, id) {
    return decks.find(d => {
        return d.id === id;
    });
}

const reducer = (state=[], action, decks) => {
    switch (action.type) {
      case STUDY_DECK:
        return findDeck(decks, action.data.deckID).cards;
    }
    return state;
  };
  
  export default reducer;