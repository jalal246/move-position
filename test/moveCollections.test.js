// @ts-check

const { expect } = require("chai");

const { move, moveMultiArr, moveMultiIndex } = require("../lib");

describe("move", () => {
  it("with mutation", () => {
    const INPUT = ["a1", "b1", "c1"];

    const result = move(INPUT, { from: 0, to: 2 });

    const expected = ["b1", "c1", "a1"];

    expect(result).to.have.ordered.members(expected);
    expect(INPUT).to.have.ordered.members(expected);
  });

  it("without mutation", () => {
    const INPUT = ["a1", "b1", "c1"];

    const result = move(INPUT, { from: 0, to: 2, isMutate: false });

    const expected = ["b1", "c1", "a1"];

    expect(result).to.have.ordered.members(expected);
    expect(INPUT).to.not.equal(expected);
    expect(INPUT).to.have.ordered.members(["a1", "b1", "c1"]);
  });
});

describe("moveMultiIndex", () => {
  describe("Do not mutate", () => {
    it("Enable Swap - default", () => {
      const INPUT = ["first", "second", "third", "fourth"];

      const movingMap = [{ from: 0, to: 3 }];

      const expected = ["fourth", "second", "third", "first"];

      const result = moveMultiIndex(INPUT, movingMap, { isSwap: true });

      expect(result).to.have.ordered.members(expected);
      expect(INPUT).to.not.equal(expected);
    });

    it("Enable Duplicate ", () => {
      const INPUT = ["first", "second", "third", "fourth"];

      const movingMap = [{ from: 0, to: 3 }];

      const expected = ["first", "second", "third", "first"];

      const result = moveMultiIndex(INPUT, movingMap);

      expect(result).to.have.ordered.members(expected);
      expect(INPUT).to.not.equal(expected);
    });

    it("Enable Nullish", () => {
      const INPUT = ["first", "second", "third", "fourth"];

      const movingMap = [{ from: 0, to: 3 }];

      const expected = [null, "second", "third", "first"];

      const result = moveMultiIndex(INPUT, movingMap, {
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

      const result = moveMultiIndex(INPUT, movingMap, {
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

      const result = moveMultiIndex(INPUT, movingMap, { isMutate: true });

      expect(result).to.have.ordered.members(expected);
      expect(INPUT).to.have.ordered.members(expected);
    });

    it("Enable Swap", () => {
      const INPUT = ["first", "second", "third", "fourth"];

      const movingMap = [{ from: 0, to: 3 }];

      const expected = ["fourth", "second", "third", "first"];

      const result = moveMultiIndex(INPUT, movingMap, {
        isMutate: true,
        isSwap: true,
      });

      expect(result).to.have.ordered.members(expected);
      expect(INPUT).to.have.ordered.members(expected);
    });

    it("Enable Nullish", () => {
      const INPUT = ["first", "second", "third", "fourth"];

      const movingMap = [{ from: 0, to: 3 }];

      const expected = [null, "second", "third", "first"];

      const result = moveMultiIndex(INPUT, movingMap, {
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

      const result = moveMultiIndex(INPUT, movingMap, {
        isMutate: true,
        fill: "emptiness",
      });

      expect(result).to.have.ordered.members(expected);
      expect(INPUT).to.have.ordered.members(expected);
    });
  });
});

//   it("moves multiple arrays with mutation (default)", () => {
//     const input1 = ["a1", "b1", "c1"];
//     const input2 = ["a2", "b2", "c2"];
//     const total = [input1, input2];

//     const result = moveMultiArr(total, { from: 2, to: 0 });

//     const expectedInput1 = ["c1", "a1", "b1"];
//     const expectedInput2 = ["c2", "a2", "b2"];

//     expect(result[0]).to.have.ordered.members(expectedInput1);
//     expect(result[1]).to.have.ordered.members(expectedInput2);
//     expect(input1).to.have.ordered.members(result[0]);
//   });

//   it("moves multiple arrays without mutation", () => {
//     const input1 = ["a1", "b1", "c1"];
//     const input2 = ["a2", "b2", "c2"];
//     const total = [input1, input2];
//     const result = moveMultiArr(total, 2, 0, false);
//     const expectedInput1 = ["c1", "a1", "b1"];
//     expect(result[0]).to.have.deep.members(expectedInput1);
//     expect(input1).to.not.have.ordered.members(result[0]);
//   });
//   it("tests with movingMap: Apply multi changes to same array", () => {
//     const input = [
//       "folo-forms",
//       "folo-layout",
//       "folo-utils",
//       "folo-withcontext",
//     ];
//     const movingMap = [
//       { from: 2, to: 0 },
//       { from: 3, to: 1 },
//       { from: 1, to: 2 },
//       { from: 0, to: 3 },
//     ];
//     const result = moveMultiIndex(input, movingMap);
//     const expected = [
//       "folo-utils",
//       "folo-withcontext",
//       "folo-layout",
//       "folo-forms",
//     ];
//     expect(result).to.have.deep.members(expected);
//   });
