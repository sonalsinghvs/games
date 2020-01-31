
//objects in arrays (list of games)
const games = [
  { title: 'Tetris', numberOfPlayers: 1 , rating: 4 , shortDescription: 'Puzzle Video Game' },
  { title: 'Mario', numberOfPlayers: 2, rating: 5 , shortDescription: 'Adventure Game' },
  { title: 'Minecraft', numberOfPlayers: 1, rating: 4 , shortDescription: 'Mine blocks' }
];
//Ask the user to pick a number between 1 and 3
let randomIdx = prompt ('I have 3 games in my collection. Pick a number between 1 and 3 and I will tell you about that game');
if (randomIdx > 3) {
  window.alert('Please choose a number between 1 and 3');
} else {
  console.log('You selected' + ' ' + games[randomIdx - 1].title + ', ' + 'which is a' + ' ' + games[randomIdx - 1].shortDescription + ' ' + 'that has a rating of' + ' ' + games[randomIdx - 1].rating + ' ' + 'and that needs ' + ' ' + games[randomIdx -1].numberOfPlayers + ' ' + 'players' + '.');
  window.alert('You selected' + ' ' + games[randomIdx - 1].title + ', ' + 'which is a' + ' ' + games[randomIdx - 1].shortDescription + ' ' + 'that has a rating of' + ' ' + games[randomIdx - 1].rating + ' ' + 'and that needs ' + ' ' + games[randomIdx -1].numberOfPlayers + ' ' + 'players' + '.')
}
