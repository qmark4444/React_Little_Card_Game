import { MockDecks } from "./../data_models/Mocks";
import DecksReducer from "./decks";
import CardsReducer from "./cards";
import ReviewReducer, { mkReviewState } from "./reviews";

const initialState = () => {
  return { decks: MockDecks, currentReview: mkReviewState(), currentCards: [] };
};

module.exports = (state = initialState(), action) => { 
  let decks = DecksReducer(state.decks, action);
  let cards = CardsReducer(state.currentCards, action, decks);

  return {
    decks: decks,
    currentReview: ReviewReducer(state.currentReview, action, decks),
    currentCards: cards
  };
};