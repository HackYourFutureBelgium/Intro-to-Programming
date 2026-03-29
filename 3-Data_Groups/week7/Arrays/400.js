
// the head of an array is the first element of an array
// the tail of an array is the last element of an array


const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

function getHead(arr) {
    return arr[0];   
};

function getTail(arr) {
    return arr[arr.length - 1];
};

console.log(`The first letter of the alphabet is ${getHead(alphabet)}`);
console.log(`The last letter of the alphabet is ${getTail(alphabet)}`);
console.log(alphabet.length);
// Explain why alphabet length is now 26 (after the fix):
// Before the fix: shift() and pop() were removing elements → length was 24
// After the fix: arr[0] and arr[arr.length-1] only read without removing → length is 26

// How to return same values without changing length:
// Use arr[0] instead of shift()
// Use arr[arr.length - 1] instead of pop()