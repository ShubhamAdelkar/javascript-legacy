function addScore(players) {
  const updatedPlayers = players.map((player, i) => {
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
  { id: 1, score: 70 },
  { id: 2, score: 0 },
  { id: 3, score: 20 },
  { id: 4, score: 30 },
  { id: 5, score: 40 },
];

console.table(addScore(originalPlayers));
export default addScore;
