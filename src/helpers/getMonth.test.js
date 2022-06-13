import getMonth from "./getMonth";
const { expect } = require("chai");

describe("should correct format its month format", function () {
  beforeEach(function () {
    expect(getMonth).to.be.a("function");
  });

  it("should return 1 for string '2005-01-22T00:13:05.729Z'", function () {
    const output = getMonth("2005-01-22T00:13:05.729Z");
    expect(output).to.be.eql("1");
  });

  it("should return 10 for string '1992-10-08T00:11:05.729Z'", function () {
    const output = getMonth("1992-10-08T00:11:05.729Z");
    expect(output).to.deep.equal("10");
  });

  it("should return 9 for string '1956-09-11T00:11:05.729Z'", function () {
    const output = getMonth("1956-09-11T00:11:05.729Z");
    expect(output).to.deep.equal("9");
  });

  it("should return 12 for string '1983-12-01T00:11:05.729Z'", function () {
    const output = getMonth("1983-12-01T00:11:05.729Z");
    expect(output).to.deep.equal("12");
  });
});
