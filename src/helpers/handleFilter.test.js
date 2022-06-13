import handleFilter from "./handleFilter";
const { expect } = require("chai");

describe("should filter out employees by their birth month", function () {
  beforeEach(function () {
    expect(handleFilter).to.be.a("function");
  });

  it("should return all employees born in July (07)", function () {
    const output = handleFilter(
      [
        {
          day: 6,
          birthMonth: 9,
          department: "Technology",
          birthday: "1966-06-09",
        },
        {
          birthday: "1979-15-12",
          email: "robert15@gmail.com",
          day: 15,
          birthMonth: 9,
        },
        {
          name: "Ada Lovelace",
          birthMonth: 7,
          email: "Ada@yahoo.com",
          department: "Sales",
          day: 17,
        },
        {
          name: "Walt Disney",
          birthMonth: 12,
          email: "WD@aol.com",
          department: "Innovation",
          day: 5,
        },
      ],
      7
    );
    expect(output).to.deep.equal([
      {
        name: "Ada Lovelace",
        birthMonth: 7,
        email: "Ada@yahoo.com",
        department: "Sales",
        day: 17,
      },
    ]);
  });

  it("should return all employees born in March(03)", function () {
    const output = handleFilter(
      [
        {
          name: "Ada Lovelace",
          birthMonth: 3,
          email: "Ada@yahoo.com",
          department: "Sales",
          day: 6,
        },
        {
          day: 3,
          birthMonth: 10,
          department: "Technology",
          birthday: "1966-10-03",
        },
        {
          birthday: "1979-21-03",
          email: "robert15@gmail.com",
          day: 21,
          birthMonth: 3,
        },
      ],
      3
    );
    expect(output).to.deep.equal([
      {
        name: "Ada Lovelace",
        birthMonth: 3,
        email: "Ada@yahoo.com",
        department: "Sales",
        day: 6,
      },
      {
        birthday: "1979-21-03",
        email: "robert15@gmail.com",
        day: 21,
        birthMonth: 3,
      },
    ]);
  });

  it("should return all employees born in January(01)", function () {
    const output = handleFilter(
      [
        {
          day: 1,
          birthMonth: 1,
          department: "Technology",
          birthday: "1966-01-01",
        },
        {
          birthday: "1979-26-01",
          email: "allyRonald@gmail.com",
          day: 26,
          birthMonth: 1,
        },
        {
          name: "Jimmy Johns",
          birthMonth: 3,
          email: "JJ@yahoo.com",
          department: "Operations",
          day: 6,
        },
        {
          name: "Samantha Brickers",
          birthMonth: 1,
          email: "Brickers@yahoo.com",
          department: "Sales",
          day: 13,
        },
        {
          day: 20,
          birthMonth: 1,
          department: "Human Resources",
          birthday: "1966-20-01",
        },
        {
          birthday: "1979-09-01",
          email: "robert15@gmail.com",
          day: 9,
          birthMonth: 1,
        },
      ],
      1
    );
    expect(output).to.deep.equal([
      {
        day: 1,
        birthMonth: 1,
        department: "Technology",
        birthday: "1966-01-01",
      },
      {
        birthday: "1979-26-01",
        email: "allyRonald@gmail.com",
        day: 26,
        birthMonth: 1,
      },
      {
        name: "Samantha Brickers",
        birthMonth: 1,
        email: "Brickers@yahoo.com",
        department: "Sales",
        day: 13,
      },
      {
        day: 20,
        birthMonth: 1,
        department: "Human Resources",
        birthday: "1966-20-01",
      },
      {
        birthday: "1979-09-01",
        email: "robert15@gmail.com",
        day: 9,
        birthMonth: 1,
      },
    ]);
  });
});
