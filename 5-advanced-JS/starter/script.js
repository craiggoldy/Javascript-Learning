// Function constructor
/*
var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
};

var Person = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge = function() {
    console.log(2016 - this.yearOfBirth);
}

Person.prototype.lastName = 'Smith';

var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);
*/
/*
var Activity = function(date, name, type, distance, duration){
    this.date = date;
    this.name = name;
    this.type = type;
    this.distance = distance;
    this.duration = duration;
}

Activity.prototype.averagePace = function(){
    this.pace = this.duration / this.distance;
    console.log(this.pace + 'min per km');
}

Activity.prototype.endDate = function(){
    this.endDt = new Date(this.date.getTime() + this.duration*60000);
    console.log(this.endDt);
}

var cycle = new Activity(new Date(2020, 04, 27, 10, 01), 'Morning Ride', 'Ride', 40, 80);
cycle.endDate();
cycle.averagePace();

var run = new Activity(new Date(2020, 04, 25, 08, 00), 'Morning run', 'Run', 5, 27);
run.endDate();
run.averagePace();
*/

/////////////////////////////////////////////
// Object.create
/*
var personProto = {
    calculateAge: function() {
        console.log(2016 - this.yearOfBirth);
    }
};
var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

var jane = Object.create(personProto, {
    name: { value: 'Jane'},
    yearOfBirth: { value: 1969},
    job: { value: 'designer'}
});
*/
/*
// Primitives vs Objects

//Primitives
var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);

//Objects
var obj1 = {
    name: 'John',
    age: 26
};
var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);

//Functions
var age = 27;
var obj = {
    name: 'Jonas',
    city: 'Lisbon'
};
function change (a, b) {
    a = 30;
    b.city = 'San Francisco';
};
change(age, obj);
console.log(age);
console.log(obj.city);*/

////////////////////////////////////////////////////////////////
//Passing functions as arguments
/*
var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++){
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}
function calculateAge(el) {
    return 2016 - el;
}
function isFullAge(el) {
    return el >= 18;
}
function maxHeartRate (el) {
    if (el >= 18 && el <= 81){
        return Math.round(206.9 - 0.67 * el);
    } else {
        return -1;
    }
}

var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHeartRate);
console.log(ages);
console.log(fullAges);
console.log(rates);
*/
//////////////////////////////////////////////////////////////////////////////
// Functions returning functions
/*
function interviewQuestion (job) {
    if (job === 'designer') {
        return function(name) {
            console.log(name + ', can you please explain what UX design is?');
        }
    } else if (job === 'teacher') {
        return function (name) {
            console.log('What subject do you teach ' + name + '?');
        }
    } else {
        return function (name) {
            console.log('Hello ' + name + ' what do you do?');
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');

teacherQuestion('John');
designerQuestion('John');
designerQuestion('Jane');
designerQuestion('Mark');
designerQuestion('Mike');

interviewQuestion('teacher')("Mark");
*/
////////////////////////////////////////////////////////////////////////
// IIFE
/*
function game () {
    var score = Math.random() * 10;
    console.log(score >= 5);
}
game();
*//*
(function () {
    var score = Math.random() * 10;
    console.log(score >= 5); 
})();

//console.log(score);

(function (goodLuck) {
    var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck); 
})(5);
*/
////////////////////////////////////////////////////////////////////////////////////
// CLOSURES
/*
function retirement (retirementAge) {
    var a = ' years left until retirement.';
    return function (yearOfBirth) {
        var age = 2016 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIceLand = retirement(67);

retirementGermany(1990);
retirementUS(1990);
retirementIceLand(1990);
*/
//retirement(66)(1990);
/*
function interviewQuestion (job) {
    if (job === 'designer') {
        return function(name) {
            console.log(name + ', can you please explain what UX design is?');
        }
    } else if (job === 'teacher') {
        return function (name) {
            console.log('What subject do you teach ' + name + '?');
        }
    } else {
        return function (name) {
            console.log('Hello ' + name + ' what do you do?');
        }
    }
}*//*
function interviewQuestion (job) {
    return function (name) {
        if (job === 'designer') {
                console.log(name + ', can you please explain what UX design is?');
        } else if (job === 'teacher') {
                console.log('What subject do you teach ' + name + '?');
            } else {
                console.log('Hello ' + name + ', what do you do?');
            }
        }
}
interviewQuestion('designer')('Mark');
interviewQuestion('teacher')('Jane');
interviewQuestion('mechanic')('Mike');
*/
////////////////////////////////////////////////////////////////////////////
// Bind, call and apply
/*
var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function(style, timeOfDay){
        if (style === 'formal'){
            console.log('Good ' + timeOfDay + ', ladies and gentlemen! I\'m ' + this.name + ', I\'m a ' + this.job + ', and I\'m ' + this.age + ' years old.');
        } else if (style === 'friendly') {
            console.log('Hey! Whats\'s up? I\'m ' + this.name + ', I\'m a ' + this.job + ', and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
        }
    }
}
var emily = {
    name: 'Emily',
    age: 35, 
    job: 'designer',
}

john.presentation('formal', 'morning');
john.presentation.call(emily, 'friendly', 'afternoon');  //.call sets the 'this.' variable
//john.presentation.apply(emily, ['friendly', 'afternoon']);

var johnFriendly = john.presentation.bind(john, 'friendly');
johnFriendly('morning');
johnFriendly('night');
var emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('afternoon');
//////////////////////////
var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++){
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}
function calculateAge(el) {                                //Callback function
    return 2016 - el;
}
function isFullAge(limit, el) {
    return el >= limit;
}

var ages = arrayCalc(years, calculateAge);
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(fullJapan);
console.log(ages);
*/
////////////////////////////////////////////////////////////////////////
// CODING CHALLENGE
( function (){
  
    var Question = function(question, answers, correctAnswer){
        this.question = question;
        this.answers =  answers;
        this.correctAnswer = correctAnswer;
    }

    var question1, question2, question3, questions, score;

    question1 = new Question('What colour is the sky?', ['red', 'blue', 'green'], 1);
    question2 = new Question('What time is lunch?', ['12pm', '10am', '5pm'], 0);
    question3 = new Question('When will lockdown end?', ['yesterday', 'today', 'never'], 2);
    questions = [question1, question2, question3];
    
    Question.prototype.displayAnswers = function () {
        var a = 0;
        for (a === 0; a < this.answers.length; a++){
        console.log('\n' + a + ': ' +this.answers[a]);
        }
    }
    
    Question.prototype.askQuestion = function () {
        console.log(this.question);
    }
    
    function checkAnswer(input, ans) {
        if (input == ans) {
            score++;
            console.log('Correct! Your score is now ' + score + '\n_____________________');
            playGame();
        } else {
            console.log('Wrong. Try Again! Your score is still ' + score + '\n_____________________');
            playGame();
        }
    }

    function playGame () {
        var i = Math.floor(Math.random() * 3);
        questions[i].askQuestion();
        questions[i].displayAnswers();
        var quiz = prompt('Select question answer with the corresponding number \n Type \'exit\' to exit');
        checkExit(quiz, questions[i].correctAnswer)
    }
    
    function checkExit(inp, ans) {
        if(inp === 'exit') {
            return console.log('Thank you for playing');
        } else checkAnswer(inp, ans);    
    };
     
    score = 0;
    playGame();

})();






