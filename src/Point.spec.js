import Point from "./Point.js";

describe("Points should", () => {
  test("calculate distance between P1[0,5] and P2[0,10] being equal to 5", () => {
    expect(Point.distance(new Point(0, 5), new Point(0, 10))).toEqual(5);
  });

  test("calculate distance between P1[5,5] and P2[10,10] being equal to 7.0710678118654755", () => {
    expect(Point.distance(new Point(5, 5), new Point(10, 10))).toEqual(
      7.0710678118654755
    );
  });
});
