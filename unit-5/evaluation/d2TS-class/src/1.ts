//literals
let gender : "male"| "female" | "others"="male"

//enums
//group of closely related constants

// Numeric enums
enum Days{
    Mon,
    Tue,
    Wed,
    Thurs,
}
  
let days_of_week = Days
console.log(days_of_week)

enum StatusCodes {
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    BadRequest = 400
  }
  // logs 404
  console.log(StatusCodes.NotFound);
  // logs 200
  console.log(StatusCodes.Success);

//tuples
//A tuple is a typed array with a pre-defined length and types for each index.
//Tuples are great because they allow each element in the array to be a known type of value.  
//order is important  use when data is related to each other

// Array with exact 2 elements
let a: [string, string] = ["Hi", "Bye"];

// 2 D array
let arr: Array<[number, number]> = [
  [1, 1],
  [2, 2],
];