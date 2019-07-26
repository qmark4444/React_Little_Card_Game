import CardModel from "./Card";
import DeckModel from "./Deck";
import { mkReviews } from "./QuizCardView";

let MockCards = [
  new CardModel("der Hund", "the dog", "fakeDeckID"),
  new CardModel("das Kind", "the child", "fakeDeckID"),
  new CardModel("die Frau", "the woman", "fakeDeckID"),
  new CardModel("die Katze", "the cat", "fakeDeckID")
];

let MockCard = MockCards[0];
let MockReviews = mkReviews(MockCards);

let MockDecks0 = [new DeckModel("Chinese")];
let MockDecks1 = [new DeckModel("French")];
let MockDecks2 = [new DeckModel("German1"), new DeckModel("German2")];
let MockDecks3 = [new DeckModel("Spanish1"), new DeckModel("Spanish2"), new DeckModel("Spanish3")];

MockDecks0.map(deck => {
  deck.addCard(new CardModel("nihou", "how are you", deck.id));
  return deck;
});

MockDecks1.map(deck => {
  deck.addCard(new CardModel("chien", "Dog", deck.id));
  deck.addCard(new CardModel("chat", "Cat", deck.id));
  deck.addCard(new CardModel("pain", "Bread", deck.id));
  return deck;
});

MockDecks2.map(deck => {
  deck.addCard(new CardModel("der Hund", "the dog", deck.id));
  deck.addCard(new CardModel("die Katze", "the cat", deck.id));
  deck.addCard(new CardModel("das Brot", "the bread", deck.id));
  deck.addCard(new CardModel("die Frau", "the woman", deck.id));
  return deck;
});

MockDecks2[0].addCard(new CardModel("Auf Wiedersehen", "goodbye", MockDecks2[0].id));
MockDecks2[0].addCard(new CardModel("danken", "thank", MockDecks2[0].id));

MockDecks3.map(deck => {
  deck.addCard(new CardModel("el rey", "the king", deck.id));
  deck.addCard(new CardModel("la reina", "the queen", deck.id));
  return deck;
});

let MockDecks = [...MockDecks0, ...MockDecks1, ...MockDecks2, ...MockDecks3];

let MockDeck = MockDecks[0];

export { MockReviews, MockCards, MockCard, MockDecks, MockDeck };