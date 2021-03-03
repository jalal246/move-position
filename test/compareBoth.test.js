// @ts-check

const { expect } = require("chai");

const { compareBoth } = require("../lib");

describe("compareBoth", () => {
  it("Should Pass", () => {
    const res = compareBoth(["a", "b", "c"], ["b", "c", "e"]);
    expect(res).to.have.ordered.members(["a", "e"]);
  });

  it("Should Pass", () => {
    const res = compareBoth(["x", "b", "c", "e", "y"], ["b", "x", "e"]);
    expect(res).to.have.ordered.members(["c", "y"]);
  });

  it("Should Pass", () => {
    const res = compareBoth(["x", "x"], ["a", "b", "c"]);
    expect(res).to.have.ordered.members(["x", "x", "a", "b", "c"]);
  });

  it("Should Pass", () => {
    const res = compareBoth(["x"], ["a", "b", "c"]);
    expect(res).to.have.ordered.members(["x", "a", "b", "c"]);
  });

  it("Should Pass", () => {
    const res = compareBoth(["x", "b", "b", "b", "c", "e", "y"], ["x", "e"]);
    expect(res).to.have.ordered.members(["b", "b", "b", "c", "y"]);
  });

  it("Should Pass", () => {
    const res = compareBoth(["a", "b", "b", "b", "b"], ["b"]);
    expect(res).to.have.ordered.members(["a"]);
  });

  it("Should Pass", () => {
    const res = compareBoth(["a"], ["a", "b", "c"]);
    expect(res).to.have.ordered.members(["b", "c"]);
  });

  it("Should Pass", () => {
    const res = compareBoth(["a", "b", "c"], []);
    expect(res).to.have.ordered.members(["a", "b", "c"]);
  });

  it("Should Pass", () => {
    const res = compareBoth(["a", "b", "c"], ["a"], ["b"]);

    expect(res).to.have.ordered.members(["c"]);
  });
});
