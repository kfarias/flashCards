import Card from '../scripts/card';

class CardGenerator {
  constructor(fileName){
    this.fileName = fileName;
    this.cards = this.readCards(fileName)
  }
  readCards(){
    var fs = require('fs');
    let lines = fs.readFileSync(this.fileName, 'utf8').split("\n").filter(line => { return line.length != 0 })
      return lines.map(e => {
    let splitLines = e.split(',')
      return new Card({question:splitLines[0], answer:splitLines[1]})
    })
  }
}

export default CardGenerator;
