export default class Player {
  constructor(name) {
    this.name;
    this.hand = [];
  }
  addCard(card) {
    this.hand.push(card);
  }

  removeCard(card) {
    this.hand = this.hand.filter((x) => x != card);
  }

  showCards() {
    return this.hand;
  }
}
