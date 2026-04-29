function displayValue(value: unknown): void {
  if (typeof value === "string") {
    console.log("String value:", value);
  } else if (typeof value === "number") {
    console.log("Number value:", value);
  } else {
    console.log("Unsupported type for displayValue");
  }
}

function printCharsIfString(value: unknown): void {
  if (typeof value === "string") {
    for (const ch of value) {
      console.log(ch);
    }
  }
}

displayValue("hello");
displayValue(7);
displayValue(true);

printCharsIfString("hi");
printCharsIfString(123);

export {};
