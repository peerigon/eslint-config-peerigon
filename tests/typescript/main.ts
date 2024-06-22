import { getMessage } from "./message.js";
// Check if import attributes are detected and formatted correctly
import test from "./test.json" with { type: "json" };

// eslint-disable-next-line camelcase
const snake_case = 123;

class SomeClass {
  #someProp = true;
  private someEventHandler = () => {
    // Arrow functions as class properties should be ok...
  };

  someMethod() {
    // ...as well as regular functions.
    // See styles/prefer-arrow.js for an explanation.

    console.log(this.#someProp);
  }

  // Should be an error
  // eslint-disable-next-line camelcase, @typescript-eslint/no-empty-function
  snake_case() {}
}

console.log(getMessage(), SomeClass, snake_case, test);
