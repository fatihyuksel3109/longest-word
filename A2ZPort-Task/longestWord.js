function longestWord(sentence) {
  const words = sentence.split(" ");
  let longestWord = "";
  let longestWordVowelCount = 0;

  for (const word of words) {
    const sanitizedWord = word.replace(/[^a-zA-Z\s]/g, "");
    const vowelMatches = sanitizedWord.match(/[aeiou]/g);

    if (vowelMatches) {
      if (
        sanitizedWord.length > longestWord.length ||
        (sanitizedWord.length === longestWord.length &&
          vowelMatches.length > longestWordVowelCount)
      ) {
        longestWord = sanitizedWord;
        longestWordVowelCount = vowelMatches.length;
      }
    }
  }
  return longestWord;
}

const sentence1 = "Hello, this is a test";
const sentence2 = "In this sentence, there are multiple long words like 'elephant' and 'extraordinary'.";
const sentence3 = "Testing with special characters: @#& @$½>£#>$#$£#$";
const sentence4 =
  "Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers";

console.log(longestWord(sentence4));
