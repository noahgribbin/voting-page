var twowrestlers = [];
var index;
var voted = false;

var Wrestler = function(src, pop){
  this.src = src;
  this.pop = pop
}

var wrestlers = [
  new Wrestler('img/batista.png',0),
  new Wrestler('img/cena.png',0),
  new Wrestler('img/iron-sheik.png',0),
  new Wrestler('img/lesnar.png',0),
  new Wrestler('img/macho-man.png',0),
  new Wrestler('img/mc-mahon.png',0),
  new Wrestler('img/mc-mahon2.png',0),
  new Wrestler('img/orton.png',0),
  new Wrestler('img/stone-cold.png',0),
  new Wrestler('img/tripple-h.png',0),
  new Wrestler('img/undertaker.png',0),
  new Wrestler('img/ventura.png',0)
]

function randomWrestler(){
  return Math.round(Math.random() * (wrestlers.length-1))
}

function getTwoWrestlers(){
  var a = randomWrestler();
  var b = randomWrestler();
  while (a == b){
    var b = randomWrestler();
  }
  return [a,b]
}

function putWrestler1(){
  var div = document.getElementById('img1');
  div.src = wrestlers[twowrestlers[0]].src;
  document.getElementById("pop1").innerHTML = wrestlers[twowrestlers[0]].pop
}
function putWrestler2(){
  var div = document.getElementById('img2');
  div.src = wrestlers[twowrestlers[1]].src;
  document.getElementById("pop2").innerHTML = wrestlers[twowrestlers[1]].pop
}
function hilight1() {
  document.getElementById("img2").style.borderColor = "black";
  document.getElementById("img1").style.borderColor = "yellow";
  index = twowrestlers[0]
  voted = true;
}
function hilight2() {
  document.getElementById("img1").style.borderColor = "black";
  document.getElementById("img2").style.borderColor = "yellow";
  index = twowrestlers[1]
  voted = true;
}

function vote(){
  if(voted){
    wrestlers[index].pop += 1;
  }
  voted = false;
}

function reset(){
  document.getElementById("img1").style.borderColor = "black";
  document.getElementById("img2").style.borderColor = "black";
  twowrestlers = getTwoWrestlers();
  putWrestler1();
  putWrestler2();
  vote();
}

reset();
