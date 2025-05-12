// EVERY ITEM THAT ISN'T A PRIMITIVE VALUE (BOOLEAN, STRING, NUMBER, ETC) IS CALLED AN OBJECT
console.log('----------FIRST OBJECT: ASSOCIATION ARRAYS----------');
// ASSOCIATION ARRAYS: Map that associates a certain id to a value
// Every characteristic within the array is called a PROPERTY
let example = {
    age: 23,
    name: 'Kyle',
    isStudent: true,
    grades: {
        maths: 9,
        physics: 8,
        language: 9,
    },
    toBeDeleted: true,
    calculateProm: function() {
        return ((this.grades.language + this.grades.physics + this.grades.maths) / 3);
    }
};
// We can call to an especific property by executing "arrayName"."propertyName"
console.log(example.name);    // -> 'Kyle'

// Nested Objects 
console.log(example.grades.physics);    // -> '8'

// If an function is contained on an association array, then it is called a METHOD
console.log(example.calculateProm());

// A object can be deleted by...
delete example.toBeDeleted;
console.log(example.toBeDeleted);

// If an object doesn't exist, it can be asigned by
if (!example.toBeDeleted) {
    example.toBeDeleted = false;
}
console.log(example.toBeDeleted);

// The ennumeration for ... in to print name, typeof and value
for (let key in example.grades) {
    console.log(`${key} : ${example.grades[key]}`);
 }

 // We can copy the reference (address) of an existing object...
 let newArrayToReference = {}
 newArrayToReference = example;
 console.log(newArrayToReference.age)

 // Or we can copy all the content from the original object within the new array by using object.assign(recievingArray, donorArray)
let newArrayToContent = {};
Object.assign(newArrayToContent, example);
console.log(newArrayToContent.isStudent);

// We can add some specific property to the reciever 
let newArrayNewProperty = {};
Object.assign(newArrayNewProperty, example, {isNew: true});
console.log(newArrayNewProperty.isNew);

console.log('----------SECOND OBJECT: CONSTRUCTOR----------');
// A constructor is a "template" used to create multiple objects with the same structure easily
function StudentProfile(age, name, isStudent, mathsGrade, physicsGrade, languageGrade) {
    this.age = age;
    this.name = name;
    this.isStudent = isStudent;
    this.grades = {
        maths: mathsGrade,
        physics: physicsGrade,
        language: languageGrade
    };
    this.calculateProm = function() {
        return ((this.grades.language + this.grades.physics + this.grades.maths) / 3);
    }
}

// To create a new object with the previously created constructor, we may need to do this:
const student = new StudentProfile(24, 'Erika', true, 7, 8, 9);
console.log(student.calculateProm());

// Adding a new method to an already existing constructor is possible by using the .prototype mtethod with the following structure objectName.prototype.newMethodName
StudentProfile.prototype.isAnAdult = function() {
    if (this.age>17) {
        return true;
    } else {
        return false;
    }
} 
console.log(student.isAnAdult());

// A fancier way of creating a brand new constructor will be:
class constructorClient {
    constructor(isAConstructor, numberOfConstructor, name) {
        this.isAConstructor = isAConstructor;
        this.numberOfConstructor = numberOfConstructor;
        this.name = name;
        this.messageForInitialization = function() {
            return (`Hello ${this.name} your constructor number is ${this.numberOfConstructor} and it is set to be ${this.isAConstructor}`);
        }
    }
}

const firstConstructor = new constructorClient (true, 1, 'Chloe');
console.log(firstConstructor.messageForInitialization());

// It is possible to inherit the properties from an object to another by following this structure
class constructorAdmin extends constructorClient { // Use "extends" followed by the name of the donor object
    constructor(isAdmin, secretPassword, isAConstructor, numberOfConstructor, name) {
        super(isAConstructor, numberOfConstructor, name); // Completely inherits the objects
        this.isAdmin = isAdmin;
        this.secretPassword = secretPassword;
        this.messageForInitialization = function() {
            return (`Admin ${this.name}, welcome! Your secret password is ${this.secretPassword}.`);
        }
    }
}

const firstAdmin = new constructorAdmin(true, 'secret123', true, 2, 'Alex');
console.log(firstAdmin.messageForInitialization());