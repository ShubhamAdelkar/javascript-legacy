function addScore(players) {
  const updatedPlayers = players.map(function (player, i) {
    if (i < 3) {
      return {
        id: player.id,
        score: player.score + 10,
      };
    } else {
      return player;
    }
  });
  return updatedPlayers;
}

const originalPlayers = [
  { id: 0, score: 5 },
  { id: 1, score: 20 },
];

addScore(originalPlayers);
module.exports = addScore;
