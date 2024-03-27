function isPalindrome(word) {
  //Convert the word to lowercase to hadnle case-insensitive palidromes
  const lowercaseWord = word.toLowerCase();
  //Initialize two pointers, one at the start and one at the end of the word
  let start = 0;
  let end = lowercaseWord.length - 1;
  //Iterate until the pointers meet in the middle
  while (start < end) {
    if (lowercaseWord[start] !== lowercaseWord[end]) {
      return false;
    }

    //Move the pointers toward the middle
    start++;
    end--;
  }
  return true;//All cahracters matched, it's a palindrome
}

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;