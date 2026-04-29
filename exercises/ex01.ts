interface CustomerInformation {
  fullName: string;
  email: string;
  phone: string;
}

interface PaymentInformation {
  method: "card" | "cash" | "transfer";
  lastFourDigits?: string;
}

interface Reservation {
  customerInformation: CustomerInformation;
  paymentInformation: PaymentInformation;
  checkOut: string;
  checkIn: string;
}

const reservation: Reservation = {
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

export {};
