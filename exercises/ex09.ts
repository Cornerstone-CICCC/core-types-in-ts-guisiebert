function throwError(message: string): never {
  throw new Error(message);
}

try {
  throwError("Something went wrong");
} catch (e) {
  console.log("Caught:", e instanceof Error ? e.message : e);
}

function logOnly(message: string): void {
  console.log(message);
  // `void` means callers should ignore any return. Returning a value is a type error:
  // return 1; // TS2322: Type 'number' is not assignable to type 'void'.
}

logOnly("void function: no return value");

export {};
