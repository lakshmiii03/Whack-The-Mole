const scoreBoard = document.querySelector('.score');
const holes = document.querySelectorAll('.hole');
const moles = document.querySelectorAll('.mole');
var lastHole;
var timeUp = false;
var score = 0 ;

function randomTime(min,max){
return Math.round(Math.random() * (max-min)+min)
}

function randomHole(holes){
const index = Math.floor(Math.random()*holes.length);
const hole = holes[index]

if(hole ===lastHole){
 return randomHole(holes)
}
lastHole=hole;
return hole;
}

function upAndDown(){
const time = randomTime(1000,2000)
const hole = randomHole(holes)
hole.classList.add('up')
setTimeout(() => {
 hole.classList.remove('up')
 if (!timeUp){
  upAndDown();
 }
}, time);
}

function startGame(){
scoreBoard.textContent = 0;
timeUp = false;
score = 0;
upAndDown();
setTimeout(() => {
 timeUp = true
},30000);
}

moles.forEach(mole=>mole.addEventListener('click',hit))
function hit(e){
score++;
this.parentNode.classList.remove('up')
scoreBoard.textContent=score;
}