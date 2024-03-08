// mapping score over objects
function addScore(players) {
  const updatedPlayers = players.map((player) => ({
    id: player.id,
    score: player.score + 10,
  }));
  return updatedPlayers;
}

const originalPlayers = [
  { id: 0, score: 5 },
  { id: 1, score: 20 },
];

console.table(addScore(originalPlayers));

export default addScore;
