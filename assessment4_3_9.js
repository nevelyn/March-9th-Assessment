/*4. Functions

Make a small game called ZooKeeper that allows the user to play "Keeper" to a zoo animal of your choice. 
The user should be prompted to name the animal. There should be at least (4) actions 
which the user can take (e.g., FeedAnimal()). When the user takes an action, 
the program should display a result including the animal's name 
(e.g., "Flipper the dolphin was happy you gave it a fish, so it did a backflip!"). 
The game should continue until the user chooses to quit.

BONUS: Implement a scoring system. The user should gain or lose a random 
number of points for each action, and the final score should be displayed when the user quits.
*/
var sget=require('sget');
var animal=['Lion', 'Bear', 'Monkey', 'Flamingo'];
var keepersAnimal=animal[Math.floor(Math.random() * animal.length)]

start();

function start(){
	console.log("Welcome to ZooKeeper!");
	assignAnimal();
}
function assignAnimal(){
	var keeper= sget("Please enter your name.");
	console.log(keeper + "You have been assigned a " + keepersAnimal + ".");
	var namedAnimal=sget("Please enter your " + keepersAnimal + "'s name.");
	keeperChoice();
}
function keeperChoice(namedAnimal){
	console.log("What would you like to do with " + namedAnimal + "today? \n1. Feed" + namedAnimal+ "? \n2. Wash" + namedAnimal+ "?\n3. Groom" + namedAnimal+ "?\n4. Pet" + namedAnimal+ "?");
	switch(namedAnimal){
		case "1":
		console.log(namedAnimal + " has been fed!");
		break;

		case "2":
		console.log(namedAnimal + " has been washed!");
		break;

		case "3":
		console.log(namedAnimal + " has been groomed!");
		break;

		case "4":
		console.log(namedAnimal + " has been petted!");
		break;
	}
}
