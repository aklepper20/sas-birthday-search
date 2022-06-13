import mergeSort from "./mergeSort";
const { expect } = require("chai");

describe("should return sorted array of objects by day of birth", function () {
  it("should return [{day: '10', { birthday: '1979-10-22', day: 22 }, { birthday: '1979-10-12', day: 12 }}]", function () {
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

  it("should return [{ birthMonth: 2, birthday: '1979-02-01', day: 1 }, { birthday: '1979-10-22', day: 19,  name: 'Walker Johnner',department: 'Human Resources' }]", function () {
    const output = mergeSort([
      { day: 31, phone: "(755)-313-9538" },
      { birthMonth: 2, birthday: "1979-02-01", day: 1 },
      {
        birthday: "1979-10-22",
        day: 19,
        name: "Walker Johnner",
        department: "Human Resources",
      },
    ]);
    expect(output).to.deep.equal([
      { birthMonth: 2, birthday: "1979-02-01", day: 1 },
      {
        birthday: "1979-10-22",
        day: 19,
        name: "Walker Johnner",
        department: "Human Resources",
      },
      { day: 31, phone: "(755)-313-9538" },
    ]);
  });

  it("should return [{ day: 6, department: 'Technology', birthday: '1966-06-09' },  { birthday: '1979-15-12', email: 'robert15@gmail.com', day: 15 }, { name: 'Ada Lovelace', email:'Ada@yahoo.com', department: 'Sales', day: 17 }]", function () {
    const output = mergeSort([
      {
        name: "Ada Lovelace",
        email: "Ada@yahoo.com",
        department: "Sales",
        day: 17,
      },
      { birthday: "1979-15-12", email: "robert15@gmail.com", day: 15 },
      { day: 6, department: "Technology", birthday: "1966-06-09" },
    ]);
    expect(output).to.deep.equal([
      { day: 6, department: "Technology", birthday: "1966-06-09" },
      { birthday: "1979-15-12", email: "robert15@gmail.com", day: 15 },
      {
        name: "Ada Lovelace",
        email: "Ada@yahoo.com",
        department: "Sales",
        day: 17,
      },
    ]);
  });
});
