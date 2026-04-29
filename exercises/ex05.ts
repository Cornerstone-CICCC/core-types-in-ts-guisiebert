enum Day {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
}

interface Race {
  name: string;
  participants: string[];
  first: string;
  second: string;
  third: string;
  day: Day;
}

const today: Day = Day.Tuesday;
console.log("Current day (enum value):", today);

const springClassic: Race = {
  name: "Spring Classic",
  participants: ["A", "B", "C", "D"],
  first: "A",
  second: "B",
  third: "C",
  day: Day.Saturday,
};

console.log("Race:", springClassic);

export {};
