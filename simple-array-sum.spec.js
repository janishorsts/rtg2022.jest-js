// import { simpleArraySum } from "./simple-array-sum";
const { simpleArraySum } = require("./simple-array-sum");

describe("simpleArraySum", () => {
  it("Sample Input", () => {
    const actual = simpleArraySum([1, 2, 3, 4, 10, 11]);
    const expected = 31;

    expect(actual).toBe(expected);
  });
});
