/*
   1. Add a new function called "boop" to the prototype
      of String. This function should simply log out the
      String "Boop!".

   2. Create a new String with the value "meow" and
      assign it to a variable called "cat".

   3. Call the "boop" method on "cat" to make sure it
      works correctly.
*/

String.prototype.boop = function () {
  //  it becomes available to all string objects, "boop" is indeed a direct property of String.prototype.
  console.log("Boop");
};

const cat = "meow";

cat.boop();

// console.log(Object.getOwnPropertyNames.call(cat.__proto__)); // Object.getOwnPropertyNames.call() is not used to check if a property exists on an object. Instead, it's used to get all the property names of an object.
// console.log(Object.prototype.hasOwnProperty.call(cat, "boop")); //  false is likely due to a misunderstanding of how hasOwnProperty works. hasOwnProperty checks if the object has the specified property as its own property, not inherited ones.
// console.log("boop" in cat); // The in operator can only be used to check if a property is in an object, not in a primitive type like a string.
console.log(Object.prototype.hasOwnProperty.call(cat.__proto__, "boop")); // Outputs: true
