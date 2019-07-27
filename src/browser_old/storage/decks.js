import Deck from "./../data_models/Deck";
export const DECK_KEY = "cardgame:decks";

async function read(key, deserializer) { 
  try {
    let val = await localStorage.getItem(key);
    if (val !== null) {
      let readValue = JSON.parse(val).map(serialized => {
        return deserializer(serialized);
      });
      return readValue;
    } else {
      console.info(`${key} not found on disk.`);
      return [];
    }
  } catch (error) {
    console.warn("localStorage error: ", error.message);
  }
}

async function write(key, item) {
  try {
    await localStorage.setItem(key, JSON.stringify(item));
  } catch (error) {
    console.error("localStorage error: ", error.message);
  }
}

export const readDecks = () => {
  return read(DECK_KEY, Deck.createInstance);
};

export const writeDecks = decks => {
  return write(DECK_KEY, decks);
};