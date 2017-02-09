import { expect, assert } from 'chai';
import Deck from "../scripts/deck";
import Card from "../scripts/card";
import CardGenerator from "../scripts/cardGenerator";

describe('Deck constructor', () => {
  it('should be a function', () => {
    assert.isFunction(Deck);
  })
  it('should return an array as default', () => {
    let deck = new Deck({});

    assert.isArray(deck.deckQuestion)
  })
  it('should return an array when ine is passed in', () => {
    let deck = new Deck({deckArray: []})

    assert.isArray(deck.deckQuestion);
  })
  it('should add a new card in the deck array', () => {
    let card = new Card({});
    let deck = new Deck({});

    deck.addCardToDeck(card);
    expect(deck.deckQuestion).to.include(card);
  })
  it('should add multiple cards to array and check if they exist', () => {
    let card1 = new Card({answer: "Juneau", question: "What is the capital of Alaska?"});
    let card2 = new Card({ answer: "93,000,000", question: "Approximately how many miles are in one astronomical unit?"});
    let deck = new Deck({});

    deck.addCardToDeck(card1);
    deck.addCardToDeck(card2);
    expect(deck.deckQuestion).to.include(card1, card2)
  })
  it('should add 2 cards to array and ceck that count is 2', () => {
    let card1 = new Card({answer: "Juneau", question: "What is the capital of Alaska?"});
    let card2 = new Card({ answer: "93,000,000", question: "Approximately how many miles are in one astronomical unit?"});
    let deck = new Deck({});

    deck.addCardToDeck(card1);
    deck.addCardToDeck(card2);
    assert.equal(deck.count(), 2);
  })
  it.skip('should accet an array from the txt file and test length', () => {
    let cardGenerator = new CardGenerator({filePath: 'cards.txt'});
    let deck = new Deck({deckArray: cardGenerator.cards})

    expect(deck.deckQuestion).to.have.lengthOf(4);
  })
})
