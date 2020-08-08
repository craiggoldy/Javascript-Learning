/*******************************
* Variables and data types
*/
/*
var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = "Teacher";
console.log(job);

// Variable naming rules
var _3years = 3;
var johnMark = 'John and Mark':
var if = 23;
*/


/********************************
* Variable mutation and type coercion
*/

/*
var firstName = 'John';
var age = 28;

// Type Coercion
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'Teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// Variable mutation
age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName);
*/



/********************************
* Basic operators
*/
/*
var year, yearJohn, yearMark;
now = 2018;
ageJohn = 28;
ageMark = 33;

// Math operators
yearJohn = now - ageJohn;
yearMark = now - ageMark;

console.log(yearJohn);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);


// Logical operators
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);


// typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older than John');
var x;
console.log(typeof x);
*/



/********************************
* Operator Precedence
*/
/*
var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

// Multiple operators
var isFullAge = now - yearJohn >= fullAge; // true
console.log(isFullAge);

//Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var averageAge = (ageJohn + ageMark) / 2;
console.log(averageAge);

// Multiple assignments
var x, y;
x = y = (3+5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
console.log(x, y);


// More operators
x *= 2;                     // x = x * 2
console.log(x);
x += 10;                   // x = x + 10
console.log(x);
x--;
console.log(x);
*/



/**********************************
*   CODING CHALLENGE 1
*/

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information abouth weather Mark has a higher BMI than John
4. Print a string to the console containing the variable from Step 3. (Something like "Is Mark's BMI higher than John's? true").

GOOD LUCK :)
*/
/*
var massMark, massJohn, heightMark, heightJohn, BMIMark, BMIJohn, biggerBMI;

massJohn = 92;
heightJohn = 1.95;
massMark = 78;
heightMark = 1.69;

BMIJohn = massJohn / (heightJohn * heightJohn);
BMIMark = massMark / (heightMark * heightMark);
markHigherBMI = BMIMark > BMIJohn;

console.log('Mark\'s BMI = ' + BMIMark);
console.log('John\'s BMI = ' + BMIJohn);
console.log('Is Mark\'s BMI higher than John\'s? ' + markHigherBMI);
*/

/******************************************
* If / Else statements
*/
/*
var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married'){
    console.log(firstName + ' is married');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}


var isMarried = true;
if (isMarried){
    console.log(firstName + ' is married');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}


var massJohn = 120;
var heightJohn = 1.95;

var massMark = 78;
var heightMark = 1.69;

var BMIJohn = massJohn / (heightJohn * heightJohn);
var BMIMark = massMark / (heightMark * heightMark);

if(BMIMark > BMIJohn){
    console.log('Mark\'s BMI is higher than John\'s');
} else {
        console.log('John\s BMI is higher than Marks\'s');
}
*/


/*********************************************
* Boolean logic
*/
/*
var firstName = 'John';
var age = 20;

if (age< 13 ){
    console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20) { //between 13 and 20 === age >= 13 AND age < 20
    console.log(firstName + ' is a teenager.');
} else if (age >= 20 && age < 30){
    console.log(firstName + ' is a young man.');       
} else {
    console.log(firstName + ' is a man.');
}
*/



/******************************************************
* The Ternary Operator and Switch Statements
*/
/*
var firstName = 'John';
var age = 16;

// Ternary operator
age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(firstName + ' can drink ' + drink);
*/
/*if (age >= 18){
    var drink = 'beer';
} else {
    var drink = 'juice'
}*/

// Switch Statement
/*
var job = 'instructor';
switch (job) {
    case 'teacher' : 
    case 'instructor' :
        console.log(firstName + ' teaches kids how to code');
        break;
    case 'driver' :
        console.log(firstName + ' drives an uber in Lisbon');
        break;
    case 'designer' :
        console.log(firstName + ' designs beautiful websites');
        break;
    default:
        console.log(firstName + ' does something else');
}

age = 35;
switch (true) {
    case age < 13:
        console.log(firstName + ' is a boy');
        break;
    case age >= 13 && age < 20 :
        console.log(firstName + ' is a teenager');
        break;
    case age >= 20 && age < 30 :
        console.log(firstName + ' is a young man');
        break;
    default :
        console.log(firstName + ' is a man');
        break;
}
*/

/*************************************************************
* Truthy and Falsy values and equality operators
*/

// falsy values: undefined, null, 0, '', NaN
// Truthy values: NOT falsy - true when put through an if/else statement
/*
var height;
height = 23;

if (height || height === 0) {
    console.log('Variable is defined');
} else {
    console.log('Variable has NOT been defined');
}

// Equality operators
if (height === '23') {
    console.log('The == operator does type coercion!');
}
*/



/************************************************
* CODING CHALLENGE 2
*/
/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins the average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average).

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you cant solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

