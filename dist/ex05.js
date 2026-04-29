"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Day;
(function (Day) {
    Day[Day["Sunday"] = 0] = "Sunday";
    Day[Day["Monday"] = 1] = "Monday";
    Day[Day["Tuesday"] = 2] = "Tuesday";
    Day[Day["Wednesday"] = 3] = "Wednesday";
    Day[Day["Thursday"] = 4] = "Thursday";
    Day[Day["Friday"] = 5] = "Friday";
    Day[Day["Saturday"] = 6] = "Saturday";
})(Day || (Day = {}));
const today = Day.Tuesday;
console.log("Current day (enum value):", today);
const springClassic = {
    name: "Spring Classic",
    participants: ["A", "B", "C", "D"],
    first: "A",
    second: "B",
    third: "C",
    day: Day.Saturday,
};
console.log("Race:", springClassic);
