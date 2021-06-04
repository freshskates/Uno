import Player from "./player.js";
import Deck from "./deck.js";

export default class Game {
  constructor(players) {
    this.deck = new Deck();
    this.players = [];
    this.addPlayers(players);
    this.distributeCards();
  }

  addPlayers(number) {
    for (let i = 0; i < number; i++) {
      this.players.push(new Player("Player" + (i + 1)));
    }
  }

  distributeCards() {
    for (let i = 0; i < this.players.length; i++) {
      this.players[i].hand = this.deck.dealN(7);
    }
  }

  showPlayerHand(id) {
    return this.players[id].hand;
  }
}
