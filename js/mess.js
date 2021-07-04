
-----------------------------------------------------------------
Using Template Literals
-----------------------------------------------------------------
const cardSuit = "Spades";
const cardValue = 5;
// console.log("You turn the card over. It is a " + cardValue + " of " + cardSuit + "!"); // edit this line to use template literal syntax.
console.log("You turn the card over. it is a " + `${cardValue} of ${cardSuit} !`);

-----------------------------------------------------------------
Object and  classes
-----------------------------------------------------------------
const dragon2 = {
	color: "blue",
	maxHP: 10000,
	roar(){
		console.log("The dragon roars ferociously ");
	}
}

const dragon3 = {
    color: "black",
    maxHP: 1000,
    roar: function() {
	    console.log("The dragon roars ferociously.");
    }
};

// Add Propery to the object
dragon2.element = "fire";
// Update propery
dragon2.color = "orange";
/*console.log(dragon2);*/
// Add a methos to a dragon2
dragon2.attack = function(){ console.log("The dragon breaths a stream of white-hot flame at you!");};
console.log(dragon2.attack());

// Update method to the dragon2 Object2
dragon2.roar = function(){console.log("The dragon lets out a tremendous roar!");};
console.log(dragon2);

// Add a method to this object with a dir parameter
dragon2.swim = function(dir){
	console.log(` The dragon swims away to the ${dir}.` );
}

// calls the fucntion dragon2.swim
console.log(dragon2.swim("north"));
// -----------------------------------------------------------------
// This
// -----------------------------------------------------------------
const dragon1 = {
    color: "red",
    roar() {
        console.log("The dragon lets out a tremendous roar!");
    }
};
// console.log(dragon1);
// show the color of the dragon in the roar() method's output
dragon1.roar = function() {
     console.log(`The ${this.color} dragon lets out a tremendous roar!`);
}
console.log(dragon1.roar());
//---------------------------------------------------
const dragon2 = {
    color: 'blue',
    roar() {
        console.log("The dragon lets out a tremendous roar!");
    }
};
// show the color with this method interpolation
dragon2.roar = function(){
	console.log(`the ${this.color} dragon lets out a tremendous roar!`);
}
console.log(dragon2.roar());

//--------------------------------------------------------------
// Default Function Parameters
//--------------------------------------------------------------
// function logSum(a, b){
// 	console.log(a + b);
// }

// console.log(logSum(2));
//output NaN (not a number)
// code before ES6 code like this
// function logSum(a, b){
// 	if ( a === undefined){ a = 0;}
// 	if ( b === undefined){ b = 0;}
// 	console.log(logSum( a + b))
// }
//--- 
// ES6 (default function parameters)
// function lonSum(a = 0, b = 0 ){
// 	console.logSum(a + b);
// }
// // The assignment operator being used in the parameter list causes a 
// // default value to be set for that parameter if no argument is passed in. 
// console.log(logSum(2, 3));
// console.log(logSum(2));
// console.log(logSum(0));

// Default function parameters are useful in class constructors
class Cat {
	constructor(name, color = "gray"){
		this.name = name;
		this.color = color;
	}
	meows(){
		console.log(`The ${this.color} cat named ${this.name} meows.`);
	}
}

// Object was created from the Cat class with just the name
// the default color of "gray" was applied
const ray = new Cat("Ray")
console.log(ray.meows());
// // output -- The gray cat named Ray meows.

// // object was created from the Cat class with both the name and color passed in
// // the passed-in color was used instead of the default.
const pat = new Cat("pat", "black");
console.log(pat.meows());
// output -- The black cat named pat meows.



// -----------------------------------------------------------------
// Class javascript
// -----------------------------------------------------------------
class Dragon {
	// There can be only one constructor method for a class
	// constructor defines properies of objects
	constructor(color, maxHP){
		// parameter list contains variable values 
		this.color = color;
		this.maxHP = maxHP;
	}
}
// To use this class to instantiate (create a new instance of) a new object, use the new keyword:
const dragon1 = new Dragon("red", 1200);
const dragon2 = new Dragon("blue", 1000);

console.log(dragon1);
console.log(dragon2);
// -----------------------------------------------------------------
// add default methods to a class
// -----------------------------------------------------------------
class Dragon {
	constructor(color, maxHP){
		this.color = color;
		this.maxHP = maxHP;
	}
	roar(){
		console.log(`The ${this.color} dragon lets out a tremendous roar!`);
	}
}

