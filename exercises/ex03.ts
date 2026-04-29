interface CustomerInformation {
  fullName: string;
  email: string;
}

interface PaymentInformation {
  isPayed: boolean;
  totalPrice: number;
}

interface Reservation {
  customerInformation: CustomerInformation;
  paymentInformation: PaymentInformation;
  checkIn: Date;
  checkOut: Date;
  pricePerDay: number;
}

function nightsBetween(checkIn: Date, checkOut: Date): number {
  const msPerDay = 1000 * 60 * 60 * 24;
  const diff = checkOut.getTime() - checkIn.getTime();
  return Math.max(1, Math.ceil(diff / msPerDay));
}

function totalForStay(reservation: Reservation): number {
  const nights = nightsBetween(reservation.checkIn, reservation.checkOut);
  return nights * reservation.pricePerDay;
}

const reservations: Reservation[] = [
  {
    customerInformation: { fullName: "Sam Lee", email: "sam@example.com" },
    paymentInformation: { isPayed: true, totalPrice: 0 },
    checkIn: new Date("2026-04-01"),
    checkOut: new Date("2026-04-03"),
    pricePerDay: 120,
  },
  {
    customerInformation: { fullName: "Jordan Kim", email: "jordan@example.com" },
    paymentInformation: { isPayed: false, totalPrice: 0 },
    checkIn: new Date("2026-05-10"),
    checkOut: new Date("2026-05-15"),
    pricePerDay: 95,
  },
];

for (const r of reservations) {
  const calculated = totalForStay(r);
  r.paymentInformation.totalPrice = calculated;
}

const newReservation: Reservation = {
  customerInformation: { fullName: "Riley Chen", email: "riley@example.com" },
  paymentInformation: { isPayed: true, totalPrice: 0 },
  checkIn: new Date("2026-06-01"),
  checkOut: new Date("2026-06-04"),
  pricePerDay: 110,
};
newReservation.paymentInformation.totalPrice = totalForStay(newReservation);
reservations.push(newReservation);

for (const res of reservations) {
  console.log("Guest email:", res.customerInformation.email);
  console.log("Full reservation:", res);
}

export {};
