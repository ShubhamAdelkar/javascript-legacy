function playerHandScore(hand) {
  let totalscore = 0;
  for (let i = 0; i < hand.length; i++) {
    if (hand[i] == "K") {
      totalscore += 4;
    } else if (hand[i] == "Q") {
      totalscore += 3;
    } else if (hand[i] == "J") {
      totalscore += 2;
    } else {
      return ("Please enter valid hand");
    }
  }
  return totalscore;
}

console.log(playerHandScore("KJKKKK"));
