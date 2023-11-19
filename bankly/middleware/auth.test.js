const jwt = require("jsonwebtoken");
const { authUser } = require("./auth");

const { SECRET_KEY } = require("../config");

const userToken = jwt.sign({ username: "u1", admin: false }, SECRET_KEY);
const u2Token = jwt.sign({ username: "u1", admin: false }, "wrong");

/*
Second test proves that jwt.decode() is not going to be able to verify properly if all given information is correct. This can fail the code completely.
*/
describe("Auth", () => {
  test("works", () => {
    expect.assertions(3);
    const req = { body: { _token: userToken } };
    const res = {};
    const next = function (err) {
      expect(err).toBeFalsy();
    };
    authUser(req, res, next);
    expect(req.curr_username).toBe("u1");
    expect(req.curr_admin).toBe(false);
  });
  test("fails: invalid token", () => {
    expect.assertions(1);
    const req = { body: { _token: u2Token } };
    const res = {};
    const next = function (err) {
      expect(err).toBeFalsy();
    };
    authUser(req, res, next);
  });
});
