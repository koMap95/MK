let player1 = {
  name : "Scorpion",
  hp : 70,
  img : "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
  weapon : ["stinger"],
  attack : function () {
    console.log(player1.name + ' - fight...');
  }
};
let player2 = {
  name : "Sonya",
  hp : 90,
  img : "http://reactmarathon-api.herokuapp.com/assets/sonya.gif",
  weapon : ["arms"],
  attack : function () {
    console.log(player2.name + ' Fight...');
  }
};
// console.log(player2.attack());
function createPlayer (playerClass, fighter) {
  const $arena = document.querySelector('.arenas');
  const $player = document.createElement('div');
  $player.classList.add(playerClass);
  //   1st level div
  const $progressBar = document.createElement('div');
  $progressBar.classList.add('progressbar');
  //   2nd level div.
  const $life = document.createElement('div');
  $life.classList.add('life');
  $life.style.width = fighter.hp + '%';
  const $name = document.createElement('div');
  $name.classList.add('name');
  $name.innerText = fighter.name;
  //   3d level 2*div
  const $character = document.createElement('div');
  $character.classList.add('character');
  //   2nd level div
  const $img = document.createElement('img');
  $img.classList.add('img');
  //   $img.src= 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif';
  $img.src = fighter.img;
  //   3d level div src
  $arena.appendChild($player);
  $player.appendChild($progressBar);
  $player.appendChild($character);
  $progressBar.appendChild($life);
  $progressBar.appendChild($name);
  $character.appendChild($img);
}
createPlayer("player1", player1);
createPlayer("player2", player2);
// createPlayer();
