//Part 1
//Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
//Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
//Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
//Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
//Bonus: Round the result so there are only two digits after the decimal.

var squareNumber = function(number){
  var result = number * number;
  console.log(`The result of squaring the number ${number} is ${result}`);
}
var halfNumber = function(number){
  var result = number/2;
  console.log(`Half of ${number} is ${result}`)
}
var percentOf = function (firstNumber, secondNumber){
  var percentage = (secondNumber/firstNumber) *100;
  console.log(`${secondNumber} is ${percentage}% of ${firstNumber}`);
}
var areaOfCircle = function (radius){
  var area = +(radius * radius * Math.PI).toFixed(2);
  console.log (`The area for a circle with a radius of ${radius} is ${area}`)
}
squareNumber(4);
halfNumber(22);
percentOf(4,8);
areaOfCircle(9);

//Part 2
//Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:

//Take half of the number and store the result.
//Square the result of #1 and store that result.
//Calculate the area of a circle with the result of #2 as the radius.
//Calculate what percentage that area is of the squared result (#3).

var professorCalculator = function (number){
  var result = number/2;
  console.log(`Half of ${number} is ${result}.`);
  var resultTwo = result * result;
  console.log(`${number} multiplied by ${number} is ${resultTwo}`)
  var resultThree = +(resultTwo*resultTwo*Math.PI).toFixed(2);
  console.log (`Assuming ${resultTwo} is the radius of a circle, the area of the circle would be ${resultThree}`);
  var resultFour = +((resultTwo/resultThree)*100).toFixed(2);
  console.log(`${resultTwo} is ${resultFour}% of ${resultThree}`);
}
professorCalculator(6);