const dragon1 = new Dragon("red", 1200);
const dragon2 = new Dragon("blue", 1000);
console.log(dragon1.roar());
console.log(dragon2.roar());
// -----------------------------------------------------------------
// Class Inheritance
// -----------------------------------------------------------------
class Monster {
	roar(){
		console.log("The moster lets out a tremendous roar!");
	}
}
// parent class of Monster, we can create a child class, Dragon.
class Dragon extends Monster {
	fly(){
		console.log("The dragon flaps its wings and begins to fly.");
	}
}
 //can create a new dragon from the Dragon class
 // inherited the roar() method from the Monster class
 const dragon1 = new Dragon();
// works on the console?
 console.log(dragon1.roar());
 console.log(dragon1.fly());
// -----------------------------------------------------------------
// Super properies
// Recreate the Monster class, this time with a (constructor) 
// for the type and color, and using those properties in the roar() method as well:
// -----------------------------------------------------------------

class Monster {
	constructor(type, color){
		this.type = type;
		this.color = color;
		// variable always have set to true for all monsters
		this.isScary = true;
	}
	roar(){
		console.log(`The ${this.color} ${this.type} lets out a tremendous roar!`);
	}
}

// Dragon class, also using a constructor. This constructor will have three parameters: type, color, element:
class Dragon extends Monster {
	 // three parameters: type, color, element:
	constructor(type, color, element){
		// The super method,for child constructors to pass those properties that are inherited from the parent class
		super(type, color);
		// The element property of the child class, not inherited from the parent class. 
		this.element = element;	
	}
	// Then all properties are able to be used inside the fly() method. 
	fly(){
		console.log(`The ${this.color} ${this.type} ${this.element} flaps its wings and begins to fly`);
	}
	
}

// create a different child class from the parent Monster class:
class werewolf extends Monster {
	constructor(type, color){
		super(type, color);
	}
	howl(){
		console.log(`the ${this.type} howls loudly.`);
	}
}
// Then create a new werewolf object:
const werewolf1 = new werewolf("werewolf", "gray");
console.log(werewolf1.roar());
console.log(werewolf1.isScary);
console.log(werewolf1.fly());


// Creating a method from the Dragon class:
const dragon1 = new Dragon("dragon", "blue", "water");
console.log(dragon1.roar());
console.log(dragon1.isScary);
console.log(dragon1.fly());

//--------------------------------------------------------------
// Code Challenge: Objects
//--------------------------------------------------------------

// 1 - white rabbit
const rabbit = { 
  color: "white",
  checkWatch() {
    console.log(`A ${this.color} rabbit checks his watch and exclaims, 'I\'m late!'`);
  }
};
rabbit.checkWatch();

// // 2 - spaceship
const spaceship = { 
  // your code here - uncomment the spaceship.launch() line below when done
  name: 'starlinks',
  launch(){
  	console.log(`You have launched the spaceship ${this.name}!`);
  }
};
spaceship.launch(); 

// 3 - shopping cart
// A shopping cart with a property "contents" initialized to an empty array
// A method addItem(item) will add an item to the contents array.
// 3 - shopping cart
 
const cart = {
	// "contents" initialized to an empty array
  contents: [],
  // method addItem(item) will add an item(parameter) to the contents array
  addItem(item) {
    this.contents.push(item);
  }
};
// your code here - uncomment the two lines below this object when done
cart.addItem("laptop");
console.log("The cart contains:", cart.contents);


// 4 - lever
// A lever with the property "stamp" set to the string "ACME"
// Write a pull() method for 
// console.log: "An anvil stamped (reference the stamp property here dynamically) drops on your head."
const lever = {
	stamp: 'ACME',
	pull(){
		console.log(`An anvil stamped ${this.stamp} drops on your head.`);	
	}
};	
lever.pull();

// 5 - Your object here
const produce = {
	produceBeggies: ["cilantro", "tommatores", 'cucumbers'],
	addProduceBeggie(item){
		this.produceBeggies.push(item);
	}
};
produce.addProduceBeggie("parley");
console.log("The  produce has: " + produce.produceBeggies.length + " items " + " which the last one is " + produce.produceBeggies[3]);

