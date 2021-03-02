// @ts-check

const { expect } = require("chai");

const { toArray } = require("../lib");

describe("toArray", () => {
  it("with undefined", () => {
    const res = toArray(undefined);
    expect(res).to.have.ordered.members([]);
  });

  it("with null", () => {
    const res = toArray(null);
    expect(res).to.have.ordered.members([]);
  });

  it("with number", () => {
    const res = toArray(0);
    expect(res).to.have.ordered.members([0]);
  });

  it("with an array", () => {
    const res = toArray([1, 2]);
    expect(res).to.have.ordered.members([1, 2]);
  });
});
