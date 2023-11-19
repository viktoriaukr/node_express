const timeToWords = require("./timeWord");

describe("#timeword", () => {
  test("it is a function", () => {
    expect(typeof timeToWords).toBe("function");
  });
  test("it converts time to words test 1", () => {
    Date.prototype.toLocaleTimeString = jest.fn(() => "six ten am");
    expect(timeToWords("06:10")).toBe("six ten am");
  });
  test("it converts time to words test 2", () => {
    Date.prototype.toLocaleTimeString = jest.fn(() => "midnight");
    expect(timeToWords("00:00")).toBe("midnight");
  });
  test("it converts time to words test 3", () => {
    Date.prototype.toLocaleTimeString = jest.fn(() => "eleven twenty three pm");
    expect(timeToWords("23:23")).toBe("eleven twenty three pm");
  });
});
