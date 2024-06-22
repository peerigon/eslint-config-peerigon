interface SomeInterface {
  // Should not complain about the method signature style here because
  // it's sometimes necessary to define these overloads for 3rd party packages
  someMethod(param: boolean): void;
  someMethod(param1: number, param2: number): void;
}

declare module "some-module" {
  // Should not complain about export default
  export default SomeInterface;
}
