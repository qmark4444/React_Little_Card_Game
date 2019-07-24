import md5 from "md5";

class Card {
  constructor(front, back, deckID) {
    this.front = front;
    this.back = back;
    this.deckID = deckID;
    this.id = md5(front + back + deckID);
  }

  setFromObject(ob) {
    this.front = ob.front;
    this.back = ob.back;
    this.deckID = ob.deckID;
    this.id = ob.id;
  }

  static createInstance(ob) { //to save lines of code when creating a new card
    let c = new Card(ob.front, ob.back, ob.deckID);
    c.setFromObject(ob);
    return c;
  }

  isOneSideEmpty(){
    let emptyStringPattern = /^\s*$/; // has zero or more space and has only space
    return emptyStringPattern.test(this.front) || emptyStringPattern.test(this.back);
  }
}

export default Card;