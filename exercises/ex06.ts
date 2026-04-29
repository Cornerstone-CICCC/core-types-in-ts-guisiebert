function printId(id: number | string): number | string {
  if (typeof id === "number") {
    console.log("Numeric id:", id);
    return id;
  }
  console.log("String id:", id);
  return id;
}

printId(101);
printId("guest-42");

export {};