GOOD LUCK :)
*/
/*
var teamJohnGame1 = 89;
var teamJohnGame2 = 120;
var teamJohnGame3 = 103;
var teamMikeGame1 = 116;
var teamMikeGame2 = 94;
var teamMikeGame3 = 123;

var teamJohnAverage = (teamJohnGame1 + teamJohnGame2 + teamJohnGame3)/3;
var teamMikeAverage = (teamMikeGame1 + teamMikeGame2 + teamMikeGame3)/3;

switch (true) {
    case teamJohnAverage > teamMikeAverage:
        console.log('John\'s team has the higher average with ' + teamJohnAverage + ' points');
                    break;
    case teamMikeAverage > teamJohnAverage:
        console.log('Mikes\'s team has the higher average with ' + teamMikeAverage + ' points');
                    break;
    default :
        console.log('Both teams have the same average with ' + teamMikeAverage + ' points');                 
}
// EXTRA

var teamMaryGame1 = 97;
var teamMaryGame2 = 134;
var teamMaryGame3 = 105;

var teamMaryAverage = (teamMaryGame1 + teamMaryGame2 + teamMaryGame3)/3;

switch (true) {
    case teamJohnAverage > teamMikeAverage && teamJohnAverage > teamMaryAverage:
        console.log('John\'s team has the highest average with ' + teamJohnAverage + ' points');
                    break;
    case teamMikeAverage > teamJohnAverage && teamMikeAverage > teamMaryAverage:
        console.log('Mikes\'s team has the highest average with ' + teamMikeAverage + ' points');
                    break;
    case teamMaryAverage > teamJohnAverage && teamMaryAverage > teamMikeAverage:
        console.log('Mary\'s team has the highest average with ' + teamMaryAverage + ' points');
                    break;    
    default :
        console.log('All teams have the same average with ' + teamMikeAverage + ' points');                 
}*/

/*********************************************************
* Functions
*/
/*
function calculateAge(birthYear) {
    return 2018 - birthYear;
}
var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);
console.log(ageJohn, ageMike, ageJane);

function yearsToRetire(year, firstName){
    var age = calculateAge(year);
    var retirement = 65 - age;
    if (retirement > 0){
        console.log(firstName + ' retires in ' + retirement + ' years.');
        } else {
    console.log(firstName + ' is already retired.');
    }
}
yearsToRetire(1990, 'John');
yearsToRetire(1948, 'Mike');
yearsToRetire(1969, 'Jane');
*/
/**********************************************************
* Function Statements and Expressions
*/
// Function Declaration
// function whatDoYouDo(job, firstName){}

// Function Expression
/*
 var whatDoYouDo = function(job, firstName){
    switch(job) {
        case 'teacher':
            return firstName + ' teaches kids how to code';
        case 'driver':
            return firstName + ' drives a cab in Lisbon';
        case 'designer':
            return firstName + ' designs beautiful websites';
        default: 
            return firstName + ' does something else';
    }
 }
console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('designer', 'Jane'));
console.log(whatDoYouDo('retired', 'Mark'));
*/
/*************************************************************
* Arrays
*/
// Initialise new array
/*var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

console.log(names[2]);
console.log(names.length);

// Mutate array data
names[1] = 'Ben';
names[names.length] = 'Mary';
console.log(names);

// Different data types
var John = ['John', 'Smith', 1990, 'designer', false];

John.push('blue'); // adds element to end of array
John.unshift('Mr.'); // adds element to beginning or array
console.log(John);

John.pop(); // removes last element in array
John.pop();
John.shift(); // removes first element in array
console.log(John);

console.log(John.indexOf(23)); // returns position of element in array or '-1' if not found in array


var isDesigner = John.indexOf('designer') === -1 ? 'John is not a designer' : 'John is a designer';
console.log(isDesigner);
*/


/*****************************************
* CODING CHALLENGE 3
*/

/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less that $50, 15% when the bill is between %50 and $200, and 10% if the bill is more than $200. 

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).

(NOTE: To calculate 20% of a value, simply multiply if with 20/100 = 0.2)

GOOD LUCK :)
*/
/*
function getTip(amount){
    var tip;
    if(amount < 50){
        tip = amount * .2;
    } else if(amount >= 50 && amount < 200){
        tip = amount * .15;
    } else {
        tip = amount * .1;
    } return tip;
}

var bills = [124, 48, 268];
var tips = [getTip(bills[0]), 
            getTip(bills[1]),
            getTip(bills[2])];

var totals = [bills[0] + tips[0], // can also use push() to add function to array for each bill
              bills[1] + tips[1],
              bills[2] + tips[2]];

console.log(tips);
console.log(totals);
*/



/************************************************************************
* Objects and properties
*/

// Object literal
/*
var john = {
    firstName: 'John',
    lastName: 'Smith', 
    birthYear: 1990, 
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false    
};

console.log(john.firstName);
console.log(john['lastName']);
var x = 'birthYear';
console.log(john[x]);

john.job = 'designer';
john['isMarried'] = true;
console.log(john);

//new object syntax
var jane = new Object();
jane.firstName = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
console.log(jane);
*/


