import { expect , assert} from 'chai';
import Card from '../scripts/card'

describe('Card Constructor', () => {
  it('card should be a function', () => {
    assert.isFunction(Card)
  })
  it('can instantiate a new card', () => {
    let card = new Card ({ answer: "Juneau", question:"What is the capital of Alaska?"})
  })
  it('card should accept a question', () => {
    let card = new Card({ question: "What is the capital of Alaska?" });

    assert.equal(card.question, "What is the capital of Alaska?");
  })
  it('card should accept a answer', () => {
    let card = new Card({ answer: "Juneau" });

    assert.equal(card.answer, "Juneau");
  })

})

export default Card;
