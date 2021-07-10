// -------------------------------------------------------------------------------
// A promise has 3 states fulfiled (Resolve), Rejected
// -------------------------------------------------------------------------------

// the promise 
const pizzaPromise = new Promise(
    (resolve, reject) => { 
        setTimeout(() => {
           const pizzaDeliveredSuccessfully = false;
            if (pizzaDeliveredSuccessfully) {
                const pizza = {
                    size: 'large',
                    toppings: ['pepperoni', 'pineapples']
                };
                resolve(pizza);
            } else {
                const reason = new Error('Sorry, your pizza delivery driver ran out of gas!');
                reject(reason);
            }
        }, 2000);
    }
);

// create and consume the promise when this function is called
const orderPizza = () => {
    console.log('You order a pizza.')
    pizzaPromise
        .then(pizza => console.log(`Your ${pizza.size} pizza has been delivered`))
        .catch(error => console.log(error.message));
    /* could also use this instead of the .then/.catch above:
        .then(pizza => console.log(`Your ${pizza.size} pizza has been delivered`),
              error => console.log(error.message));  */
};

// here's where you actually make the order
orderPizza();
// the below code will run even while you're waiting for the pizza order (promise) to complete
console.log("You start a movie to watch.");


// -----------------------------------------------------------------------------------
// Understanding Promises //_ ES6: Full example
// promise syntax look like this:
// new Promise(function (resolve, reject) { ... } );
// -----------------------------------------------------------------------------------
 const isMomHappy = true;

 // promise
 const wiilIGetPhone = new Promise(
  (resolve, reject) => {
    if(isMomHappy){
      const phone = {
        brand: "iphone",
        color: "black"
      };

      resolve(phone);
    
    } else {
      const reason = new Error('mom is not happy');
      reject(reason);
    }
  }
);

 // 2 promise
 const showOff = function (phone) {
   const message = 'Hey firend, I have a new ' + phone.color + " " + phone.brand;
   return Promise.resolve(message);
 };

 // call our Promise
 const askMom = function(){
  wiilIGetPhone
    .then(showOff)
    // then takes an arguement, the value that's returned from the promise
    .then(fulfilled => console.log(fulfilled))
     
    .catch(error => console.log(error.message));
 }

 console.log(askMom());

// -----------------------------------------------------------------------------------------------------

const { createStore } = Redux;
const { Provider, connect } = ReactRedux;
// You have learned to use 'import' to bring in components from libraries in your React project. Using const is another way to do it that works better in Codepen. Do not be concerned about the difference at this time.

/* Data */
const INSTRUCTORS = [{
    name: 'Michael Steinberg',
  id: 0,
    color: 'blue',
  course: 'React',
}, {
    name: 'James Pritchett',
  id: 1,
    color: 'green',
  course: 'React',  
}, {
    name: 'Mathew Moser',
  id: 2,  
    color: 'orange',
  course: 'React',  
}, {
  name: 'Brent Schneider',
  id: 3,
  color: 'purple',
  course: 'React',  
},
{
  name: 'Olaf Minkowicz',
  id: 4,
  color: 'teal',
  course: 'React',  
}];

/* ------ START PAYING ATTENTION HERE ------------------------------------- */

/* REACT COMPONENTS */
/* A React component is able to get the application state as props from the Redux Store when it is: 
   1) Nested inside a component that is wrapped in a <Provider> that is connected to a store (created somewhere with createStore)
   2) It is subscribed to the store - you will not use store.subscribe() directly, but instead you will use connect() with mapStateToProps(), which handles subscribe() for you.
   
   If mapDispatchToProps() is also used with connect(), the component will be able to dispatch actions to the Redux Store as well. */

class App extends React.Component {
  render() {    
    return (
      <div>
        <h1>Nucamp Instructors</h1>
        <hr />
        <AddInstructor addInstructor={this.props.addInstructor} />
        <hr />
        <InstructorsList instructors={this.props.instructors} />
       </div>
     )
  };
  
}

class InstructorsList extends React.Component {
  render() {
    return (
                <ul>
                    {this.props.instructors.map((instructor) =>
                        <li key={instructor.id}>
                            <Instructor instructor={instructor} />
                        </li>
                    )}
                </ul>     
    )
  }
}
// In the AddInstructor component, the event handler has not been bound correctly. Can you fix it
class AddInstructor extends React.Component {

  constructor(props) {
    super(props);
    
    this.inputName = null;
    this.inputCourse = null;
    this.inputColor = null;
    
    this.setTextInputRef = inputElement => {
      console.log(inputElement.id);
      switch(inputElement.id) {
        case "name": this.inputName = inputElement; break;
        case "course": this.inputCourse = inputElement; break;
        case "color": this.inputColor = inputElement; break;
      }
    };   
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleSubmit(e) {
    e.preventDefault(); 
    this.props.addInstructor(this.inputName.value, this.inputCourse.value);  
    e.target.reset();
  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label for="name">Name </label>
        <input id="name" type="text" ref={this.setTextInputRef} />

        <label for="course"> Course Taught: </label>
        <input id="course" type="text" ref={this.setTextInputRef} />  

        // For this part of the challenge, add a 'Color' field to the form, next to "Course Taught"
        <label for="color"> Color: </label>
        <input id="color" type="text" ref={this.setTextInputRef} />  

        <button type="submit"> Add Instructor</button>
      </form>
     )
  }
}

class Instructor extends React.Component {
  render() {
    let style = {background: this.props.instructor.color};
    return (            
      <p style={style} className="instructor">
        {this.props.instructor.name} - {this.props.instructor.course} - {this.props.instructor.color}
      </p>
    )
  }
}


/* ACTION TYPE */
const ADD_INSTRUCTOR = 'ADD_INSTRUCTOR';

// taks 2  the action
/* ACTION */ 
const addInstructor = (name, course, color) => ({
  type: ADD_INSTRUCTOR,
  payload: {
    name: name,
    course: course,
    color: color
  }
});

// taks 2 in the reducer
/* REDUCER */

const Reducer = (state = INSTRUCTORS, action) => {
  switch (action.type) {
    case ADD_INSTRUCTOR:

      let instructor = action.payload;
      instructor.id = state.length;
      instructor.color = '#000';
      return state.concat(instructor);
    default:
      return state;
  }
};


/* STORE & CONNECTIONS TO STORE */

const store = createStore(Reducer, INSTRUCTORS);

const mapStateToProps = state => {
  return {
    instructors: state
  }
};

/* This is a slightly different syntax for mapDispatchToProps than you've seen in your course project - as a function rather than as an object. See https://react-redux.js.org/using-react-redux/connect-mapdispatch#defining-mapdispatchtoprops-as-a-function for an explanation. The syntax is not too different, and you will encounter this style in many projects. */
const mapDispatchToProps = dispatch => ({
  addInstructor: (name, course, color) => dispatch(addInstructor(name, course, color))
});


// The below line is written in a specific way to work with Codepen. Outside of Codepen, you would export default connect([args])(App). 
const AppExport = connect(mapStateToProps, mapDispatchToProps)(App);

/* FINAL RENDER - here, we have wrapped our root component with <Provider>  */
ReactDOM.render(<Provider store={store}><AppExport /></Provider>, document.getElementById("root"));

