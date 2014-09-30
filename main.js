var box1 = document.getElementById('num_one')
var box2 = document.getElementById('num_two')
var answer = document.getElementById('answer')
var calculateBtn = document.getElementById('calculateBtn')
// var calculate = function() {box1 + box2};
var result;

calculateBtn.onclick = function() {
  result = parseInt(box1.value) + parseInt(box2.value);


  answer.innerHTML = result;
};
