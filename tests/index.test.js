const palindromeCheck = require("../index");

describe("palindrome check", () => {
  test("A man, a plan, a cat, a ham, a yak, a yam, a hat, a canal-Panama!", () => {
    expect(palindromeCheck("A man, a plan, a cat, a ham, a yak, a yam, a hat, a canal-Panama!")).toBeTruthy();
  });

  test("not a palindrome", () => {
    expect(palindromeCheck("not a palindrome")).toBeFalsy();
  });

  test("Are we not drawn onward to new era?", () => {
    expect(palindromeCheck("Are we not drawn onward to new era?")).toBeTruthy();
  });

  test("Empty string", () => {
    expect(palindromeCheck("")).toBeTruthy();
  });

  test("A nut for a jar of tuna.", () => {
    expect(palindromeCheck("A nut for a jar of tuna.")).toBeTruthy();
  });

  test("Never Odd Or Even", () => {
    expect(palindromeCheck("Never Odd Or Even")).toBeTruthy();
  });

  test("tissit, tosi isot tissit.", () => { // ;)
    expect(palindromeCheck("Tissit, tosi isot tissit.")).toBeTruthy();
  });

  test("asd*&^@£PL{'';lSDJAKDNAjasda09diA", () => {
    expect(palindromeCheck("asd*&^@£PL{'';lSDJAKDNAjasda09diA")).toBeFalsy();
  });

  test("Doc, Note: I Dissent. A Fast Never Prevents A Fatness. I Diet On Cod.", () => {
    expect(palindromeCheck("Doc, Note: I Dissent. A Fast Never Prevents A Fatness. I Diet On Cod.")).toBeTruthy();
  });

  test("ss", () => {
    expect(palindromeCheck("ss")).toBeTruthy();
  });

  test("aBbA", () => {
    expect(palindromeCheck("ABbA")).toBeTruthy();
  });

  test("121", () => {
    expect(palindromeCheck(121)).toBeTruthy();
  });

  test("1", () => {
    expect(palindromeCheck(1)).toBeTruthy();
  });

  test("12", () => {
    expect(palindromeCheck(12)).toBeFalsy();
  });

  test("-1", () => {
    expect(palindromeCheck(-1)).toBeTruthy();
  });

  test("0", () => {
    expect(palindromeCheck(0)).toBeTruthy();
  });

  test("undefined", () => {
    expect(palindromeCheck(undefined)).toBeFalsy();
  });

  test("null", () => {
    expect(palindromeCheck(null)).toBeFalsy();
  });

  test("NaN", () => {
    expect(palindromeCheck(NaN)).toBeFalsy();
  });

  test("true", () => {
    expect(palindromeCheck(true)).toBeFalsy();
  });

  test("false", () => {
    expect(palindromeCheck(false)).toBeFalsy();
  });

  test("14128239847239479234", () => {
    expect(palindromeCheck(14128239847239479234)).toBeFalsy();
  });
});
