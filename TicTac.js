
// Restart Game button
var restart = document.querySelector("#btn");


// Get all squares
var squares = document.querySelectorAll('td');



var one = document.getElementById('One');
var two = document.getElementById('Two');
var three = document.getElementById('Three');
var four = document.getElementById('Four');
var five = document.getElementById('Five');
var six = document.getElementById('Six');
var seven = document.getElementById('Seven');
var eight = document.getElementById('Eight');
var nine = document.getElementById('Nine');


// for one
one.addEventListener('click', function (){
  one.textContent = "X";
  one.style.color = 'black';
})
one.addEventListener('dblclick', function(){
  one.textContent = "O";
  one.style.color = 'black';
})
// end of one

// for two
two.addEventListener('click', function (){
  two.textContent = "X";
  two.style.color = 'black';
})
two.addEventListener('dblclick', function(){
  two.textContent = "O";
  two.style.color = 'black';
})
// end of two

// for three
three.addEventListener('click', function (){
  three.textContent = "X";
  three.style.color = 'black';
})
three.addEventListener('dblclick', function(){
  three.textContent = "O";
  three.style.color = 'black';
})
// end of three

// for four
four.addEventListener('click', function (){
  four.textContent = "X";
  four.style.color = 'black';
})
four.addEventListener('dblclick', function(){
  four.textContent = "O";
  four.style.color = 'black';
})
// end of four

// for five
five.addEventListener('click', function (){
  five.textContent = "X";
  five.style.color = 'black';
})
five.addEventListener('dblclick', function(){
  five.textContent = "O";
  five.style.color = 'black';
})
// end of five

// for six
six.addEventListener('click', function (){
  six.textContent = "X";
  six.style.color = 'black';
})
six.addEventListener('dblclick', function(){
  six.textContent = "O";
  six.style.color = 'black';
})
// end of six

// for seven
seven.addEventListener('click', function (){
  seven.textContent = "X";
  seven.style.color = 'black';
})
seven.addEventListener('dblclick', function(){
  seven.textContent = "O";
  seven.style.color = 'black';
})
// end of seven

// for eight
eight.addEventListener('click', function (){
  eight.textContent = "X";
  eight.style.color = 'black';
})
eight.addEventListener('dblclick', function(){
  eight.textContent = "O";
  eight.style.color = 'black';
})
// end of eight

// for nine
nine.addEventListener('click', function (){
  nine.textContent = "X";
  nine.style.color = 'black';
})
nine.addEventListener('dblclick', function(){
  nine.textContent = "O";
  nine.style.color = 'black';
})
// end of nine



// Clear all the squares
function clear() {
  for (var i = 0; i < squares.length; i++){
    squares[i].textContent= "";
  }
}
restart.addEventListener('click', clear);
