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

start();

function start(){
	console.log("Welcome to ZooKeeper!");
	var keeper= sget('Please enter your name.');
	playGame();
}
function playGame(start){
	console.log(keeper + "You have been assigned a " + animal + ".");

	startGame();
}