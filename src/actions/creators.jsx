import {
    ADD_DECK,
    ADD_CARD,
    STUDY_DECK,
    REVIEW_DECK,
    DELETE_DECK,
    STOP_REVIEW,
    NEXT_REVIEW,
    LOAD_DATA
  } from "./types";
  
  import Card from "../data_models/Card";
  import Deck from "../data_models/Deck";
  
  export const addDeck = name => {
    return { type: ADD_DECK, data: new Deck(name) };
  };
  
  export const addCard = (front, back, deckID) => {
    return { type: ADD_CARD, data: new Card(front, back, deckID) };
  };
  
  export const studyDeck = deckID => {
    return { type: STUDY_DECK, data: { deckID: deckID } };
  };

  export const reviewDeck = deckID => {
    return { type: REVIEW_DECK, data: { deckID: deckID } };
  };

  export const deleteDeck = deckID => {
    return { type: DELETE_DECK, data: { deckID: deckID } };
  };
  
  export const stopReview = () => {
    return { type: STOP_REVIEW, data: {} };
  };
  
  export const nextReview = () => {
    return { type: NEXT_REVIEW, data: {} };
  };
  
  export const loadData = data => {
    return { type: LOAD_DATA, data: data };
  };