import Card from "./card.js";
const colors = ["red", "blue", "green", "yellow"];
const numbers = [1, 2, 3, 4, 5, 6, 7];

export default class Deck {
  constructor() {
    this.deck = [];
    this.createDeck();
    this.shuffleDeck();
  }

  createDeck() {
    for (let i = 0; i < numbers.length; i++) {
      for (let j = 0; j < colors.length; j++) {
        this.deck.push(new Card(i + 1, colors[j]));
      }
    }
  }

  showDeck() {
    console.log(this.deck);
  }

  shuffleDeck() {
    for (let i = this.deck.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = this.deck[i];
      this.deck[i] = this.deck[j];
      this.deck[j] = temp;
    }
  }

  deal() {
    return this.deck.pop();
  }

  dealN(n) {
    let output = [];
    for (let i = 0; i < n; i++) {
      output.push(this.deal());
    }
    return output;
  }
}
