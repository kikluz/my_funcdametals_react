// Computed Property Names and Spread Syntax,  declaring a varivbale
//----------------------------------------------------------------------
const myPropery = "foo";


const myObject = {
	[myPropery]: "this is a value with propery indentifier stored in myPropery"
};

console.log(myObject);


// Spread Syntax Array, mix data with array like this
//----------------------------------------------------------------------
landVehicles =["car", 'motorcycles', "trucks"];
waterVehicles = ["canoe", "sailboat", "submiarine"];
const vehicles = [...landVehicles, ...waterVehicles, "addString to array", 3,3, {objectPropery: "this is Object value"}];
console.log(vehicles);

 // Objects
//----------------------------------------------------------------------

 const objectOne = {
 	 color: 'red',
 	 height: 12
 };
 const objectTwo ={
 	maerials: "ceramic",
 	width: 6
 }

 const joinObjects = {...objectOne, ...objectTwo};
 console.log(joinObjects);

  // Objects Same Propery Overwrite the last one
//----------------------------------------------------------------------
const Hero = {
	name: "Eijiro Kirishma",
	height: "170 cm",
 	likes: "Meat"
}

const heroPower = {
	quirk: "hardening",
	bloodType: "o"
}
// add two objects
const HeroInfo  = {...Hero,  ...heroPower};
const heroUpdatePropery = {...HeroInfo, affilation: "U.A high School"}

console.log(heroUpdatePropery);

/* Challenge 1 - spread the two arrays below to create a new array 'philosophers' */
const ancientGreekPhilosophers = ["Hypatia", "Socrates", "Zeno"];
const modernPhilosophers = ["Allan Gibbard", "Susan Haack", "Judith Butler"];

const philosophers = [ ...ancientGreekPhilosophers,  ...modernPhilosophers];
// console.log(philosophers);

/* Challenge 2 - spread the array below to create a new array 'newStudents' that includes the given studentToAdd object */
const STUDENTS = [
    { name: "Rocky" },
    { name: "Celine" },
    { name: "Masood" },
];
const studentToAdd = { name: "Krystal" };

const newStudents = [ ...STUDENTS, ...[studentToAdd] ];
// console.log(newStudents);

// spread the object below to create a new object that updates the students property with 
// the newStudents array that you created 
const reactCourse = {
    durationInWeeks: 5,
    name: "React",
    students: STUDENTS    
}
// Update propery object its like this students:newStudents
const reactCourseUpdated = {...reactCourse, ...{students:newStudents} };
console.log(reactCourseUpdated);
// ---------------------------------------------------------------------------------
// JavaScript: Ternary Operator
// ---------------------------------------------------------------------------------
// Object lightswitch track the switch on or off with if statement
const lightswitch = {
// propery with value of "on"
    switchState: "on",
    // method to turn it on or off
    flipSwitch(){
        check if the value is on 
        if(this.switchState === "on") {
            // if its on do  switch off
            this.switchState = "off";
        } else {
            // but if its not do switch on
            this.switchState = "on";
        }

    }
}

console.log(lightswitch);
// called the lightswitch funcion and the method flipSwitch to tunr off 
lightswitch.flipSwitch();

console.log(lightswitch);
// called it again and turnis on
lightswitch.flipSwitch();

console.log(lightswitch);

// ---------------------------------------------------------------------------------
// use Ternary Operator
// ---------------------------------------------------------------------------------

 lightswitch.flipSwitch = function(){
    // if its on, avalue with ? then turn off alse do turn on
    this.switchState === "on" ? this.switchState = "off" : this.switchState = "on";
 }

console.log(lightswitch);
// called the lightswitch funcion and the method flipSwitch to tunr off 
lightswitch.flipSwitch();

console.log(lightswitch);
// called it again and turnis on
lightswitch.flipSwitch();

console.log(lightswitch);
// ---------------------------------------------------------------------------------
// JavaScript: Ternary Operator, conditional operator.
// condition to be evaluated ? expression to execute if condition is truthy : 
// expression to execute if condition is falsy
// ---------------------------------------------------------------------------------
function canDrive(age) {
    if( age >= 16 ){
        return true;
    } else {
        return false;
    }
}

// console.log(canDrive(16));
// ---------------------------------------------------------------------------------
// JavaScript: Ternary Operator, conditional operator.
// ---------------------------------------------------------------------------------
/// return its statement can not use it so its like this
function canDrive(age){
    return (age >= 18) ? true : false;
}
console.log(canDrive(18));

