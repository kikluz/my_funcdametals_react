const hotel = {
	id: 0,
	city: "Mexico",
	name: "Hotel Mexico"
};
// -----this is the old way
// -----Pullout this properties into a new variable
// const id = hotel.id;
// ----print out 0;
// console.log(id);
// const city = hotel.city;

// const name = hotel.name; 
// const { id, city, name } = hotel;

// ---In a function 
function logHotelInfo (hotel){
	const id = hotel.id;
	const city = hotel.city;
	const name = hotel.name;
	console.log(`${id}: ${name} located in ${city}`);
}

// called the function
console.log(logHotelInfo(hotel));

// JavaScript: Object Destructuring
// an Object its going to pass into it and will have this props.
function logHotelInfo2({id, name, city}){
	// passing the same hotel Objects
	console.log(`${id}: ${name} located in ${city}`);
}
console.log(logHotelInfo2(hotel));


