# 1. Ordered data

## Learning Objectives

- [ ] Explain the limitations of arrays when storing data

Let's imagine we're writing a program that involves information about a user's profile. We could store some user's profile details in an array:

```javascript
const profileData = ["Francesco", "Leoni", 33, "Manchester"];
```

At the moment, we could visualise `profileData` in a table like this:

| index | value       |
|-------|-------------|
| 0     | "Francesco" |
| 1     | "Leoni"     |
| 2     | 33          |
| 3     | "Manchester" |

Inside `profileData`** we access items using an `index`. However, with an ordered list of items we can’t tell what each item in the list represents. We only know the position of data in the array. We could access the item at index 3 to get `"Manchester"`: however, we don’t know what `"Manchester"` tells us about the user. `"Manchester"` could be the city they currently live in, it could be their city of birth, a place where they studied in the past etc. We need to know the values but also what these values represent about the user.

We might think we can just remember (and maybe write in a comment) “index 0 is the person’s first name”, but this has problems. What if we need to introduce a new piece of data? We may need to change every piece of code that uses the array. What if some of the data is optional (e.g. a middle name)? It’s also really hard for someone new to come read our code.<br>

## Keys not indexes

However, instead of ordering data with indexes, we can label data with keys.<br>

| key | value       |
|-------|-------------|
| firstName     | "Francesco" |
| lastName     | "Leoni"     |
| age     | 33          |
| cityOfResidence     | "Manchester" |

We can look up values in this table by the key. With data stored like this, we can see what values like `"Manchester"` actually mean - in this case, it refers to a city of residence for the user.

In JavaScript, we can use an object to store data in a table-like way, where we can look up data using a key. _An object_ is a collection of properties. Each property is a key-value pair. 

We can declare an object like this.

```javascript
const profileData = {
  firstName: "Franceso",
  lastName: "Leoni"
  age: 33,
  cityOfResidence: "Manchester",
};
```
# 2. Key-value pairs

## Learning Objectives
- [ ] Define an object property  
- [ ] Identify key-value pairs in an object literal  

The `profileData` object is made up of **properties**. Each **property** is an association between a key and a value.

---

```javascript
{
    firstName: "Francesco",
    lastName: "Leoni",
    age: 33,
    cityOfResidence: "Manchester"
};
```

In the object literal above, there are 4 properties. The first property consists of `firstName` and `"Francesco"`. `firstName` is the `key`, `"Francesco"` is the `value` associated with the key `firstName`.

In object literals, each key-value pair is separated by a comma.<br>

### Note

Defining properties in JavaScript object literals looks a lot like defining properties in a CSS rule:

```css
p {
    color: red;
    background-color: blue;
}
```

# 3. Accessing properties

## Learning Objectives
- [ ] Access object property values with dot notation  
- [ ] Define the term "literal"  

We've already accessed object property values. `console` is an object:

```node
Welcome to Node.js v16.19.1.
Type ".help" for more information.

console
Object [console] {
log: [Function: log],
warn: [Function: warn],
dir: [Function: dir],
time: [Function: time],
timeEnd: [Function: timeEnd],
.
.
}
```

We use dot notation to access the property value associated with a key. When we write `console.log` - think of this as saying:

“access the value associated with key of **"log"**, inside the **console** object”.

Similarly we can use dot notation to access property values stored in objects we have defined:

```javascript
const profileData = {
    firstName: "Francesco",
    lastName: "Leoni",
    age: 33,
};

console.log(profileData.firstName); // logs "Francesco"
```

Objects also allow looking up property values using square brackets, similar to arrays. Instead of an index, we use a string of the key inside the square brackets:

```javascript
const profileData = {
    firstName: "Francesco",
    lastName: "Leoni",
    age: 33,
};

console.log(profileData["firstName"]); // logs "Francesco"
```

Using dot notation or square brackets both work the same way.

### Mutation

Objects are mutable data structures. We can use the assignment operator `=` to update the value associated with a particular key. 