// /-------------------------------------------------------------------
// Refactor Challenge #1 
if (1+1===2) {
  console.log('It is true that 1+1 equals 2.');
} else {
  console.log('It is false that 1+1 equals 2.');
}
// Uncomment the below line (line 8) and hit the Run button. You should then see the console log "It is true that 1+1 equals 2." line twice.
console.log(1+1===2 ? 'It is true that 1+1 equals 2.' : 'It is false that 1+1 equals 2.');


// Refactor Challenge #2 - you're on your own for this one buddy!
if (0) {
  console.log('0 evaluates as true.');
} else {
  console.log('0 evaluates as false.');
}
// Write your revision of the above code using the ternary operator here. 
// Keep the above code - the expected result is that you will see "0 evaluates as false" in the console twice. 
console.log(0 ? '0 evaluates as true.' : '0 evaluates as false.')

// Refactor Challenge #3
let hungry = true;
if (hungry) {
  console.log('Go eat something.');
} else {
  console.log('Keep coding!');
}
// Write your revision of the above code using the ternary operator here. 
// Keep the above code - the expected result is that you will see "Go eat something!" in the console twice. 
console.log((hungry = true) ? 'Go eat something.' : 'Keep coding!');

// Refactor Challenge #4! The code you need to refactor is inside the function. For this one, go ahead and replace the contents of this function, 
// rewritten using the ternary operator. You should be able to accomplish this in a single line. 
const isEven = (dice) => {
  return (dice % 2) ? false : true;
}

// This is just code to supplement Refactor Challenge #4; you do not need to do anything with it.
const MAX = 6;
let dice = Math.floor(Math.random() * MAX + 1);
console.log(`You need to roll an odd number to win:\n
  You roll the dice... It tumbles and comes to a stop, showing ${dice} ${(dice > 1) ? 'pips' : 'pip'}! -- ${isEven(dice) ? 'Better luck next time!' : 'You win!'}`);


//------------------------------------
//-----------------------------------------------------------------------------
//Testing a Regular Expression
//-----------------------------------------------------------------------------
// ^ matches the beginning of a string
// $ matches the end
// \d matches any single digit
// + character means to repeat the preceding match 1 or more times
// So ^\d+$ together means a pattern of 1 or more digits and nothing else (no letters or other non-numeric characters).
// const myReg = /^\d+$/;
// console.log(myReg.test("hello")); //false
// console.log(myReg.test("12345")); // true
// console.log(myReg.test(12345)); //true
// console.log(myReg.test("abc3456")); // false

///-------------------------------------------------------------------------------------
 // username that has alphanumeric characters (lower and upper case) 
 // and has a number as the final character (such as 'Jason1') is accepted
///-------------------------------------------------------------------------------------
// function validate() {
//   let inputStr = document.getElementById("username").value;
 
//  const myReg = // Uncomment this line and add your regular expression literal here
//  const myReg =  /^\d+$/; ///[A-z0-9]+\d/;
//  const myReg =  /^\[A-z0-9]\Wd+$/; ///[A-z0-9]+\d/; 

//   if (myReg.test(inputStr)) 
//     alert("Username accepted");
//   else
//     alert("Username must contain only alphanumeric characters, contain a mininum of two characters, and end with a digit.");
// }
///-------------------------------------------------------------------------------------
 // Code Challenge: Toggling Modals
///-------------------------------------------------------------------------------------
// You have learned to use 'import' to bring in components from libraries in your React project. Using const is another way to do it that works better in Codepen. Do not be concerned about the difference at this time.
// const { Modal, ModalBody, Button } = Reactstrap;

// // The code you should pay attention to begins after this comment.

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.toggleModal = this.toggleModal.bind(this);
    
//     this.state = {
//       isModalOpen: false
//     };
//   }
//   // creat a method for toggleModal, bind method in the constructor
//   toggleModal() {
//     this.setState({
//       isModalOpen: !this.state.isModalOpen
//     });
//   }
  
//   render() {
//     return(
//       <React.Fragment>
//       // add a Reactstrap Modal that correctly passes the isModalOpen state and the toggle
//       // <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
//       <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
//         <ModalBody>
//           Beer Me!!
//         </ModalBody>
//       </Modal>
//       <Button onClick={this.toggleModal}>click me<Button/>
//       </React.Fragment>
//     );
//   }
// }

// ReactDOM.render(<App />, document.getElementById("root"));
////-------------------------------------------------------------------------------------