//-----------------------------------------------------------------------------------------------------------------
// Code Challenge: Class Inheritance
//-----------------------------------------------------------------------------------------------------------------
class Monster {
    constructor(type, color) {
        this.type = type;
        this.color = color;
        this.isScary = true;
    }
    roar() {
        console.log(`The ${this.color} ${this.type} lets out a tremendous roar!`);
    }
}

class Dragon extends Monster {
    constructor(type, color, element,) {
        super(type, color);
        this.element = element;
    }
    fly() {
        console.log(`The ${this.color} ${this.element} ${this.type} flaps its wings and begins to fly.`);
    };
    // new method
    attack(){
    	console.log(`The ${this.color} ${this.type}  start to blast fire and  attack.`);
    };
}

class Werewolf extends Monster {
    constructor(type, color) {
        super(type, color);
    }
    howl() {
        console.log(`The ${this.color} ${this.type} howls loudly.`);
    }
}
 class Mummy extends Monster {
 	constructor(type, color) {
 		super(type, color);	
 	}
 	chase(){
 		console.log(`The ${this.color} ${this.type} is chasing us.`);
 	}
 }
const woodDragon = new Dragon("dragon", "brown", "wood");
console.log(woodDragon.roar());
console.log(woodDragon.fly());
console.log(woodDragon.attack());

 // instantiate a new werewolf object 
const werewolf1 = new Werewolf("werewolf", "blue");
console.log(werewolf1.howl());

const mummy1 = new Mummy("Mummy", "white", "chase");
console.log(mummy1.chase());

// // sort the array alphabetically
const produce = ["cilantro", "radishes", "beans", "parsley"];
console.log(produce.sort());
//-----------------------------------------------------------------------
//  Is possible to pass a function into another fucntion as an agument
//	concept called Higher Order functions and Callbacks functions
//-----------------------------------------------------------------------
//-----------------------------------------------------------------------
//  ARRAY, MAP, FILTER, REDUCE (None mutator methods): callbacks fucntion as arguments
//	Iteration mathods thats how you call it and they all have return values
// MAP and FILTER return a new array, REDUCE return a single value
//-----------------------------------------------------------------------
//-----------------------------------------------------------------------
// The map method iterates through an array, 
// performs a given callback function on every item in the array, and returns a new array at the end. 
//-----------------------------------------------------------------------
// iterate array double each number
// variable arr1 assigned integer
const arr1 = [5, 21, 8, 100];
// variable arr2 assigned to ampty array
const arr2 = [];
// iteration if i (integer) assigned to 0 if i less than arr1 add one
for(let i = 0; i < arr1.length; i++){
	// arr1[i] * 2 is assigned to arr2[i]
	arr2[i] = arr1[i] * 2;
}
// output arr2
console.log(arr2)

// arrow function
const arr3 = [];
arr1.forEach((n, i) => {arr3[i] = n * 2;})
console.log(arr3)
//-----------------------------------------------------------------------
// MAP method
// As its argument, it took an arrow function as its callback function (n => n * 2) 
// which doubled every item in arr1 and returned the doubled value as an item in arr4.
// The map method will iterate on each element of the array on which it was called 
// (in this case, arr1) and assign the value of the n to the current item in the array, 
// perform the callback function (n * 2) then return the changed value to the new array arr4. 
//-----------------------------------------------------------------------
const arr4 = arr1.map(n => n * 2);
console.log(arr4)

//--------------------------------------------------------------------------
 // filter array method.
 //--------------------------------------------------------------------------
 // filter out items array less than 7, for loop or forEach.
 const arr1 = [1, 3, 7, 4, 9, 15];
 // filter method
 // filter numbers less then 7
 // each iteration, it will assign item to the value of the first parameter
  // in a callback function, then check the filtering condition inside the function body, in this case, n < 7.
 const arr2 = arr1.filter(n => n < 7);
 console.log(arr1);
 console.log(arr2);

const animals = ["bear", "wolf", "dog", "monkey"];
const filteredAnimals = animals.filter(animal => animal.includes("r"));
console.log(filteredAnimals);
console.log(animals);


//--------------------------------------------------------------------------
// Unlike map and filter, however, reduce does not return an array. It returns a single value. 
//--------------------------------------------------------------------------
// array assigned to arr1
const  arr1 = [3, 4, 13, 8, 22];

