// @ts-check

const { expect } = require("chai");

const { move } = require("../lib");

describe("move", () => {
  describe("Do not mutate", () => {
    it("Enable Swap - default", () => {
      const INPUT = ["first", "second", "third", "fourth"];

      const movingMap = [{ from: 0, to: 3 }];

      const expected = ["fourth", "second", "third", "first"];

      const result = move(INPUT, movingMap, { isSwap: true });

      expect(result).to.have.ordered.members(expected);
      expect(INPUT).to.not.equal(expected);
    });

    it("Enable Duplicate ", () => {
      const INPUT = ["first", "second", "third", "fourth"];

      const movingMap = [{ from: 0, to: 3 }];

      const expected = ["first", "second", "third", "first"];

      const result = move(INPUT, movingMap);

      expect(result).to.have.ordered.members(expected);
      expect(INPUT).to.not.equal(expected);
    });

    it("Enable Nullish", () => {
      const INPUT = ["first", "second", "third", "fourth"];

      const movingMap = [{ from: 0, to: 3 }];

      const expected = [null, "second", "third", "first"];

      const result = move(INPUT, movingMap, {
        isDuplicate: false,
        isSwap: false,
      });

      expect(result).to.have.ordered.members(expected);
      expect(INPUT).to.not.equal(expected);
    });

    it("Enable fill", () => {
      const INPUT = ["first", "second", "third", "fourth"];

      const movingMap = [{ from: 0, to: 3 }];

      const expected = ["emptiness", "second", "third", "first"];

      const result = move(INPUT, movingMap, {
        fill: "emptiness",
      });

      expect(result).to.have.ordered.members(expected);
      expect(INPUT).to.not.equal(expected);
    });
  });

  describe("Mutate Input", () => {
    it("Enable Duplicate - default", () => {
      const INPUT = ["first", "second", "third", "fourth"];

      const movingMap = [{ from: 0, to: 3 }];

      const expected = ["first", "second", "third", "first"];

      const result = move(INPUT, movingMap, { isMutate: true });

      expect(result).to.have.ordered.members(expected);
      expect(INPUT).to.have.ordered.members(expected);
    });

    it("Enable Swap", () => {
      const INPUT = ["first", "second", "third", "fourth"];

      const movingMap = [{ from: 0, to: 3 }];

      const expected = ["fourth", "second", "third", "first"];

      const result = move(INPUT, movingMap, {
        isMutate: true,
        isSwap: true,
      });

      expect(result).to.have.ordered.members(expected);
      expect(INPUT).to.have.ordered.members(expected);
    });

    it("Enable Nullish", () => {
      const INPUT = ["first", "second", "third", "fourth"];

      const movingMap = { from: 0, to: 3 };

      const expected = [null, "second", "third", "first"];

      const result = move(INPUT, movingMap, {
        isMutate: true,
        isDuplicate: false,
        isSwap: false,
      });

      expect(result).to.have.ordered.members(expected);
      expect(INPUT).to.have.ordered.members(expected);
    });

    it("Enable fill", () => {
      const INPUT = ["first", "second", "third", "fourth"];

      const movingMap = [{ from: 0, to: 3 }];

      const expected = ["emptiness", "second", "third", "first"];

      const result = move(INPUT, movingMap, {
        isMutate: true,
        fill: "emptiness",
      });

      expect(result).to.have.ordered.members(expected);
      expect(INPUT).to.have.ordered.members(expected);
    });
  });
});
