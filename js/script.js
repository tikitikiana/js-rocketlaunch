// hey this is a comment
/* hey this function 
changes the class name
from the id to the assigned class name
*/
var doCoolStuff = function () {
	var currentClassName = document.getElementById('cool').className;

	if (currentClassName == 'cool') {
		document.getElementById ('cool').className = 'cool red';

	} else {
		document.getElementById('cool').className = 'cool';

	}
}
var car = {
			make: 'VW',
			type: 'Polo',
			color: 'blue',
			isTurnedOn: false,
			numberOfWheels: 4,
			seats: [
				'seat 1', 
				'seat2', 
				'seat3', 
				'seat4'
				],
			turnOn: function () {
				this.isTurnedOn = true;
			},
			fly: function () {
				alert('fly');
			},
			switchCar: function (isOn) {
				console.log('turn car ' + isOn)
				if (isOn == true) {
					this.isTurnedOn = true;
				} else {
					this.isTurnedOn = false;
				}

			}
		};
 	console.log('hello there friends!');