const reduceValue = arr1.reduce((a, c) => a + c);
console.log(reduceValue);

//------------------------------------------------------------------------
// Arrays of Objects
//------------------------------------------------------------------------
const desserts = [
{
	id: 0,
	type: "cake",
	flavor: "chocolate",
	cost: 4.50
},
{
	id: 1,
	type: "pie",
	flavor: "pumpkin",
	cost: 3.75
}, 
{
	id: 2,
	type: "donut",
	flavor: "chocolate",
	cost: 1.50
}
];
//------------------------------------------------------------------------
// Filter
//------------------------------------------------------------------------
// Filter output error flavor is not define(dessert.flavor====)
const chocDesserts1 = desserts.filter(dessert => flavor === "chocolate");
console.log(chocDesserts1);
const chocDesserts2 = desserts.filter(dessert => dessert.flavor === "chocolate");
console.log(chocDesserts2);
//------------------------------------------------------------------------
// reduce to total up the cost of every dessert object in the array
//------------------------------------------------------------------------
// set an initial value reduce, we used a comma at the end of the callback function, initial value 0.
// an initial value is not set, then the first item of the array is used as the initial value, 
// and the second item of the array is used as the currentValue that is being iterated over. 

const totalCost = desserts.reduce((total, dessert) => total + dessert.cost, 0);
console.log(totalCost);

const totalCostNotValue = desserts.reduce((total, dessert) => total + dessert.cost);
console.log(totalCostNotValue);

//-------------------------------------------------------------------
// Method Chaining
// //----------------------------------------------------------------
const states = ["whinshington", "Mine", "Montana", 'california'];
new array filter out states begins letter Method
const mStates = states.filter(states => states[0] === "M");
console.log(mStates);

// change uppercase using map method
const mStatesUpperCased = mStates.map(state => state.toUpperCase());
console.log(mStatesUpperCased);

Do both with method chaining
const mStatesUpperCased2 = states.filter(state => state[0] === 'M').map(state => state.toUpperCase()).map(state => state + "!");
console.log(mStatesUpperCased2);

//-------------------------------------------------------------------
// Method chaining with custom object methods and adding return values
//-------------------------------------------------------------------
const bird = {
	sing(){
		console.log("the birth sings.");
	},
	fly(){
		console.log("The birth flaps its wings");
	}
}
bird.sing = function() {
    console.log("The bird sings.");
     // this keyword as the return value
    return this;
};
bird.fly = function() {
        console.log("The bird flaps its wings.");
         // this keyword as the return value
    return this;
}

console.log(bird.fly().sing());
console.log(bird.fly().fly());
console.log(bird.sing().sing().sing().fly().sing().fly());

//---------------------------------------------------
// Map Example
//---------------------------------------------------
// 1
const numbers = [1, 1, 2, 3, 5];
const numbersAddFive = numbers.map(n => n += 5);
// The below line should console.log: [6, 6, 7, 8, 10]
console.log(numbersAddFive); 

// 2 - uncomment the lines that start with "const" and "console.log"
const numbersReformatted = numbers.map(n => n += ": " );
// The below line should console.log: ["1: ", "1: ", "2: ", "3: ", "5: "] 
console.log(numbersReformatted);

// 3
// Use map method - words array,remove the "s" from the end of each word. String.slice() 
const words = ["planes", "trains", "automobiles"];
const singularWords = words.map(lastS => lastS.slice(0, -1));
// The below line should console.log: ["plane", "train", "automobile"]
console.log(singularWords);

// 4:
const firstLetters = words.map(fw => fw.slice(0, 1));
// The below line should console.log: ["p", "t", "a"]
console.log(firstLetters);

// Bonus:
const capitalizedWords =  words.map(fw => fw.charAt(0).toUpperCase() + fw.slice(1));
// The below line should console.log: ["Planes", "Trains", "Automobiles"]
console.log(capitalizedWords);

//---------------------------------------------------
// Code Challenge: Filter
//---------------------------------------------------
const pets = ["goldfish", "dog", "turtle", "tiger"]

//1 
const petsShortNames = pets.filter(pet => pet.length <= 5);
// The below line should console.log: ["dog", "tiger"]
console.log(petsShortNames);

//2 - uncomment line 9 and line 11 when you've finished challenge 1
const petsTNames = pets.filter(pet => pet.includes("t"));
// The below line should console.log: ["turtle", "tiger"] 
console.log(petsTNames);

