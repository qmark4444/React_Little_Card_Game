import md5 from "md5";

class Deck {
  constructor(name) {
    this.name = name;
    this.id = md5("deck:" + name);
    this.cards = [];
  }

  setFromObject(ob) {
    this.name = ob.name;
    this.cards = ob.cards;
    this.id = ob.id;
  }

  static createInstance(ob) {
    let d = new Deck(ob.name);
    d.setFromObject(ob);
    return d;
  }

  findCard(cardID) {
    return this.cards.find(card => card.id === cardID);
  }

  addCard(card) {
    if(this.findCard(card.id)){
      throw "card already exists";
    }
    this.cards = this.cards.concat(card);
  }
}

export default Deck;