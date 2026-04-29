"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const reservation = {
    customerInformation: {
        fullName: "Alex Rivera",
        email: "alex@example.com",
        phone: "+1-555-0100",
    },
    paymentInformation: {
        method: "card",
        lastFourDigits: "4242",
    },
    checkIn: "2026-04-10",
    checkOut: "2026-04-14",
};
console.log("Reservation:", reservation);
