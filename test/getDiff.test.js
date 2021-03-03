// @ts-check

const { expect } = require("chai");

const { getDiff } = require("../lib");

describe("getDiff", () => {
  it("Should Pass", () => {
    const res = getDiff(["a", "b", "c"], ["b", "c", "e"]);
    expect(res).to.have.ordered.members(["a"]);
  });

  it("Should Pass", () => {
    const res = getDiff(["x", "b", "c", "e", "y"], ["b", "x", "e"]);
    expect(res).to.have.ordered.members(["c", "y"]);
  });

  it("Should Pass", () => {
    const res = getDiff(["x", "x"], ["a", "b", "c"]);
    expect(res).to.have.ordered.members(["x", "x"]);
  });

  it("Should Pass", () => {
    const res = getDiff(["x"], ["a", "b", "c"]);
    expect(res).to.have.ordered.members(["x"]);
  });

  it("Should Pass", () => {
    const res = getDiff(["x", "b", "b", "b", "c", "e", "y"], ["x", "e"]);
    expect(res).to.have.ordered.members(["b", "b", "b", "c", "y"]);
  });

  it("Should Pass", () => {
    const res = getDiff(["a", "b", "b", "b", "b"], ["b"]);
    expect(res).to.have.ordered.members(["a"]);
  });

  it("Should Pass", () => {
    const res = getDiff(["a"], ["a", "b", "c"]);
    expect(res).to.have.ordered.members([]);
  });

  it("Should Pass", () => {
    const res = getDiff(["a", "b", "c"], []);
    expect(res).to.have.ordered.members(["a", "b", "c"]);
  });

  it("Should Pass", () => {
    const res = getDiff(["a", "b", "c"], ["a"], ["b"]);

    expect(res).to.have.ordered.members(["c"]);
  });
});
