import { collection, onSnapshot } from "firebase/firestore";
import db from "../firebase";

import getFirebaseEmployees from "./getFirebaseEmployees";
const { expect } = require("chai");

describe("should correct format its month format", function () {
  beforeEach(function () {
    expect(getFirebaseEmployees).to.be.a("function");
  });

  it("should return employees from Firebase database", function () {});
  const res = onSnapshot(collection(db, "employees"), (snapshot) => {
    snapshot.docs.map((doc) => ({
      ...doc.data(),
    }));
    expect(res[0]).to.deep.equal({
      birthMonth: res.birthMonth,
      birthday: res.birthday,
      day: res.day,
      department: res.department,
      email: res.email,
      image: res.image,
      name: res.name,
      phone: res.phone,
    });
  });
});
