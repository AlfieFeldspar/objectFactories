const team = {
  _players: [
    {
      firstName: 'James',
      lastName: 'Harden',
      age: 28
    },
    {
      firstName: 'Linsey',
      lastName: 'Whalen',
      age: 31
    },
    {
      firstName: 'LaBron',
      lastName: 'James',
      age: 22
    }
  ],
  _games: [
    {
      opponent: 'Broncos',
      teamPoints: 42,
      opponentPoints: 27
    },
    {
      opponent: 'Browns',
      teamPoints: 22,
      opponentPoints: 82
    },
    {
      opponent: 'Dolphins',
      teamPoints: 7,
      opponentPoints: 3
    }
  ],
  get Players() {
    return this._players;
  },
  get Games() {
    return this._games;
  },
  addPlayer(first, last, age) {
    const player = {
      firstName: first,
      lastName: last,
      age: age
    };
    this.Players.push(player);
  },
  addGame(team, ourPts, theirPts) {
    const game = {
      opponent: team,
      teamPoints: ourPts,
      opponentPoints: theirPts
    };
    this.Games.push(game);
  }
};
team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);
console.log(team.Players);

team.addGame('Bills', 18, 12);
team.addGame('Chargers', 22, 48);
team.addGame('Lakers', 65, 101);
console.log(team.Games);