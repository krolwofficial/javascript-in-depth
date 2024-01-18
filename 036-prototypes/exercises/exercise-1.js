/*
    1. Log out all the properties within the Object
       prototype. (Only it's own properties)

    2. Log out all the properties within the Array
       prototype. (Only it's own properties)

    3. Log out all the properties within the Array
       prototype's prototype.

    4. Does this make sense? Why?

   JS is a prototype-based language.
   This means that objects can inherit method and functions from other objects.

*/

console.log("start");

console.log(Object.getOwnPropertyNames(Object.prototype));
console.log(Object.getOwnPropertyNames(Array.prototype));
console.log(Object.getOwnPropertyNames(Array.prototype.__proto__));

// console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(Array)));
// console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(Array.__proto__)));
// console.log("_______");
// console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(Object)));
// console.log("_______");
// console.log(Object);
// console.log(this);
// console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(this)));

// console.log("================");
// console.log(Object.getOwnPropertyNames(Array.__proto__));

// If Array's prototype is an Object why it has methods available for a function
