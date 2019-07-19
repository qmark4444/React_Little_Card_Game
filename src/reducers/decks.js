import { ADD_DECK, ADD_CARD, LOAD_DATA, DELETE_DECK } from "../actions/types";
import { writeDecks } from "./../storage/decks";

function decksWithNewCard(oldDecks, card) {
  let newState = oldDecks.map(deck => { 
    if (deck.id === card.deckID) {
      deck.addCard(card);
      return deck;
    } else {
      return deck;
    }
  });
  saveDecks(newState);//save to localStorage for now
  return newState;
}

function saveDecks(state) {
  writeDecks(state);
  return state;
}

const reducer = (state = [], action) => { 
  switch (action.type) {
    case LOAD_DATA:
      return action.data;
    case ADD_DECK:
      let newState = state.concat(action.data);
      saveDecks(newState);
      return newState;
    case DELETE_DECK:
      {
        let newState = state.filter(deck => deck.id !== action.data.deckID);
        saveDecks(newState);
        return newState;
      }
    case ADD_CARD:
      return decksWithNewCard(state, action.data);

  }
  return state;
};

export default reducer;