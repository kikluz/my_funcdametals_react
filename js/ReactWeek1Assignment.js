// class Student {
// 	constructor(name, email, community){
// 		this.name = name;
// 		this.email = email;
// 		this.community = community;
// 	}
// }

// class Bootcamp {
// 	constructor(name, level, students = []) {
// 		this.name = name;
// 		this.level = level;
// 		this.students = students;
// 	}
// 	registerStudent(student) {
// 		if (this.students.filter(student => student.email === student.email).length) {
// 			console.log(`This ${student.email} is already registered`);
// 		} else {
// 			console.log(` Registering ${student.email} to the bootcamp Web Dev Fundamentals.`);
// 			this.student.push(student);
// 		}
// 		return this.student;
// 	}
// }

// // create an Ojbects from the bootcamp class
// const webDevFundamentals = new Bootcamp("web development fundametals", "Beginners");
// // type the name of the Object just created in the console
// // webDevFundamentals
// // create an other Object from bootcamp class
// const fullstack = new Bootcamp("full stack web and mobile development", "Advenced");

// // created an object using the Student class
// const Neo = new Student("Neo", "neo@gmail.com", "Seattle");
// const Lily = new Student("Lily", "lily@gmail.com", "L.A");
// const Dave = new Student("Dave", "dave@gmail.com", "N.Y");

// // Use the registerStudent() method
// // webDevFundamentals.registerStudent(Neo);