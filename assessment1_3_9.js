/*1. Input & Output, Control Flow
Create an interactive program which allows a user to enter (3) numbers,
determines the order of the numbers from largest to smallest, and displays the result.
*/

start();

var sget=require('sget');
var num1=Number(sget("Please enter your first number"));
var num2=Number(sget("Please enter your second number"));
var num3=Number(sget("Please enter your third number"));

function start(){
	console.log("Welcome! You will enter 3 numbers which will be displayed from largest to smallest")

}

function compareNumbers(){
	console.log(Math.max(num1,num2,num3));
}
compareNumbers();
