/* Write a function to decode a given input string.
Each letter is paired with the letter that it coincides with when the alphabet is reversed.
For example: "a" is encoded with "z", "b" with "y", "c" with "x", etc
Spaces are not encoded/decoded. For example: "gsrh nvhhztv" will be decoded as "this message"
*/


const getMappedChar = char => {
    if(char === ' ') return ' ';
    const alphaSequence = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const originalIndex = alphaSequence.indexOf(char);
    return alphaSequence.reverse()[originalIndex];
}

const decodeMessage = string => {
  return string
    .split("")
    .map(char => getMappedChar(char))
    .join("");
};

module.exports = decodeMessage;
