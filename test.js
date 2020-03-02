const { expect } = require("chai");

const { move, moveMultiple } = require("./index");

describe("move-position", () => {
  it("returns the same input when params is invalid", () => {
    const input = ["a1", "b1", "c1"];

    const result1 = move(input, "0", "2");
    expect(result1).to.have.ordered.members(input);

    const result2 = move(input, 0, 10);
    expect(result2).to.have.ordered.members(input);
  });

  it("move with mutation (default)", () => {
    const input = ["a1", "b1", "c1"];

    const result = move(input, 0, 2);

    const expected = ["b1", "c1", "a1"];
    expect(result).to.have.ordered.members(expected);
    expect(input).to.have.ordered.members(expected);
  });

  it("move without mutation", () => {
    const input = ["a1", "b1", "c1"];

    const result = move(input, 0, 2, false);

    const expected = ["b1", "c1", "a1"];
    expect(result).to.have.ordered.members(expected);
    expect(input).to.have.ordered.members(input);
  });

  it("move multiple arrays with mutation (default)", () => {
    const input1 = ["a1", "b1", "c1"];
    const input2 = ["a2", "b2", "c2"];

    const total = [input1, input2];

    const result = moveMultiple(total, 2, 0);

    const expectedInput1 = ["c1", "a1", "b1"];
    const expectedInput2 = ["c2", "a2", "b2"];

    expect(result[0]).to.have.ordered.members(expectedInput1);
    expect(result[1]).to.have.ordered.members(expectedInput2);
    expect(input1).to.have.ordered.members(result[0]);
  });

  it("move multiple arrays without mutation", () => {
    const input1 = ["a1", "b1", "c1"];
    const input2 = ["a2", "b2", "c2"];

    const total = [input1, input2];

    const result = moveMultiple(total, 2, 0, false);

    const expectedInput1 = ["c1", "a1", "b1"];

    expect(result[0]).to.have.deep.members(expectedInput1);
    expect(input1).to.not.have.ordered.members(result[0]);
  });
});
