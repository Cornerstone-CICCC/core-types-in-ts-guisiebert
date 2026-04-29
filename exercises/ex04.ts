type Coordinate = [number, number];

/** Named MapLocation to avoid clashing with the DOM `Location` type. */
interface MapLocation {
  description: string;
  coordinate: Coordinate;
}

const coordinate: Coordinate = [12.5, -7.25];

const place: MapLocation = {
  description: "Meeting point near the waterfront",
  coordinate,
};

console.log("Location:", place);
console.log("x:", place.coordinate[0], "y:", place.coordinate[1]);

export {};