const numbers = [3, 7, 4, 5, 10];
//3 - uncomment line 15 and line 17 
const numbersBiggerThanFour = numbers.filter(n => n > 4);
// The below line should console.log: [7, 5, 10]
console.log(numbersBiggerThanFour);

//Bonus - uncomment line 20 and line 22
const evenNumbers = numbers.filter(n => n % 2 === 0);
// The below line should console.log: [4, 10]
console.log(evenNumbers);

//---------------------------------------------------
// Code Challenge: Reduce
//---------------------------------------------------
// 1
const letters = ['h', 'e', 'l', 'l', 'o']

const greeting = letters.reduce((a, c) => a + c);
// The below line should console.log: "hello"
console.log(greeting) 

// 2 - uncomment lines 9 and 11
const numbers = [ 100, 3, 4, 1, 2];
const total = numbers.reduce((a, c) => a * c); 
// The below line should console.log: 2400
console.log(total); 

//Bonus - uncomment lines 15 and 17
const arrays = [["how", "now"], ["brown", "cow"]];
const flattenedArray = arrays.reduce((a, c) => a.concat(c));
// The below line should console.log: ["how", "now", "brown", "cow"]
console.log(flattenedArray);



//---------------------------------------------------
// extract the object with the name property matching "Hazel". 
//---------------------------------------------------
const myPets = [    {
        id: 0,
        type: "iguana",
        name: "Iggy"
    },
    {   id: 1,
        type: "cricket",
        name: "Jiminy"
    },
    {
        id: 2,
        type: "rabbit",
        name: "Hazel"
    }
];
// The return value should be the single object only
console.log(myPets.filter(pet => pet.id === 2)[0]);


 // created a variable dragon1 with two propertie (color maxHP)
const dragon1 = {
	color: "red",
	maxHP: 1000,
	// Add a method roar()
	roar(){
		console.log(`the dragon ${this.color} roar ferociously`);
	}
};

const dragon2 = {
	color: "blue",
	maxHP: 500,
	// Add a method roar()
	roar(){
		console.log(`the dragon ${this.color} roar ferociously`);
	}
};
// add A property to the Object
dragon1.element = "fire";

// Upate A property of the Object
dragon1.color = "Pink";

// Add a new method to the Object, use the function exipretion syntax
dragon1.attack = function(){console.log("The dragon breathes a steam of white-hot fame at you!");}; 
// dragon1.attack = function() { console.log("The dragon breathes a stream of white-hot flame at you!"); };

// Update an existing method for the Object
dragon1.roar = function(){ console.log(`the dragon ${this.color} updated its roar method`)};


// Add element property to dragon2
dragon2.element = "water";

// Add a method swim to the Object with dir parameter
dragon2.swim = function(dir){console.log(`The dragon swim away to the ${dir}.`)};
dragon2.swim("north");

// array of colors
const colors = ["red", "blue", "black"];

// // update array strings
// colors[0] = "pink";
// console.log(colors);

function Hero(name){
	this.name = name;
	this.nameUpperCase = () => {
		return this.name.toUpperCase();
	}
}

const myName = new Hero("Deku");
console.log(myName.name);
console.log(myName.nameUpperCase()); 


//-------------------------------------------------------------------
// example of arrays, constructor
//-------------------------------------------------------------------
class Student {
	constructor(name, email, community){
		this.name = name;
		this.email = email;
		this.community = community;
	}
}


class Bootcamp {
	constructor(name, level, students = []) {
		this.name = name;
		this.level = level;
		this.students = students;
	}

    registerStudent(newStudent){
        const tesArray = this.students.filter(student => student.email === newStudent.email)
        if (tesArray.length){
            console.log("Estudent is already registered")
        }else { 
            this.students.push(newStudent)
        }
    }
}

// Create an Object from the Bootcamp class
const webdevFundamentals = new Bootcamp("web developments Fundamentals", "beginners");
const fullstack = new Bootcamp("full stack web and mobile development", "Advenced");

// Create an Object from the Student class
const  student1 = new Student("Enrique", "quique@gmail.com", "Santa Rosa");
const  student2 = new Student("Lily", "lily@gmail.com", "L.A");
const  student3 = new Student("Tyler", "tyler@gmail.com", "N.Y");


