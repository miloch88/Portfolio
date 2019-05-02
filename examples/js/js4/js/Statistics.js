class Statistics {
  constructor() {
    this.gameResults = [];
  }

  addGameToStatistics(win, bid) {
    let gameResult = {
      win: win,
      bid: bid
    }
    this.gameResults.push(gameResult);
  }

  showGameStatistics() {
    let games = this.gameResults.length;
    let wins = this.gameResults.filter(reslult => reslult.win).length;
    let lost = games - wins;
    return [games, wins, lost]
  }

};