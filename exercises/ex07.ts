type Direction = "left" | "right";

function printDirection(direction: Direction): void {
  if (direction === "left") {
    console.log("Turning left");
  } else {
    console.log("Turning right");
  }
}

printDirection("left");
printDirection("right");

export {};
