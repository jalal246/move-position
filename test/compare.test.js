// @ts-check

const { expect } = require("chai");

const { compare } = require("../lib");

describe("compare", () => {
  it("Should Pass", () => {
    const res = compare(["a", "b", "c"], ["b", "c", "e"]);
    expect(res).to.have.ordered.members(["a"]);
  });

  it("Should Pass", () => {
    const res = compare(["x", "b", "c", "e", "y"], ["b", "x", "e"]);
    expect(res).to.have.ordered.members(["c", "y"]);
  });

  it("Should Pass", () => {
    const res = compare(["x", "x"], ["a", "b", "c"]);
    expect(res).to.have.ordered.members(["x", "x"]);
  });

  it("Should Pass", () => {
    const res = compare(["x"], ["a", "b", "c"]);
    expect(res).to.have.ordered.members(["x"]);
  });

  it("Should Pass", () => {
    const res = compare(["x", "b", "b", "b", "c", "e", "y"], ["x", "e"]);
    expect(res).to.have.ordered.members(["b", "b", "b", "c", "y"]);
  });

  it("Should Pass", () => {
    const res = compare(["a", "b", "b", "b", "b"], ["b"]);
    expect(res).to.have.ordered.members(["a"]);
  });

  it("Should Pass", () => {
    const res = compare(["a"], ["a", "b", "c"]);
    expect(res).to.have.ordered.members([]);
  });

  it("Should Pass", () => {
    const res = compare(["a", "b", "c"], []);
    expect(res).to.have.ordered.members(["a", "b", "c"]);
  });

  it("Should Pass", () => {
    const res = compare(["a", "b", "c"], ["a"], ["b"]);

    expect(res).to.have.ordered.members(["c"]);
  });
});
