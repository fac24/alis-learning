//each phoneme individually be on seperate tiles
// we also need the word so that they match.
export const phonemeData = [
  { level: 1, phonemes: ["c", "a", "t"], word: "cat" },
  { level: 2, phonemes: ["a", "n", "t"], word: "ant" },
  { level: 3, phonemes: ["d", "o", "g"], word: "dog" },
  { level: 4, phonemes: ["r", "a", "t"], word: "rat" },
  { level: 5, phonemes: ["b", "a", "t"], word: "bat" },
  { level: 6, phonemes: ["fr", "o", "g"], word: "frog" },
  { level: 7, phonemes: ["f", "i", "sh"], word: "fish" },
  { level: 8, phonemes: ["cr", "a", "b"], word: "crab" },
  { level: 9, phonemes: ["sh", "ee", "p"], word: "sheep" },
  { level: 10, phonemes: ["d", "u", "ck"], word: "duck" },
];

// A very simple way to encode game clue/answer/choice data:
// 1: {
// answer: ['c', 'a', 't'],
// clue: ['', 'a', 't'], // Empty elements in the array indicate missing grapheme
// grapheme_choices: ['c', 'f', 'm'], // These choices should be informed by experts?
// stars: 1, // Easier rounds earn fewer stars
// Do we want an image for each word?
// },
// We can encode graphemes that have more than one letter:
// 2: {
//     answer: ['ch', 'a', 't'],
//     clue: ['', 'a', 't'],
//     grapheme_choices: ['c', 'ch', 'm'],
//     stars: 2, // Harder rounds earn more stars
// },

// A "very hard" round like this can't be adequately encoded by our simple approach:
// 3: {
//     answer: ['ch', 'e', 'f'],
//     clue: ['', 'e', 'f'],
//     // Because the strings 'ch' and 'ch' are the same!
//     grapheme_choices: ['ch', 's', 'ch'],
// },
// Do we want to encode phonemes in our data?! Probably not, it's a lot more work!
// (We'd need another data store linking phonemes to graphemes?)
// 4: {
//     answer: ['/sh/', '/e/', '/f/'],
//     clue: ['', 'e', 'f'],
//     grapheme_choices: ['/k/', '/s/', '/sh/'],
// },
