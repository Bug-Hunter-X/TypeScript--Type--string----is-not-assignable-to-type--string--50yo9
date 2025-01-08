function greeter(person: string): string {
  return "Hello, " + person;
}

function greeterArray(people: string[]): string {
  return "Hello, " + people.join(', ');
}

let user = ["Jane User", "John User"];
console.log(greeter(user[0])); // Correct: Accessing the first element of the array
console.log(greeterArray(user)); // Correct: Passing the array to a function that handles arrays