// prettier-ignore
import { a } from "./other.js";
// eslint-disable-next-line no-duplicate-imports
import { b } from "./other.js";

// eslint-disable-next-line array-callback-return, unicorn/no-array-reduce
[1, 2, 3].reduce((memo, item, index) => {
  memo[item] = index;
});

for (const number of [1, 2, 3]) {
  // eslint-disable-next-line no-await-in-loop
  await Promise.resolve(number);
}

(class {
  constructor() {
    // eslint-disable-next-line no-constructor-return
    return 1;
  }
})();

// eslint-disable-next-line no-promise-executor-return
void new Promise(() => 2);

// eslint-disable-next-line no-self-compare
if (a === a) {
  void (a, b);
}

// eslint-disable-next-line no-template-curly-in-string
void "Hello ${name}!";

// eslint-disable-next-line no-unmodified-loop-condition
while (a) {
  void a;
}

// eslint-disable-next-line no-unreachable-loop
for (let index = 0; index < 3; index++) {
  break;
}

// eslint-disable-next-line no-useless-assignment
let id = "x1234";
id = 2;
void id;

try {
  /* empty */
  // eslint-disable-next-line unicorn/catch-error-name
} catch (bla) {
  void bla;
}

let c = 1;
// eslint-disable-next-line unicorn/prefer-top-level-await
(async () => {
  // eslint-disable-next-line require-atomic-updates
  c += await c;
})();
