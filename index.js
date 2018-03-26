function testPalindrome(string) {

  // validate input
  if (typeof string !== "string" || typeof number !== "number") return false;

  // algorithm
  let pattern = string.replace(/[^a-z0-9]/gi, "").toLowerCase();
  let length = pattern.length;
  let halfLength = Math.floor(length / 2);
  for (let i = 0; i < halfLength; i += 1) {
    if (pattern[i] !== pattern[length-i-1]) return false;
  }
  return true;
}

testPalindrome("A man, a plan, a cat, a ham, a yak, a yam, a hat, a canal-Panama!");
