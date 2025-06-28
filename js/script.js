// Create a car object with various properties and methods
var car = {
    make: 'Suzuki',                                       // Car brand
    type: 'ZC72S',                                        // Car model/type
    color: 'Pearl White',                                 // Car color
    year: 2015,                                           // Year of manufacture
    isTurnedOn: false,                                    // Whether the car is turned on or not
    numOfWheels: 4,                                       // Number of wheels
    seats: [
        'seat 1', 
        'seat 2', 
        'seat 3', 
        'seat 4'
    ],
    turnOn: function () {                                   // Method to turn the car on
        this.isTurnedOn = true;                            // Set isTurnedOn to true
    },
    acOff: function () {                                  // Method to simulate turning off the air conditioner
        alert('Ac Off')                                  // Show alert when AC is turned off
    },
    switchCar: function (isOn) {                        // Method to switch the car on or off
        console.log('turn car '+isOn);                 // Log the action being taken (true or false)
        if (isOn == true) {                           // Check if isOn is true
            this.isTurnedOn = true;                  // Turn the car on        
        } else {
            this.isTurnedOn = false;               // Turn the car off
        }
    }
};

