import mergeSort from "./mergeSort";
const { expect } = require("chai");

describe("should return sorted array of objects by day of birth", function () {
  it("should sort array of objects", function () {
    const output = mergeSort([
      { day: 10, phone: "(755)-313-9538" },
      { birthday: "1979-10-22", day: 22 },
      { birthday: "1979-10-12", day: 12 },
    ]);
    expect(output).to.deep.equal([
      { day: 10, phone: "(755)-313-9538" },
      { birthday: "1979-10-12", day: 12 },
      { birthday: "1979-10-22", day: 22 },
    ]);
  });
});
