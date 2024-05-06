import { getMessage } from "./message.js";
// Check if import attributes are detected and formatted correctly
import test from "./test.json" with { type: "json" };

class SomeClass {
    #someProp = true;

    logSomeProp() {
        void this.#someProp;
    }
}

void getMessage();
void SomeClass;
void test;

// new Promise((test) => {});
