import { compareTriplets } from "./compare-the-triplets";

describe("compareTriplets", () => {
  it("Sample Input 0", () => {
    const [aliceScore, bobScore] = compareTriplets([5, 6, 7], [3, 6, 10]);

    expect(aliceScore).toEqual(1);
    expect(bobScore).toEqual(1);
  });

  it("Sample Input 1", () => {
    const [aliceScore, bobScore] = compareTriplets([17, 28, 30], [99, 16, 8]);

    expect(aliceScore).toEqual(2);
    expect(bobScore).toEqual(1);
  });
});
