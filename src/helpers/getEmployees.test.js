import getEmployees from "./getEmployees";
const { expect } = require("chai");
const axios = require("axios");

describe("should return employees API", function () {
  beforeEach(function () {
    expect(getEmployees).to.be.a("function");
  });

  it("should handle URL in async/await based way", async function () {
    const res = await axios.get("https://randomuser.me/api/?results=100");
    expect(res.data.results[0]).to.deep.equal({
      cell: res.data.results[0].cell,
      dob: {
        date: res.data.results[0].dob.date,
        age: res.data.results[0].dob.age,
      },
      email: res.data.results[0].email,
      gender: res.data.results[0].gender,
      id: {
        name: res.data.results[0].id.name,
        value: res.data.results[0].id.value,
      },
      location: {
        coordinates: {
          latitude: res.data.results[0].location.coordinates.latitude,
          longitude: res.data.results[0].location.coordinates.longitude,
        },
        city: res.data.results[0].location.city,
        state: res.data.results[0].location.state,
        country: res.data.results[0].location.country,
        postcode: res.data.results[0].location.postcode,
        street: {
          name: res.data.results[0].location.street.name,
          number: res.data.results[0].location.street.number,
        },
        timezone: {
          description: res.data.results[0].location.timezone.description,
          offset: res.data.results[0].location.timezone.offset,
        },
      },
      login: {
        uuid: res.data.results[0].login.uuid,
        username: res.data.results[0].login.username,
        password: res.data.results[0].login.password,
        salt: res.data.results[0].login.salt,
        md5: res.data.results[0].login.md5,
        sha1: res.data.results[0].login.sha1,
        sha256: res.data.results[0].login.sha256,
      },
      name: {
        title: res.data.results[0].name.title,
        first: res.data.results[0].name.first,
        last: res.data.results[0].name.last,
      },
      nat: res.data.results[0].nat,
      phone: res.data.results[0].phone,
      picture: {
        large: res.data.results[0].picture.large,
        medium: res.data.results[0].picture.medium,
        thumbnail: res.data.results[0].picture.thumbnail,
      },
      registered: {
        date: res.data.results[0].registered.date,
        age: res.data.results[0].registered.age,
      },
    });
  });
});
