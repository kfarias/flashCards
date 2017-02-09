class Guess{
  constructor({response, cardQuestion}){
    this.response = response;
    this.cardQuestion = cardQuestion;

  }
  checkGuess(){
    let {answer} = this.cardQuestion;
    return answer.toLowerCase() === this.response.toLowerCase() ? true : false;
  }
  feedBack() {
    return this.checkGuess() ? "Correct!" : "Incorrect";
  }
}

export default Guess;
