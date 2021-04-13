const $arena = document.querySelector('.arenas');
const $randomButton = document.querySelector('.button');
const $winTitle = createElement('div', 'loseTitle')
let player1 = {
  player: 1,
  name: "Scorpion",
  hp: 100,
  img: "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
  weapon: ["stinger"],
  attack: function () {
    console.log(player1.name + ' - fight...');
  }
};
let player2 = {
  player: 2,
  name: "Sonya",
  hp: 100,
  img: "http://reactmarathon-api.herokuapp.com/assets/sonya.gif",
  weapon: ["arms"],
  attack: function () {
    console.log(player2.name + ' Fight...');
  }
};

function createElement(tag, className) {
  const $tag = document.createElement(tag);
  if (className) {
    $tag.classList.add(className);
  }

  return $tag;
}

function createPlayer(fighter) {

  const $player = createElement('div', 'player' + fighter.player);
  //   1st level div
  const $progressBar = createElement('div', 'progressbar');
  //   2nd level div.
  const $life = createElement('div', 'life');
  $life.style.width = fighter.hp + '%';
  const $name = createElement('div', 'name');
  $name.innerText = fighter.name;
  //   3d level 2*div
  const $character = createElement('div', 'character');
  //   2nd level div
  const $img = createElement('img');
  $img.src = fighter.img;
  //   3d level div src
  $player.appendChild($progressBar);
  $player.appendChild($character);
  $progressBar.appendChild($life);
  $progressBar.appendChild($name);
  $character.appendChild($img);
  return $player;
}


function changeHp(fighter) {
  const $playerLife = document.querySelector('.player' + fighter.player + ' .life');
  // fighter.hp -= Math.ceil(Math.random());
  fighter.hp -= Math.ceil(Math.random() * 20);
  $playerLife.style.width = fighter.hp + '%';

  if (fighter.hp <= 0) {
    $arena.appendChild(playerWin(fighter.name));
    $playerLife.style.width = 0 + '%';
  }

  console.log($playerLife);
}

function playerWin(name) {

  $winTitle.innerText = name + ' lose';

  if ($winTitle) {
    $randomButton.style.display = "none";
    // $randomButton.disabled = true;
  }
  return $winTitle;
}

$randomButton.addEventListener('click', function () {

  changeHp(player1);
  changeHp(player2);
});

$arena.appendChild(createPlayer(player1));
$arena.appendChild(createPlayer(player2));