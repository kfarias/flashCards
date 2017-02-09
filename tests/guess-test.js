import { expect, assert } from 'chai';
import Guess from "../scripts/guess";
import Card from "../scripts/card";

describe('Guess Constructor', () => {
  it('should be a function', () => {
    assert.isFunction(Guess);
  })
  it('should accept a response', () => {
    let guess = new Guess({ response: "Saturn" });

    assert.equal(guess.response, "Saturn");
  })
  it('should accept a card question object', () => {
    let card = new Card({});
    let guess = new Guess({ cardQuestion: card });

    assert.isObject(guess.cardQuestion);
  })
  it('should be able to access the question through guess', () => {
    let card = new Card({ question: "Which planet is closest to the sun?" });
    let guess = new Guess({ cardQuestion: card });

    assert.equal(guess.cardQuestion.question, "Which planet is closest to the sun?");
  })
  it('should be able to access the answer through guess', () => {
    let card = new Card({ answer: "Mercury" });
    let guess = new Guess({ cardQuestion: card });

    assert.equal(guess.cardQuestion.answer, "Mercury");
  })
  it('should accept a question card and an incorrect answer and return false', () => {
    let card = new Card({ question: "Which planet is closest to the sun?", answer: "Mercury" });
    let guess = new Guess({ response: "Saturn", cardQuestion: card });

    assert.equal(guess.checkGuess(), false);
  })
  it('should acept a question cars and a correct answer and return true', () => {
    let card = new Card({ question: "What is the capital of Alaska?", answer: "Juneau" });
    let guess = new Guess({ response: "Juneau", cardQuestion: card });

    assert.equal(guess.checkGuess(), true);
  })
  it('should accept a question card and an incorrect answer and return incorrect', () => {
    let card = new Card({ question: "Which planet is closest to the sun?", answer: "Mercury" });
    let guess = new Guess({ response: "Saturn", cardQuestion: card });

    assert.equal(guess.feedBack(), 'Incorrect');
  })
  it('should acept a question cars and a correct answer and return true', () => {
    let card = new Card({ question: "What is the capital of Alaska?", answer: "Juneau" });
    let guess = new Guess({ response: "Juneau", cardQuestion: card });

    assert.equal(guess.feedBack(), 'Correct!');
})
})
