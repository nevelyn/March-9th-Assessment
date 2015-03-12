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
var namedAnimal=sget("Please enter your " + keepersAnimal + "'s name.").trim();
keeperChoice();

function start(){
	console.log("Welcome to ZooKeeper!");
	assignAnimal();
}
function assignAnimal(){
	var keeper= sget("Please enter your name.").trim();
	console.log("Hi " + keeper + " you have been assigned a " + keepersAnimal + ".");
}
function endGame(keeper){
	console.log("Congratulations " + keeper + " you've spent some quality time with your " + keepersAnimal + " " + namedAnimal + ".");
	}

function keeperChoice(){
	var activity=sget("What would you like to do with " + namedAnimal + "\n1. Feed " + namedAnimal+ "? \n2. Wash " + namedAnimal+ "?\n3. Groom " + namedAnimal+ "?\n4. Pet " + namedAnimal+ "?\n5. Quit").trim();
	switch(activity){
		case "1":
			console.log(namedAnimal + " has been fed!");
			keeperChoice();
			break;

		case "2":
			console.log("Great job! "+ namedAnimal + " is clean as a whistle!");
			keeperChoice();
			break;

		case "3":
			console.log("Congratulations! " + namedAnimal + " is looking like a million bucks!");
			keeperChoice();
			break;

		case "4":
			console.log(namedAnimal + " loves to be petted by you!");
			keeperChoice();
			break;

		case "5":
			endGame();
			break;

		default:
			console.log("Invalid input! Please choose " + namedAnimal + " is waiting!");
			keeperChoice();
			break;
	}

}
