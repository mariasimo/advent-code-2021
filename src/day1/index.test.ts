import {
  checkDepthChange,
  countTimesDepthIncrease,
  mapArrayInSum,
} from "./utils";
import { readInputAsArray } from "../utils/index";

const input = readInputAsArray(1);

describe("Day 1: Sonar Sweep", () => {
  describe("Part 1", () => {
    describe("Check measurements", () => {
      test("If new measure is higher, should return 'increased'", () => {
        expect(checkDepthChange(5, 10)).toBe("increased");
      });
      test("If new measure is lower, hould return 'decreased'", () => {
        expect(checkDepthChange(10, 5)).toBe("decreased");
      });
      test("If no changes, should return 'noChange'", () => {
        expect(checkDepthChange(5, 5)).toBe("noChange");
      });
    });
    describe("Count depth increase", () => {
      test("Should count times an item in array is higher than the previous one", () => {
        expect(countTimesDepthIncrease(["5", "10", "20", "30"])).toBe(3);
      });
      test("Should count times an item in array is higher than the previous one", () => {
        expect(countTimesDepthIncrease(["5", "1", "200", "30"])).toBe(1);
      });
    });
    describe("Should return correct solution", () => {
      test("Should count times an item in array is higher than the previous one", () => {
        expect(countTimesDepthIncrease(["5", "10", "20", "30"])).toBe(3);
      });
      test("Should count times an item in array is higher than the previous one", () => {
        expect(countTimesDepthIncrease(input)).toBe(1482);
      });
    });
  });
  describe("Part 2", () => {
    describe("Array mapping", () => {
      test("Map array in the sums of is items in groups of three", () => {
        const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const output = [6, 9, 12, 15, 18, 21, 24, 27];
        expect(mapArrayInSum(input)).toStrictEqual(output);
      });
    });
  });
});
