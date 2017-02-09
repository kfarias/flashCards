class Deck {
  constructor({deckArray}){
    this.deckQuestion = deckArray || [];
  }
  addCardToDeck(card) {
    this.deckQuestion.push(card)
  }
  count() {
  return this.deckQuestion.length;
  }
}


export default Deck;
