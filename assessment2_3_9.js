/* 2. Control Flow, Logical Operators, String Handling

Create an interactive program which allows a user to create a password. 
If the password is at least 10 characters long AND contains at least (1) capital letter 
OR an exclamation point, display a confirmation message; otherwise, display an error.
*/
var sget=require('sget');
var password=sget('');

function start(){
	console.log("Please create a password that meets the following requirements\n1.Must be at least 10 characters long \n2. Must contain at least (1) capital letter -or- (1) exclamation point");
}
start();
function evaluatePassword(){
	
	if(password.length>=9 && password.indexOf(toUpperCase)|| password.indexOf('!') === 1){
		console.log("Success! Your password has been accepted!");

	}else if(password.indexOf(toUpperCase) || password.indexOf('!') === -1){
		console.log("Your password requires a capital letter or an exclamation point.");

	}else(password.length<9){
		console.log("Your is too short.");
	} 
}
evaluatePassword();