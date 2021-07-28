import { getMessage } from "./message.js";

class SomeClass {
    #someProp = true;
    private someEventHandler = () => {
        // Arrow functions as class properties should be ok...
    };

    someMethod() {
        // ...as well as regular functions.
        // See styles/prefer-arrow.js for an explanation.
    }
}

console.log(getMessage(), SomeClass);
