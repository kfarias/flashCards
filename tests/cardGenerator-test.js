import { expect , assert} from 'chai';
import CardGenerator from '../scripts/cardGenerator'
import Card from '../scripts/card';

describe('CardGenerator Constructor', () => {
  it('should be a function', () => {
    assert.isFunction(CardGenerator);
  })
  it('should hold an array', () => {
    const filename = "./scripts/words.txt"
    let cardGenerator = new CardGenerator(filename)

    expect(cardGenerator.cards).to.have.lengthOf(4);
    })
  it('should load cards from a file', () => {
    const filename = "./scripts/words.txt";
    let cardGenerator = new CardGenerator(filename);
    let cards = cardGenerator.cards;
    let card1 = new Card({ answer: "10", question: "What is 5 + 5?"})
    let card2 = new Card({ answer: "vanilla", question: "What is yung-jhun's favorite ice cream flavor?"})
    let card3 = new Card({ answer: "nobody knows", question: "What is alter-nate's middle name?"})
    let card4 = new Card({ answer: "Pat Whey", question: "What cardboard cutout lives at Turing?"})

    assert.deepEqual(cards,[card1, card2, card3, card4])
  });


})
