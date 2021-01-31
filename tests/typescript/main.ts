import { getMessage } from "./message.js";

class SomeClass {
    #someProp = true;
    private someMethod = () => {};
}

console.log(getMessage(), SomeClass);