/************************************************************************
* Objects and Methods
*/
/*
var john = {
    firstName: 'John',
    lastName: 'Smith', 
    birthYear: 1992, 
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function() {                                    // Method is a functino inside an object
        this.age = 2018 - this.birthYear;
    }
};

john.calcAge();
console.log(john);
*/



/************************************************************************
* CODING CHALLENGE 4
*/

/*
Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods. 
1. For each of them, create an object with properties for their full name, mass, and height. 
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Dont forget they might have the same BMI.

Remember: BMI = mass / height^2 = mass / (height 8 height). (mass in kg and height in meter)

GOOD LUCK :)
*/

/*
var john = {
    fullName: 'John Smith', 
    mass: 92, 
    height: 1.95,
    calcBMI: function(){
        this.BMI = this.mass / (this.height * this.height);
        return this.BMI;
    }
}
var mark = {
    fullName: 'Mark Miller', 
    mass: 78, 
    height: 1.69,
    calcBMI: function(){
        this.BMI = this.mass / (this.height * this.height);
        return this.BMI;
    }
}

if(john.calcBMI() > mark.calcBMI()){
    console.log(john.fullName + ' has a higher BMI of ' + john.BMI);
} else if(mark.BMI > john.BMI){
    console.log(mark.fullName + ' has a higher BMI of ' + mark.BMI);
} else {
    console.log('They have the same BMI of ' + mark.BMI);
}
*/



/*******************************************************
* Loops and Iteration
*/

// For loop
/*
for (var i = 1; i <= 20; i += 2){
    console.log(i);
}

var john = ['John', 'Smith', 1990, 'designer', false];

for (var i = 0; i < john.length; i++){
    console.log(john[i]);
}

// While Loop
var i = 0;
while (i < john.length) {
    console.log(john[i]);
    i++;
}
*/


// Continue and break statements
/*
var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];

for (var i = 0; i < john.length; i++){
    if (typeof john[i] !== 'string') continue;
    console.log(john[i]);
}


for (var i = 0; i < john.length; i++){
    if (typeof john[i] !== 'string') break;
    console.log(john[i]);
}

// Looping backwards
for (i = john.length-1; i >= 0; i--){
    console.log(john[i]);   
}
*/

/*********************************************************************
* CODING CHALLENGE 5
*/

/*
Remember the tip calculator challenge? Let's create a more advanced version  using everything we learned!

This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180,  and $42.
John likes to 20% of the bill when the bill is less that $50, 15% when the bill is between %50 and $200, and 10% if the bill is more than $200.

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip.
3. This method should include a loop to iterate over all the paid bills and do the tip calculation.
4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip). HINT: Start with two empty arrays [] as properties and then fill them up in the loop.

EXTRA AFTER FINISHING: Mark's family also went on holiday, going to 4 different restaurants. The bills were $77, $375, $110 and $45. 
Mark like to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, and 25% if the bill is more than $300 (Different than John)

5. Implement the same functionality as before, this time using Mar's tipping rules. 
6. Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the array, and in each itteration stor the current sum in a variable (starting from 0). After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)
7. Calculate the averge tip for each family
8. Log to the console which family paid the highest tips on average

GOOD LUCK :)
*/
/*
var john = {
    fullName: 'John Smith',
    bills: [124, 48, 268, 180, 42],
    calcTips: function() {
        this.tips = [];
        this.finalValues = [];
        
        for (var i = 0; i < this.bills.length; i++) {
            // determine percentage based on tipping rules
            var percentage;
            var bill = this.bills[i];
            
            if (bill < 50) {
                percentage = .2;
            } else if (bill >= 50 && bill < 200) {
                percentage = .15;
            } else {
                percentage = .1;
            }
                          
            // add results to corresponding arrays
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill * (1+percentage);
        } 
    }
}

var mark = {
    fullName: 'Mark Miller',
    bills: [77, 5, 110, 45],
    calcTips: function(){
       this.tips = [];
        this.finalValues = [];
        
        for (var i = 0; i < this.bills.length; i++) {
            // determine percentage based on tipping rules
            var percentage;
            var bill = this.bills[i];
            
            if (bill < 100) {
                percentage = .2;
            } else if (bill >= 100 && bill < 300) {
                percentage = .10;
            } else {
                percentage = .25;
            }
                          
            // add results to corresponding arrays
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill * (1+percentage);
        }  
    }
}

function calcAverage(tips){
    var sumOfTips = 0;
    for (var i = 0; i < tips.length ; i++) {
        sumOfTips += tips[i];
    }
    return sumOfTips / tips.length;
}

john.calcTips();
console.log(john);
mark.calcTips();
console.log(mark);

john.average = calcAverage(john.tips);
mark.average = calcAverage(mark.tips);

if(john.average > mark.average) {
    console.log(john.fullName + ' tips more than ' + mark.fullName + ', with an average of $' + john.average)
} else if (mark.average > john.average) {
    console.log(mark.fullName + ' tips more than ' + john.fullName + ', with an average of $' + mark.average)
} else {
    console.log('They tip the same!');
}
*/



/******************************************************************************
*/




































































