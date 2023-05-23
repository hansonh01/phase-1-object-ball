function gameObject() {
    return {
      home: {
        teamName: "Brooklyn Nets",
        colors: ["Black", "White"],
        players: {
          "Alan Anderson": {
            number: 0,
            shoe: 16,
            points: 22,
            rebounds: 12,
            assists: 12,
            steals: 3,
            blocks: 1,
            slamDunks: 1
          },
          "Reggie Evans": {
            number: 30,
            shoe: 14,
            points: 12,
            rebounds: 12,
            assists: 12,
            steals: 12,
            blocks: 12,
            slamDunks: 7
          },
          "Brook Lopez": {
            number: 11,
            shoe: 17,
            points: 17,
            rebounds: 19,
            assists: 10,
            steals: 3,
            blocks: 1,
            slamDunks: 15
          },
          "Mason Plumlee": {
            number: 1,
            shoe: 19,
            points: 26,
            rebounds: 12,
            assists: 6,
            steals: 3,
            blocks: 8,
            slamDunks: 5
          },
          "Jason Terry": {
            number: 31,
            shoe: 15,
            points: 19,
            rebounds: 2,
            assists: 2,
            steals: 4,
            blocks: 11,
            slamDunks: 1
          }
        }
      },
      away: {
        teamName: "Charlotte Hornets",
        colors: ["Turquosie", "Purple"],
        players: {
          "Jeff Adrien": {
            number: 4,
            shoe: 18,
            points: 10,
            rebounds: 1,
            assists: 1,
            steals: 2,
            blocks: 7,
            slamDunks: 2
          },
          "Bismak Biyombo": {
            number: 0,
            shoe: 16,
            points: 12,
            rebounds: 4,
            assists: 7,
            steals: 7,
            blocks: 15,
            slamDunks: 10
          },
          "Desagna Diop": {
            number: 2,
            shoe: 14,
            points: 24,
            rebounds: 12,
            assists: 12,
            steals: 4,
            blocks: 5,
            slamDunks: 5
          },
          "Ben Gordon": {
            number: 8,
            shoe: 15,
            points: 33,
            rebounds: 3,
            assists: 2,
            steals: 1,
            blocks: 1,
            slamDunks: 0
          },
          "Brendan Haywood": {
            number: 33,
            shoe: 15,
            points: 6,
            rebounds: 12,
            assists: 12,
            steals: 22,
            blocks: 5,
            slamDunks: 12
          },
        }
      }
    }
}
const gameStats = gameObject();
const twoTeams = [gameStats.home, gameStats.away];
//Helper function to grab different stats more easily
function getPlayerInfo(playerName, data) {
  for (let i = 0; i < twoTeams.length; i++) {
    const ballPlayers = twoTeams[i].players;
    for (let player in ballPlayers) {
      if (player === playerName) {
        return ballPlayers[player][data]
      }
    }
  }
  return "Player not found";
}
//Function to call from getPlayerInfo for player's Points
function numPointsScored(playerName) {
  return getPlayerInfo(playerName, "points");
}
//Function to call from getPlayerInfo for player's Shoe Size
function shoeSize(playerName) {
  return getPlayerInfo(playerName, "shoe");
}
//Function takes in team name and return an array of that team colors.
function teamColors(differentTeams) {
  for (let i = 0; i < twoTeams.length; i++) {
    if (differentTeams === twoTeams[i].teamName) {
      return twoTeams[i].colors;
    }
  }
  return "No team found";
}
//Function operates on game object to return an array of team names in this game.
function teamName() {
  const basketballTeams = twoTeams.map((twoTeams) => twoTeams.teamName);
  return basketballTeams;
}
//Function to take in team name and return an array of Jersey Numbers for that team.
function playerNumbers(teamNames) {
  for (let i = 0; i < twoTeams.length; i++) {
    if (twoTeams[i].teamName === teamNames) {
      const ballPlayers = twoTeams[i].players;
      const jerseyNumbers = Object.values(ballPlayers).map((players) => players.number);
      return jerseyNumbers;
    }
  }
}
//Function takes player's name and return an object of that player's stats
function playerStats(playerName) {
  for (let i = 0; i < twoTeams.length; i++) {
    const ballPlayers = twoTeams[i].players;
    for (let player in ballPlayers) {
      if (player === playerName) {
        return ballPlayers[player];
      }
    }
  }
  return "No Player Found";
}
//Function returning the number of rebounds associate with player that has the largest shoe size.
function bigShoeRebounds() {
  let largestPlayer = null;
  let largestShoe = 0;
  for (let i = 0; i < twoTeams.length; i++) {
    const ballPlayers = twoTeams[i].players;
    for (let player in ballPlayers) {
      const shoeSizes = ballPlayers[player].shoe;
      if (shoeSizes > largestShoe) {
        largestShoe = shoeSizes;
        largestPlayer = player;
      }
    }
  }
  if (largestPlayer) {
    return gameStats.home.players[largestPlayer].rebounds || gameStats.away.players[largestPlayer].rebounds;
  }
  return "No player found";
}
//Function returning player with the most points
function mostPointsScored() {
  let mostPointsScoredBy = null;
  let mostPoints = 0;
  for (let i = 0; i < twoTeams.length; i++) {
    const ballPlayers = twoTeams[i].players;
    for (let player in ballPlayers) {
      const allPoints = ballPlayers[player].points;
      if (allPoints > mostPoints) {
        mostPoints = allPoints;
        mostPointsScoredBy = player;
      }
    }
  }
  return (`Most points ${mostPointsScoredBy}, scored by ${mostPoints}`);
}
//Function returning which team has the most points
function winningTeam() {
  let homePoints = 0;
  let awayPoints = 0;
  let homePlayers = Object.values(gameStats.home.players);
  let awayPlayers = Object.values(gameStats.away.players);
  for (let i = 0; i < homePlayers.length; i++) {
    homePoints += homePlayers[i].points;
  }
  for (let i = 0; i < awayPlayers.length; i++) {
    awayPoints += awayPlayers[i].points;
  }
  if (homePoints > awayPoints) {
    return gameStats.home.teamName;
  } else if (awayPoints > homePoints) {
    return gameStats.away.teamName;
  } else {
    return "Tie";
  }
}
//Function returning player with longest name
function playerWithLongestName(){
    let longestName = null;
    let longestNameLength = 0;
    for(let i = 0; i < twoTeams.length; i++){
        const ballPlayers = twoTeams[i].players;
        for(let player in ballPlayers){
            const playerNames = player;
            const nameLength = playerNames.length;
            if(nameLength > longestNameLength){
                longestNameLength = nameLength;
                longestName = playerNames;
            }
        }
    }
    return longestName;
}
//Function returnins true if the player with longest name had most steals
function doesLongNameStealATon(){
    const longestNamePlayer = playerWithLongestName();
    let playerWithMostSteals = null;
    let mostSteals = 0;
    for(let i = 0; i<twoTeams.length;i++){
        const ballPlayers = twoTeams[i].players;
        for (let player in ballPlayers){
            const stealsValue = ballPlayers[player].steals;
            if(stealsValue>mostSteals){
                mostSteals = stealsValue;
                playerWithMostSteals = player;
            }
        }
    }
    if (playerWithMostSteals === longestNamePlayer){
        return `It's true ${longestNamePlayer}, with the longest name have the most steals with ${mostSteals} steals.`
    } else {
        `It's false ${longestNamePlayer} did not have most steals. ${playerWithMostSteals}, did with ${mostSteals} steals.`
    }
}

//Test codes
console.log(numPointsScored("Jeff Adrien"));
console.log(shoeSize("Reggie Evans"));
console.log(teamColors("Brooklyn Nets"));
console.log(teamName());
console.log(playerNumbers("Charlotte Hornets"));
console.log(playerStats("Brendan Haywood"));
console.log(bigShoeRebounds());
console.log(mostPointsScored());
console.log(`The winning team is ${winningTeam()}!`);
console.log(playerWithLongestName());
console.log(doesLongNameStealATon());