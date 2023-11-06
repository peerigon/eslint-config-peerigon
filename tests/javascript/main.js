import { getMessage } from "./message.js";

class SomeClass {
    #someProp = true;

    logSomeProp() {
        console.log(this.#someProp);
    }
}

console.log(getMessage(), SomeClass);
