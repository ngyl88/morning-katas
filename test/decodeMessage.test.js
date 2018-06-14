const decodeMessage = require("../src/decodeMessage");
const assertEquals = require("../assert-helper");

assertEquals(decodeMessage('b'), 'y');
assertEquals(decodeMessage('y'), 'b');
assertEquals(decodeMessage('yb'), 'by');
assertEquals(decodeMessage('hi'), 'sr');
assertEquals(decodeMessage('svl'), 'heo');
assertEquals(decodeMessage('abcdefghijklmnopqrstuvwxyz'), 'zyxwvutsrqponmlkjihgfedcba');
assertEquals(decodeMessage('this message'), 'gsrh nvhhztv');
assertEquals(decodeMessage('r slkv mlylwb wvxlwvh gsrh nvhhztv'), 'i hope nobody decodes this message');
assertEquals(decodeMessage('gsv jfrxp yildm ulc qfnkh levi gsv ozab wlt'), 'the quick brown fox jumps over the lazy dog');

// Test cases: actual --> expected
// decodeMessage("a") --> "z"
// decodeMessage("z") --> "a"
// decodeMessage("b") --> "y"
// decodeMessage("y") --> "b"
// decodeMessage("ab") --> "zy"
// decodeMessage("sr") --> "hi"
// decodeMessage("svool") --> "hello"

// decodeMessage("gsrh nvhhztv") --> "this message"
// decodeMessage("r slkv mlylwb wvxlwvh gsrh nvhhztv") --> "i hope nobody decodes this message"
