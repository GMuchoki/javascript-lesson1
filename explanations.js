                           // VARIABLES

//1. String
var favColor = 'red';

//2. Array/List
var myFavColors = ['red', 'blue', 'green'];

//3. Numbers
var numOfFavColors = 3;

//4. Boolean
var hasGotFavColors = true;

//5. Object
var richObject = {
    firstName: 'Rich',
    lastName: 'Armstrong',
    favColors: ['red', 'blue', 'green'],
    yearsAlive: 103, 
    isMale: true
};

richObject.isMale // → This is a boolean property (true or false)



                           //METHOD
//1. A method is when you assign a function as a property inside an object.
var richObject = {
    firstName: 'Rich',
    lastName: 'Armstrong',
    favColors: ['red', 'blue', 'green'],
    yearsAlive: 103, 
    isMale: true,
    
    introduce: function () {
        console.log("Hi, I'm " + this.firstName + " " + this.lastName + 
                    " and I'm " + this.yearsAlive + " years old.");
    }
};

// Calling the method
richObject.introduce();    // ✅ This is a method call



                                    //  FUNCTION
//1
function whatIsMyFavColor () {
    // code here
}

//2
var whatIsMyFavColor = function () {
    return 'red';
}

//3
var doSomething = function () {
    console.log("do something!!");
}

//4. Let’s create a variable called area and store a function inside it.
var area = function (width, height) {                                                       //width and height are called parameters.
    return width * height;
}

area(5, 4);                                                                                //5 and 4 are arguments passed to the parameters width and height.

//5
var fullname = function (firstname, secondname) {
    return firstname + ' ' + secondname;
}


                                                           //The If-else statement
//An if statement checks a condition, and if that condition is true, it runs the code inside the block {}.

//Basic Structure:
if (condition) {
    // code runs if condition is true
}

//Example
var age = 20;

if (age >= 18) {
    console.log("You're an adult!");
}

//else
//If the condition is not true, run some other code.
var age = 16;

if (age >= 18) {
    console.log("You're an adult!");
} else {
    console.log("You're not an adult.");
}

//else if
//To check multiple conditions:
var score = 75;

if (score >= 90) {
    console.log("A grade");
} else if (score >= 80) {
    console.log("B grade");
} else if (score >= 70) {
    console.log("C grade");
} else {
    console.log("You need to improve");
}

// Example with multiple conditions:
var isMale = true;
var age = 25;

if (isMale && age >= 18) {
    console.log("You're a grown man.");
}

//
var name = "Alex";

if (name === "Alex") {
    console.log("Welcome, Alex!");
} else {
    console.log("I don't know you.");
}
