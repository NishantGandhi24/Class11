var weight = [35,38,42,45,43,34,36,41,48,32];
var score = 0;
var average_weight = 0;

function setup() {
  createCanvas(400,400);
  console.log(weight);
  console.log("hey guys");

  for(var i=0;i<10;i++){
    score=score+weight[i];
  }
console.log(score);
average_weight = score/weight.length;
console.log(average_weight);
}
function draw() 
{
  background(30);
}

 