// webdevFundamentals.registerStudent(student1);

// // Task1
// class Student {
//     constructor(name, email, community) {
//         this.name = name;
//         this.email = email;
//         this.community = community;
//     }
// }
// class Bootcamp {
//     constructor(name, level, student = []) {
//         this.name = name;
//         this.level = level;
//         this.students = students;
//     }
// // Task 2
//         registerStudent(studentToRegister) {
//             const hasEmail = this.students.filter((student) => student.email === studentToRegister.email );
//              if (!hasEmail.length) {
//                  this.students.push(studentToRegister);
//                  console.log(` Registering ${studentToRegister.email} to the bootcamp Web Dev Fundamentals`);
//                  return this.students;
//              }
//             else {
//                 console.log(` This ${studentToRegister.email} is already registered`);
//             }
//         }
//     }
//-------------------------------------------------------------------
// Code Challenge: JSX and State
//-------------------------------------------------------------------
class Example extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bootcamp: "Nucamp"
        };
    }

    render() {
        const course = "React";
        return (
            <div>
              <span className="blue-box">{this.state.bootcamp}</span>
              // course its in the render() function 
              <span className="orange-box">{course}</span>
            </div>
        )
    }
}

ReactDOM.render(<Example />, document.getElementById('root'));
//-------------------------------------------------------------------
// Code Challenge: JSX and State
//-------------------------------------------------------------------
class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      countries: [
        {
          id: 0,
          name: 'Greece',
          continent: 'Europe'
        },
        {
          id: 1,
          name: 'Laos',
          continent: 'Asia'
        },
        {
          id: 2,
          name: 'Zambia',
          continent: 'Africa'
        },
        {
            id: 3,
            name: "Brazil",
            continent: 'South America'
        }
      ],
    };
  }

  renderCountries(countries) {
    return (
      <div>
      // pulllin data from props on the list in the case is {country.continent}
        {countries.map(country => <div key={country.id}> {country.name} - {country.continent}</div>)}
      </div>
    );
  }
  
  render() {
    return (
      <div>
        <h1 className="title">My Travel Bucket List</h1>
          {this.renderCountries(this.state.countries)}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));


// -----------------------------------------------------------------
// React Demo: Passing Props
// -----------------------------------------------------------------

class ExampleParentComponent extends React.Component {
    constructor(props) {
       super(props); 
       this.state = {
          someWord: 'hello',
          anotherWord: 'world',
          moreStuff: '!!!'
       };
    }
  
    render() {
      return (
        <div>
            <p>
            Access state properties inside the component where they are defined like this:{this.state.someWord}
            </p>
             <p>Pass state properties to child components like this:</p>
            <ExampleChildComponent word1={this.state.anotherWord} word2={this.state.moreStuff} />
        </div>
      );
    }
}

// Because ExampleChildComponent is rendered by ExampleParentComponent with props inside it (see line 16), that means that an object called 'this.props' implicitly exists inside of ExampleChildComponent that has properties of 'word1' and 'word2'. These properties are named and initialized in line 16.
class ExampleChildComponent extends React.Component {
   render() {
      return (
        // Access the props in this way:
         <p>Hello {this.props.word1} {this.props.word2}</p>
      );
   }
}

// Play around with this - try creating another state property in the ExampleParentComponent and passing it to ExampleChildComponent as a prop, for example. Try creating a third component and passing props to it from either or both of the existing components. Tinker :)


// ReactDOM.render(<ExampleParentComponent />, document.getElementById('root'));


// -----------------------------------------------------------------
// React Demo: Passing Object as Prop
// -----------------------------------------------------------------
//If you have an object like this in the state:
class ExampleParent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            exampleObj: {
               exampleProperty1: 'hello',
               exampleProperty2: 'world'
            }
        };
    } 
    // You can pass the entire object like this to a child component as props:
    render() {
        return(
            <ExampleChild obj={this.state.exampleObj} />
        );
    }
}

// Then access all properties of that object in the child component, without needing to pass in each object property as a separate prop:
class ExampleChild extends React.Component {
    render() {
        return(
            <p>{this.props.obj.exampleProperty1} {this.props.obj.exampleProperty2}</p> // will print Hello World
        );
    }
}

// Note: If you will only need to use a single property of the object being passed, then it would make sense to pass in that property rather than the entire object. 

