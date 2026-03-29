// Below, we have two functions which have the same aim.
// Both functions take a word as a parameter.
// If the function has been called with that word before (regardless of case), the previous version of the word is returned.
// So if you called the function with "hello", then "HELLO", the second call will return "hello".
// If the word has not been used before, it will just be returned as-is.

// One of these functions has side-effects.
// When you call it, it does something other than just returning a value based only on its parameters.
// Answer: getPreviousCaseOfWordOne has side effects
// because it changes the external array "previousWords" every time it is called

// The other doesn't have side effects.
// When you call it with the same arguments, it always does exactly the same thing,
// and you can see everything it does in its return value.
// Answer: getPreviousCaseOfWordTwo has NO side effects
// because it only uses what is passed to it as parameters - nothing outside changes

// Which function has side-effects? Which doesn't?
// getPreviousCaseOfWordOne → HAS side effects (modifies external array)
// getPreviousCaseOfWordTwo → NO side effects (pure function)

const previousWords = [];

function getPreviousCaseOfWordOne(word) {
    for (const previousWord of previousWords) {
        if (previousWord.toLowerCase() === word.toLowerCase()) {
            return previousWord;
        }
    }
    previousWords.push(word); // ← side effect! changes external array
    return word;
}

function getPreviousCaseOfWordTwo(word, words) {
    for (const previousWord of words) {
        if (previousWord.toLowerCase() === word.toLowerCase()) {
            return previousWord;
        }
    }
    return word;
}

// Try to write tests for both functions:

// Test for getPreviousCaseOfWordOne:
const result1 = getPreviousCaseOfWordOne("hello");
console.log(result1 === "hello" ? "✅ Test 1 passed" : "❌ Test 1 failed");

const result2 = getPreviousCaseOfWordOne("HELLO");
console.log(result2 === "hello" ? "✅ Test 2 passed" : "❌ Test 2 failed");

// Test for getPreviousCaseOfWordTwo:
const words = [];
const result3 = getPreviousCaseOfWordTwo("hello", words);
console.log(result3 === "hello" ? "✅ Test 3 passed" : "❌ Test 3 failed");

words.push("hello");
const result4 = getPreviousCaseOfWordTwo("HELLO", words);
console.log(result4 === "hello" ? "✅ Test 4 passed" : "❌ Test 4 failed");

// Which was easier to test?
// getPreviousCaseOfWordTwo was easier to test
// because we control the words array ourselves

// What issues did you run into writing tests?
// getPreviousCaseOfWordOne was harder to test
// because it depends on external state (previousWords array)
// the result changes depending on what was called before!
