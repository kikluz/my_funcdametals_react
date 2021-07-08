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