```javascript
const profileData = {
    firstName: "Francesco",
    lastName: "Leoni",
    age: 33,
};
profileData.firstName = "Fraz";
console.log(profileData.firstName); // firstName is now "Fraz"
```

### Predict and explain 
Predict and explain what the console output be when we run the code below runs.


```javascript
const profileData = {
    firstName: "Francesco",
    lastName: "Leoni",
    age: 33,
};

const twinData = profileData;
twinData.firstName = "Emilia";
console.log(profileData == twinData);
console.log(profileData.firstName);
```

### Properties are optional

It's possible to add properties to an object that already exists. Objects don't always have the same properties.

### Exercise

```javascript
const profileData = {
    firstName: "Francesco",
    lastName: "Leoni",
    age: 33,
};

console.log(profileData.cityOfResidence);

profileData.cityOfResidence = "Manchester";

console.log(profileData.cityOfResidence);
```

Predict and explain what the console output will be when the code above runs.

### Object literals vs objects
What's the difference between an _object_, and an _object literal_?

_An object_ is the thing we're making, which maps keys to values.

_An object literal_ is how we can write one out specifying all of its key-value pairs in one statement.

These two blocks of code construct equivalent objects:

```javascript
const object1 = {
    firstName: "Francesco",
    lastName: "Leoni",
};

const object2 = {}
object2.firstName = "Francesco";
object2.lastName = "Leoni";
```

`object1` is all constructed in one object literal. `object2` starts off with an empty object literal, and then adds some properties to it.

Note: This same terminology is used for other types:

`"abc"` is a string literal, `"a" + "b" + "c"` makes the same string, but by concatenating three string literals together.<br>

# 5. Query strings ❓🪢

## Learning Objectives
- [ ] Identify the query string section of a URL  
- [ ] Identify query parameters within a query string  
- [ ] Explain why an object is a more useful structure for storing query parameters than a string  

Let's define a problem.<br>

Websites have addresses called [URLs](https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL) like this: "https://example.com/widgets". URLs often have **query strings** too. Here is an example of a URL with a query string on the end:

[https://example.com/widgets?colour=blue&sort=newest](https://example.com/widgets?colour=blue&sort=newest)

For this URL, the **query string** is `"colour=blue&sort=newest"`. Query strings consist of **query parameters**, separated by an **ampersand character** `&`. `colour=blue` is a query parameter: we say that `colour` is the key and `blue` is the value.

URLs must always be strings. However, a string isn't a useful data type for accessing query parameters. Given a key like `colour`, accessing the value from a query string stored as a string is not straightforward. However, objects are ideal for looking up values with keys.

We're going to implement a function `parseQueryString` to extract the query parameters from a query string and store them in an object:<br>

*Given* a query string and a function `parseQueryString`,  
*When* we call `parseQueryString` with a query string,  
*Then* it should return an object with the key-value pairs.

Example : 

```javascript
parseQueryString("colour=blue&sort=newest");

// should return { colour: "blue", sort: "newest" }
```
---

# 5. Step-through-prepworkshop

[![S-T-PREPWS](https://i.ytimg.com/vi/GeKL1Mer4x8/maxresdefault.jpg)](https://youtu.be/GeKL1Mer4x8)

# 6. No parameters

Let's look at the case where the query string is an empty string.

In this case, we need to think of an output that makes sense.

We saw before that we can try to look up a property on an object which the object doesn't actually have – this will evaluate to `undefined`.

When we parse the empty query string, we want to return something where any time we ask it for the value of a key, we get back `undefined`.

An empty object behaves this way, so it makes sense to return an empty object.

Let's create a test to explore this idea. In your `prep` directory, run 
```node 
touch parse-query-string.js 
touch parse-query-string.test.js
```

Write the following test in the `parse-query-string.test.js` file.

```javascript
test("given a query string with no query parameters, returns an empty object", () => {
    const input = "";
    const currentOutput = parseQueryString(input);
    const targetOutput = {};
    
    expect(currentOutput).toEqual(targetOutput);
});
```

We can pass this test just by returning an empty object for now. We can define a function `parseQueryString` as follows:

```javascript
function parseQueryString() {  
    return {};  
}
```

We run our tests and see them pass. Great news.

# 7. Parsing a single key-value pair

## Learning Objectives
- [ ] Suggest a way of splitting a string into an array
- [ ] Destructure an array of length 2

Let's consider another test case: when the query string contains a single key-value pair.<br>

Write a test in the `parse-query-string.test.js` file:

```javascript
test("given a query string with one pair of query params, returns them in object", () => {
    const input = "fruit=banana";
    const currentOutput = parseQueryString(input);
    const targetOutput = { fruit: "banana" };

    expect(currentOutput).toEqual(targetOutput);
});
```

### Strategy
We first need to separate out the `"fruit=banana"` string so we can access `"fruit"` and `"banana"` separately. We can do this by splitting up the string by the `=` character. We can split the string into an array consisting of `['fruit', 'banana']`. Then we can grab the array's contents and assign the elements meaningful names:

```javascript
function parseQueryString(queryString) {
    const queryParams = {}

    const keyValuePair = queryString.split("=");
    const key = keyValuePair[0]; // key will hold 'fruit'
    const value = keyValuePair[1]; // value will hold 'banana'
    queryParams.key = value;

    return queryParams;
}
```

An equivalent, but more concise way to do this uses array destructuring to create new variables and assign them values, based on values in an array.<br>

This code does the same thing as the previous code:<br>

```javascript
function parseQueryString(queryString) {
    const queryParams = {}

    const [key, value] = queryString.split("="); // key will hold 'fruit', value will hold 'banana'
    queryParams.key = value;

    return queryParams;
}
```
### Check it
Check the implementation of `parseQueryString` above in [Pythontutor](https://pythontutor.com/render.html#mode=display) to see why it isn’t working properly.

# 8. Access with variables

## Learning Objectives
- [ ] Explain when square bracket notation may be necessary to access an object
- [ ] Explain why a previous test breaks once the implementation changes

We can mutate an object using dot notation. However, if we look at the return value in the previous implementation we get `{key: "banana"}`. Let's take another look at our current implementation of `parseQueryString`:

```javascript
function parseQueryString(queryString) {
    const queryParams = {}

    const [key, value] = queryString.split("="); // will hold ['fruit', 'banana']
    queryParams.key = value; // mutate the queryParams object

    return queryParams;
}
```

On line 4, we're declaring an identifier called `key`. When `parseQueryString` is called with `"fruit=banana"` then `key` will be assigned the value of `"fruit"`.

We want to add a property name to the object that is the value of the `key` variable and not the string `"key"`. We can do this with square bracket notation:

```javascript
function parseQueryString(queryString) {
  const queryParams = {};

  const [key, value] = queryString.split("="); // will hold ['fruit', 'banana']
  queryParams[key] = value; // will set the property name with the value of the key variable

  return queryParams;
}
```

We can’t use dot syntax if we don’t know what the name of the key is going to be. Square bracket notation is more powerful than dot notation, because it lets us use any expression as a key.<br>

### Tests

We’ve currently got the following test suite:

```javascript
describe("parseQueryString()", () => {
  test("given a queryString with no query parameters, returns an empty object", function () {
    const input = "";
    const currentOutput = parseQueryString(input);
    const targetOutput = {};

    expect(currentOutput).toEqual(targetOutput);
  });
  test("given a queryString with one pair of query params, returns them in object form", function () {
    const input = "fruit=banana";
    const currentOutput = parseQueryString(input);
    const targetOutput = { fruit: "banana" };

    expect(currentOutput).toEqual(targetOutput);
  });
});
```
Sometimes when we’re solving a problem, it can be useful to work out different cases (like empty query strings, or non-empty query strings) and work out how to solve them separately, then come back when we think we understand the cases and work out how to put the solutions together into one function. This often is useful when there are really different cases to consider.

Most of the time, though, it’s useful to try to keep all of our existing tests passing as we cover more cases. If we wanted to do that here, we could make our function be something like:

```js
function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }

  const [key, value] = queryString.split("="); // will hold ['fruit', 'banana']
  queryParams[key] = value; // will set the property name with the value of the key variable

  return queryParams;
}
```
Here, we only add a key to the object if there was actually something to add - we return early if there’s no extra work to do.

### Explain

We’ve got a situation where the first test case (for an empty string) is no longer working. Explain why this test case is no longer passing for the first test case. Pythontutor will help you to explain why!

# 9. Parsing multiple parameters

## Learning Objectives
- [ ] Describe how to extend a strategy for one item to multiple items

Let's consider the case when there are multiple query parameters in the query string.

---

### 💡 Recall
In the case when the query string has multiple query parameters, then each key-value pair is separated by an ampersand character `&`.

Write this test in the `parse-query-string.test.js` file.

```javascript
test("given a query string with multiple key-value pairs, returns them in object", () => {
    const input = "sort=lowest&colour=yellow";
    const currentOutput = parseQueryString(input);
    const targetOutput = { sort: "lowest", colour: "yellow" };
    expect(currentOutput).toEqual(targetOutput);
});
```

### Strategy
We've already worked out how to update the query params object given a single key-value pair in the query string.<br>

To work out our strategy, let's consider what we already know how to do. We already know how to take a key-value pair as a string, and add it to our object.<br>

Key insight: If we can do it for one pair, we can try doing it for a list of pairs too.<br>

So we’re missing a step - breaking up the string of multiple key-value pairs into an array where each element is a single key-value pair. If we do this, then we can iterate over the array, and do what we already know how to do on each key-value pair.<br>

Our strategy will be to break the query string apart into an array of key-value pairs. Once we’ve got an array we can try iterating through it and storing each key value pair inside the `queryParams` object.

Let’s start with the first sub-goal.

### 🎯 Sub-goal 1: split the query string into an array of key-value pairs

Query strings with multiple key-value pairs use `&` as a separator e.g. à. We want to split `sort=lowest&colour=yellow` into `["sort=lowest", "colour=yellow"]`. We can achieve this by calling `split` with the `"&"` separator.

```javascript
function parseQueryString(queryString) {
  // suppose queryString has a value of "sort=lowest&colour=yellow"
  const queryParams = {};
  const keyValuePairs = queryString.split("&"); // keyValuePairs will point to ["sort=lowest", "colour=yellow"]
}
```

### 🎯 Sub-goal 2: add each key-value pair in the array to the query params object

Once we’ve got an array we can iterate through the key-value pairs and update the `queryParams` object each time (like we did when we just had one key-value pair).

```javascript
function parseQueryString(queryString) {
  // assume queryString has a value of "sort=lowest&colour=yellow"
  const queryParams = {};
  const keyValuePairs = queryString.split("&"); // keyValuePairs will point to ["sort=lowest", "colour=yellow"]

  for (const pair of keyValuePairs) {
    const [key, value] = pair.split("=");
    queryParams[key] = value;
  }

  return queryParams;
}
```

### Check it
Check the implementation of `parseQueryString` above in [Pythontutor](https://pythontutor.com/render.html#mode=display) and pay attention to how the `queryParams` object is updated.

___

Now that we’ve worked out how to solve this problem in the case of multiple query parameters, let’s integrate that solution into our previous implementation, to make sure it works for all cases.<br>

We can keep our `if (queryString.length === 0) {` check from before. We still need it because `split` on an empty string still returns an empty string. If we don’t have this special case, we’ll try to parse the empty string, probably incorrectly.<br>

We don’t need to do anything special for the one-value case, as an array containing one element gets iterated the same as an array of multiple elements:<br>

```javascript
function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }
  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    const [key, value] = pair.split("=");
    queryParams[key] = value;
  }

  return queryParams;
}
```

When we’re solving problems involving several values, often we need slightly differently handling for the cases when there are 0, 1, or more than 1 values. In our example here, we need to treat 0 values specially (if the query string is empty, we return early), but we can handle 1 and more than 1 the same way.<br>

When you’re breaking down problems, think to yourself: What are special cases we may need to handle differently?<br>

# 10. Objects Workshop  📼

## Learning Objectives
- [ ] Practice solving problems with objects

[![objectsWorkshop](https://i.ytimg.com/vi/CHu7iEmuZV4/maxresdefault.jpg)](https://youtu.be/CHu7iEmuZV4)

To get the most out of this workshop - don’t just watch, code along. You can use the code samples below as a starting point.<br>

## Exercise 1

```javascript
// Write a function that returns true if I can eat the ice cream
//  The function has 1 parameter representing an ice cream object
//  I can eat the ice cream if it is lactose-free and contains less than 10 grams of sugar

function canEat(iceCream) {}

const iceCream1 = {
  flavour: "Vanilla",
  lactoseFree: false,
  gramsOfSugarPerScoop: 12,
};

const iceCream2 = {
  flavour: "Mango Sorbet",
  lactoseFree: true,
  gramsOfSugarPerScoop: 10,
};

const iceCream3 = {
  flavour: "Coconut",
  lactoseFree: true,
  gramsOfSugarPerScoop: 8,
};

const iceCream4 = {
  flavour: "Strawberry",
  lactoseFree: false,
  gramsOfSugarPerScoop: 8,
};

const iceCream5 = {
  flavour: "Lemon Sorbet",
  lactoseFree: true,
  gramsOfSugarPerScoop: 7,
};

console.log(canEat(iceCream1)); // what should this output?
console.log(canEat(iceCream2)); // what should this output?
console.log(canEat(iceCream3)); // what should this output?
console.log(canEat(iceCream4)); // what should this output?
console.log(canEat(iceCream5)); // what should this output?
```

## Exercise 2

```javascript
// Write a function called `getCheapest` that will take 2 book objects as parameters
//  and return the name of the cheaper book

const fictionBook = {
  title: "1984",
  author: "George Orwell",
  category: "Dystopian Fiction",
  subcategory: "Political",
  cost: 9.99,
};

const productivityBook = {
  title: "Atomic Habits",
  author: "James Clear",
  category: "Self-Help",
  subcategory: "Productivity",
  cost: 16.2,
};

// this should output 1984
console.log(getCheapest(fictionBook, productivityBook));
```

## Exercise 3

```javascript
// Write a function that takes an array of ice cream objects as a parameter
//	and returns an array of the names of ice creams I can eat
//  I can eat the ice cream if it is lactose-free and contains less than 10 grams of sugar
//  Use the solution from Exercise 1 to help you
function whichIceCreamsCanIEat(iceCreams) {}

const iceCream1 = {
  flavour: "Vanilla",
  lactoseFree: false,
  gramsOfSugarPerScoop: 12,
};

const iceCream2 = {
  flavour: "Mango Sorbet",
  lactoseFree: true,
  gramsOfSugarPerScoop: 10,
};

const iceCream3 = {
  flavour: "Coconut",
  lactoseFree: true,
  gramsOfSugarPerScoop: 8,
};

const iceCream4 = {
  flavour: "Strawberry",
  lactoseFree: false,
  gramsOfSugarPerScoop: 8,
};

const iceCream5 = {
  flavour: "Lemon Sorbet",
  lactoseFree: true,
  gramsOfSugarPerScoop: 7,
};

const allIceCreams = [iceCream1, iceCream2, iceCream3, iceCream4, iceCream5];

const iceCreamsICanEat = whichIceCreamsCanIEat(allIceCreams);
console.log(iceCreamsICanEat); // what should this output?
```

