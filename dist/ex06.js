"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function printId(id) {
    if (typeof id === "number") {
        console.log("Numeric id:", id);
        return id;
    }
    console.log("String id:", id);
    return id;
}
printId(101);
printId("guest-42");