// ReactDOM.render(<ExampleParent />, document.getElementById('root'));

//---------------------------------------------------------
class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      partyType: "birthday",
      entertainment: "clowns",
      food: "pizza",
      venue: {
        name: "Polly's Party Palace",
        capacity: 120
      }
    };
  }

  render() {
    return (
      <div>
        <Party partyType1={this.state.partyType} entertainment1={this.state.entertainment} venue1={this.state.venue} food1={this.state.food}/>
      </div>
    );
  }
}

class Party extends React.Component {
   render() {
      return (
        // Access the props in this way:
         <div>
       <h3>Party Time!</h3>
        <p>This {this.props.partyType1} party will be held at {this.props.venue1.name} with a maximum capacity of {this.props.venue1.capacity}.</p>
         <p> Featured entertainment: {this.props.entertainment1}</p>
          <p>Our Food will {this.props.food1}!!!!</p>
          </div>
      );
   }
}

ReactDOM.render(<App />, document.getElementById('root'));


//-------------------------------------------------------------------
// Code Challenge: JSX and State
//-------------------------------------------------------------------
class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      countries: [
        {
          id: 0,
          name: 'Greece',
          continent: 'Europe'
        },
        {
          id: 1,
          name: 'Laos',
          continent: 'Asia'
        },
        {
          id: 2,
          name: 'Zambia',
          continent: 'Africa'
        },
        {
            id: 3,
            name: "Brazil",
            continent: 'South America'
        }
      ],
    };
  }

  renderCountries(countries) {
    return (
      <div>
      // pulllin data from props on the list in the case is {country.continent}
        {countries.map(country => <div key={country.id}> {country.name} - {country.continent}</div>)}
      </div>
    );
  }
  
  render() {
    return (
      <div>
        <h1 className="title">My Travel Bucket List</h1>
          {this.renderCountries(this.state.countries)}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

//-----------------------------------------------------------

class nameFiled {
  // creatae new Object and initilaize it props and methods with parameter name
  constructor(name){
    // create a new list item
    const field = document.createElement('li');
    // set text to the list item and the
    field.textContent = name;
     const nameListHook = document.querySelector('#names');
     nameListHook.appendChild(field);
  }
}


class NameGenerator{
  constructor(){
    // get the reference to button tag as selector
    const btn = document.querySelector('button');
// array it a variable attach to this class with -this-
    this.name = ["max", "bulma", "goku"];
    // wnat to cycle to names
    this.currentName = 0;  
    // add addEventListener for the clicker and wait when clicks accours 
    btn.addEventListener('click', () =>{
      this.addName();
    });
  }
 // add method or -fucntion- in the class NameGenerator
  addName(){
    // create a new instance of the nameFiled class
    const name = new nameFiled(this.name[this.currentName]);
    // Add currentName or increment
    this.currentName++;
    // check elelents
    if(this.currentName >= this.name.length){
      this.currentName = 0;
    }
  }
}
// create an Object stored in gen
const  gen = new NameGenerator();

----------------------------------------------------------------
class ParentComponent extends React.Component {
    // initilaized propery from reac components
    constructor(props) {
        // inherited prope from parent class
        super(props);
        // Variable that can passed funtion and objects that returns and object
        this.state = {
            // assigned propery to the this.state
            example1: { 
                testBooleanValue: true 
            },
            example2: 'hello'
        };
    }
    // renders the ChildComponent in the return method
    render() {
        return (
            <ChildComponent anExample={this.state.example1} anotherExample={this.state.example2} />
        )
    }
}

function ChildComponent(props) {
    console.log('props is: ', props);
    console.log('props.anExample is ', props.anExample);
    console.log('props.anExample.testBooleanValue is ', props.anExample.testBooleanValue);
    console.log('props.anotherExample is ', props.anotherExample);
    return (
        <div>
            <p>
                Example 1: {props.anExample.testBooleanValue.toString()}
            </p>
            <p>
                Example 2: {props.anotherExample}
            </p>
        </div>
    );
}

// ReactDOM.render(<ParentComponent />, document.getElementById('root'));
//-------------------------------------------------------------------------------
// Code Challenge: React Components and Object Destructuring
//-------------------------------------------------------------------------------
// This array is used for the Example.
const GAMES = [
  { id: 0, name: "Chess" },
  { id: 1, name: "Go" },
  { id: 2, name: "Risk" },
  { id: 3, name: "Cribbage"}, 
  { id: 4, name: "Spit" }
];

// This array is used for the Challenge.
const RESOURCES = [
  { 
    id: 0, 
    title: "WesBos.com - Destructuring Objects",
    url: "https://wesbos.com/destructuring-objects/"
  },
  { 
    id: 1, 
    title: "FreeCodeCamp - The Basics of Destructuring Props in React",
    url: "https://medium.freecodecamp.org/the-basics-of-destructuring-props-in-react-a196696f5477" 
  },  
  { 
    id: 2, 
    title: "MDN - Destructuring assignment",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment"
  },
  {
    id: 3,
    title: "W3Schools - a target",
    url: "https://www.w3schools.com/tags/att_a_target.asp"
  }
];

function App() { 
  return ( 
    <div> 
      <PageTitle /> 
      <Games /> 
      <hr /> 
      <Challenge /> 
      <hr>
      <Resources />
    </div> 
  ); 
}
        
function PageTitle() {
  return (
    <h1>Code Challenge: React Components and Object Destructuring</h1>
  );
}

class Resources extends React.Component {   
    constructors(props){
        super(props);
        this.state ={
            resource: RESOURCES
        }
    };
    render(){
        const resourceList = this.state.resource.map(resource => {
            return(
                <li key={resource.id}>
                    <RenderResource resource={resource} />
                </li>
            );
        });
        return (
            <div>
                <h2>Additional Resources</h2>
                <li>{resourceList}</li>
            </div>
        )
    }

} // end of Resources

class Games extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      games: GAMES
    };
  }
  
  render() {
    const gamesList = this.state.games.map(game => {
      return (
        <li key={game.id}>
          <RenderGame game={game} />
        </li>
      );
    });    
    
    return (
      <div>
        <h2>Available Games</h2>
        <ul>{gamesList}</ul>
      </div>
    );
  }
} // end of Games componet

