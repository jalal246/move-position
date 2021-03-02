// @ts-check

const { expect } = require("chai");

const { flatten } = require("../lib");

describe("flatten", () => {
  it("Should Pass", () => {
    const res = flatten([[1, [2, 3]], [1, [2, 3]], 0]);

    expect(res).to.have.ordered.members([1, 2, 3, 1, 2, 3, 0]);
  });

  it("Should Pass", () => {
    const res = flatten([
      [1, 2, 3],
      [1, 2, 3],
    ]);

    expect(res).to.have.ordered.members([1, 2, 3, 1, 2, 3]);
  });

  it("Should Pass", () => {
    const res = flatten([
      [
        ["a", ["b", ["c"]]],
        ["a", "b", "c"],
      ],
    ]);

    expect(res).to.have.ordered.members(["a", "b", "c", "a", "b", "c"]);
  });

  it("Should Pass", () => {
    const res = flatten([
      [2, [4, 6], 8, [[10]]],
      [2, 4, 6, 8, 10],
    ]);

    expect(res).to.have.ordered.members([2, 4, 6, 8, 10, 2, 4, 6, 8, 10]);
  });

  it("Should Pass", () => {
    const res = flatten([[1, [2, [3, [4, [5]]]]], [1, 2, 3, [4, [5]]], 2]);

    expect(res).to.have.ordered.members([1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 2]);
  });
});
