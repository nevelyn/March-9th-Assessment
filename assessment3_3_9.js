/* 3. Arrays & Loops

Create an interactive program which allows a user to enter in the average temperature 
for (7) days. When the user has finished entering data, calculate the average temperature 
for the week and display the result.
*/

var sget=require("sget");
var sevenTemps = [];

function sevenAvgTemps (){
	
	for (var i = 0; i <7; i++){
		var temps = Number(sget("Please enter an average temperature.").trim());
		sevenTemps.push(temps);

	} console.log(sevenTemps);
}
function weeksAvg(){
	var sumSeven = 0;
	for (var i=0; i< sevenTemps.length; i++){
		sumSeven += sevenTemps[i];
	}
	var sevenAvgs = sumSeven / sevenTemps.length;
	console.log("The average temperature is " + sevenAvgs);
	
}
sevenAvgTemps();
weeksAvg();