function RenderResource(props){
    return(
        <strong><a href={props.resource.url} target="black">{props.resource.title}</a></strong>
    )
}

function RenderGame(props) {
  return (
    <strong>Game ID {props.game.id}: {props.game.name}</strong>
  );
}

function Challenge() {
  return (
    <React.Fragment>
      <p>For your Code Challenge, you will use the RESOURCES array (line 11).</p>
      <ul>
        <li><strong>Challenge 1:</strong> Create a class component named <strong>Resources</strong>. Model this component on the Games component. Cause it to be displayed in the Results display (the large white panel) by rendering it inside the <strong>App component</strong>, beneath where the Challenge component is rendered.</li>
        <li><strong>Challenge 2:</strong> Create a functional component named <strong>RenderResource</strong>. Use object destructuring in its parameter list to pass in <strong>props.resource</strong> as simply <strong>resource</strong>.</li>
        <li><strong>Challenge 3:</strong> List the URL titles to the view in the render() function of Resources, similar to how the games are listed in the render() function of Games, using the destructured <strong>resource</strong> argument. Title the list <strong>"Additional Resources".</strong></li>
      <li><strong>Challenge 4</strong>: Use JSX elements to make each URL into clickable links. Have them open in a new tab, not the current one. Two hints: 1) You will NOT need to use React Router for this challenge. 2) Look up the "anchor target attribute".</li>
      </ul>
    </React.Fragment>
  );
}




// ReactDOM.render( <App />, document.getElementById("root"));

//////////////////////////////-------------------------------------------
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      bootcampName: "Nucamp", 
    };
  }

  render(){
    return (
      <Welcome bootcampName={this.state.bootcampName} />
      );
  }
}


 function Welcome({bootcampName}) {
    

    return (
      <h1>Welcome to {bootcampName}!</h1>
    );
  }// end of component Welcome

ReactDOM.render(<App />, document.getElementById('root'));

// /----------------------------------------------------
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      bootcampName: "Nucamp", 
    };
  }

  render(){
    return (
      <Welcome bootcampName={this.state.bootcampName} />
      );
  }
}


 function Welcome({bootcampName}) {
    

    return (
      <h1>Welcome to {bootcampName}!</h1>
    );
  }// end of component Welcome

ReactDOM.render(<App />, document.getElementById('root'));