# Preparation 
## 1. Ordinal Numbers
### Learning Objectives 
- [ ] Convert positions to ordinal numbers

Let’s imagine you’re working in a 10 storey office building. There are 10 different levels. We need a way to describe each level of the building. We start on the ground floor of the building - level with the ground. We use an ordinal number to describe the other levels in the building.

To form the ordinal number we take a number and add the correct suffix which comes from the word used to describe each number, like first, second, third etc. Therefore, numbers like 1st, 2nd, 3rd are called *ordinal numbers*. 

### Specification
Let’s consider a function called `getOrdinalNumber` that needs to work like this:

- it takes one argument - a whole number, like 1, 2, 3, etc
- it returns a string that represents the ordinal number

```js 
getOrdinalNumber(1); // returns "1st";
getOrdinalNumber(2); // returns "2nd";
getOrdinalNumber(6); // returns "6th";
``` 
The requirements above form a specification. _A specification_ is a set of requirements for how a piece of software should behave. Now we have a specification for how the function should work we can create many cases showing how we expect the function `getOrdinalNumber` to behave when it is called with different inputs.

---

## 2. Testing Frameworks
### Learning Objectives 
- [ ] Explain why we need to use testing frameworks

To help us think about the requirements of `getOrdinalNumber`, let’s consider one case:

#### Case 1
```js
const input = 1;
const currentOutput = getOrdinalNumber(input);
const targetOutput = "1st";
```

Case 1 states that when `getOrdinalNumber` is called with an input of `1`, it has a target output of `“1st”`. Our first step is to check that `getOrdinalNumber` works as we have stated.

We have used `console.assert` to write assertions to write tests for our code before. `console.assert` is a useful building block, but it is limited. Now we will write tests using a test framework. 
A __test framework__ is a set of tools we can use to build tests efficiently and to check our code is behaving in a particular way.

__🔑 A test is any piece of code that runs an assertion on the code we’re testing.__

We want our tests to:
- be easy to write
- be easy to read
- give clear feedback on what the current output is
- give clear feedback on what the target output is
- allows us to easily write multiple test cases
  
_A test framework_ will help us build test cases like this.

---

## 3. Starting a Project
### Learning Objectives 
- [ ] Identify a package.json
- [ ] Explain the purpose of a package.json

Let’s start a brand new project in a directory called `ordinal-testing-example` and create a file called `package.json` in our project.

1. Open your terminal and ensure you’re inside the HYF directory you created earlier in the course. If you haven't created a HYF directory yet, create it now. 
2. Make a new directory on your local machine called `ordinal-testing-example` in HYF. 
3.  Change directory into `ordinal-testing-example` and double-check your current working directory.
```node 
% pwd 
.../HYF/ordinal-testing-example
```
4, Create a `package.json` file in `ordinal-testing-example`.

```node
touch package.json
``` 

A package.json stores useful information about our project, like the name, description, and version. It is written in the [JSON format](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/JSON).

5. Make sure it contains a name and description.
```json
{
  "name": "ordinal-testing-example",
  "description": "An example application showing how to write tests using the jest framework"
}
```
We can continue adding more information about our project as the project grows. For now, double-check we only have a `package.json` in our project:

```node 
% ls
package.json
``` 

---

## 4. Using Packages
### Learning Objectives 
- [ ] Define a dependency
- [ ] Define a package
- [ ] Identify some benefits of using a third-party party software library when programming
- [ ] Describe why need to use npm when we are building JavaScript applications


When writing software, we continually make use of software written by other developers. We can call these packages. __A package__ is some code which is grouped together to provide some functionality.

We use packages so that we don’t have to solve every problem ourselves. Other people have often solved some things we need to do really well. Using other people’s solutions to parts of a problem means we can focus our time and effort on what’s special about our problem.

Imagine we wanted to work out what the time is in a user’s city. Instead of writing code to work out the time for every city’s time zone (and when they change!), we can use a package some `“city time”` experts have written, and which they keep up to date.

Different programming languages give developers different ways of accessing packages for use in their code. We will use `npm`. __Node Package Manager__, or __npm__, downloads and manages useful packages of code from the __npm__ registry.
___

## 5. Installing Jest
### Learning Objectives 
- [ ] Outline the effects of running an installation command, e.g. npm install
- [ ] Install a dependency with npm

_Jest_ is a package used to help us to write and run test cases in JavaScript. Our next step will be to figure out how to install the Jest package on our machine, so that we can use it in our project.

We can find out more about the Jest framework from the [documentation online.](https://jestjs.io/docs/getting-started)

In the __Getting started__ section of the documentation, _Jest_ gives us the following command:

```node
npm install --save-dev jest
```
Let’s break down the different parts of this command.

- `npm` - npm is the package management tool we are using, so we need to run it.
- `install` - npm has a subcommand called `install`. We use it to download a package from the npm registry onto our machine and install it.

- `jest` - this is the name of the package we want to install on our machine.

- `--save-dev` - this means the package is needed for development but not needed in production. Our ordinal app doesn’t need jest to run, but we need it to help us develop it.

So overall we can think of this command as saying: _“Please go to the npm database, find the Jest package and install it on my local machine”_

Let’s execute this command in the same directory as the `package.json`. To double check we’re in the correct directory, we can run `pwd`:

```node 
$ pwd
.../HYF/ordinal-testing-example
```
`pwd` is telling us we’re in the `ordinal-testing-example` directory.

We need to double check the `package.json` is also there too.

```node
$ ls
package.json
``` 
Now we can execute the command: 
```node
npm install --save-dev jest
```
Our project structure will now look as follows:
```text 
ordinal-testing-example
├── node_modules
├── package-lock.json
└── package.json

1 directory, 3 files
```
After running the command, we now have a directory called node_modules in our project too.

The node_modules directory contains all the code from the dependencies. __A dependency__ is a package that your project depends upon. we installed in our project. You won’t need to look inside the `node_modules` directory - you just need to know it contains the code for Jest and any other dependencies we install in our project.

Running the npm command also updated our package.json file for us:
```json
{
  "name": "ordinal-testing-example",
  "description": "An example application showing how to write tests using the jest framework",
  "devDependencies": {
    "jest": "^29.5.0"
  }
}
```
We’ve now got some additional information inside the `package.json`:
```json
  "devDependencies": {
    "jest": "^29.5.0"
  }
```
---

## 6. Jest's API
### Learning Objectives 
- [ ] Explain why we use APIs in programming
- [ ] Identify some commonly used APIs

With Jest installed, we need to figure out how to use the Jest framework to write tests. This means we need to look at APIs. An __API__ is a boundary between a programmer and an application, enabling a programmer to use an application’s functionality without being concerned with how the application was built.

API stands for
- Application
- Programming
- Interface.
We’ve encountered the word interface already.

Jest provides an API so we can write tests. So we have to find out about the Jest API to start writing tests with Jest.

---

## 7. First Test Case
### Learning Objectives 
- [ ] Outline the effect of running npm test
- [ ] Interpret documentation to determine how part of a third-party API behaves
- [ ] Describe what toEqual checks in the Jest library
- [ ] State the current return value of a function and the target output for a given test
- [ ] Implement a test case to describe the behaviour of a function


#### Goal: Write a test for the case below, using Jest: 

### Case 1 
Our first case is that the ordinal number for `1` should equal `"1st"`.

We can create a file called `get-ordinal-number.test.js` and write our first test there. We can use [documentation](https://jestjs.io/docs/getting-started) to work out how to write our first test using Jest.

```js
test("converts 1 to an ordinal number", function () {});
``` 
Let’s break down this syntax: 

The test function is part of the Jest API, a function we use to perform a particular task. In particular, we’re using test to create a test case. Before, we could use `Math.round` and `console.log` because Math and console are provided for us by Node.

`test` isn’t provided by Node, but when we ask Jest to run our tests, it will make sure the `test` function exists and that our code can use it.

Let’s break down the arguments we’re passing to test:

- 1st argument: "`converts 1 to an ordinal number`", a string which describes the behaviour we’re testing for
  - 2nd argument: `function() {}`, we will write some assertions in this `function() {}` to check the behaviour

We need to write an _assertion_ inside the body of `function() {}` inside `get-ordinal-number.test.js`

__💡 Recall :__ The assertion is the part of the test code that checks if a particular thing is `true` or `not`.

In this example, we want to check that the following is true: We expect `getOrdinalNumber(1)` to be `"1st"`

An assertion in Jest looks like this:
```js
expect(currentOutput).toEqual(targetOutput);
``` 
The function `toEqual` is used to check that the current output of `getOrdinalNumber(1)` and the target output of `"1st"` are equal to each other.

`toEqual` is just one example of a function called a matcher. A matcher is a function we use to compare values in Jest.

So the whole test looks like this:
```js
test("converts 1 to an ordinal number", function () {
  expect(getOrdinalNumber(1)).toEqual("1st");
});
``` 

### Running tests
We can try running the file `get-ordinal-number.test.js` with node in the following way:
```node 
node get-ordinal-number.test.js
``` 
but we get an error:
```node
ReferenceError: test is not defined
``` 
Googling “ReferenceError JavaScript”, [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError) tells us this is because we’re referring to a variable that doesn’t exist. This is because `test` isn’t defined anywhere in the file.

We need to execute this file so that the Jest API is available in our file. We can do this by running the test file using Jest: we do this using an npm script.

The “scripts” section of the `package.json` is where we can write useful commands we’ll use in our project. We can add a “scripts” section to the `package.json` so that it reads as follows:

```json
`{
  "name": "week-4-test-example",
  "description": "An example application showing how to write tests using the jest framework",
  "scripts": {
    "test": "jest"
  },
  "devDependencies": {
    "jest": "^29.5.0"
  }
}
``` 
Finally, we’ll need to run our tests. Now we can run the command `npm test`.

When we execute the command, `npm test`, we will run `npm`, and `npm` will look inside the “scripts” section of the `package.json` and look up the command for “test” - in this case, “jest”. `npm` will then run “jest”.

---

## 8. Interpreting Feedback
### Learning Objectives 
- [ ] Identify current output and target output in test feedback
- [ ] Determine the line an error occurred from some test feedback
- [ ] Give an example of why Jest makes tests easier to write than console.assert

We currently have a project structure like this:

```text
ordinal-testing-example
├── get-ordinal-number.test.js
├── package.json
├── package-lock.json
└── node_modules

1 directory, 3 files
``` 
And `get-ordinal-number.test.js` looks like this : 
```js
test("converts 1 to an ordinal number", function () {
  expect(getOrdinalNumber(1)).toEqual("1st");
});
``` 
After running the test above, we should get feedback indicating whether or not the test has passed.

### Defining the function
At the moment, our test feedback gives the following:
![test-reference-error](../assets/test-reference-error.png)

Just like we saw when the `test` function wasn’t defined, the test code is throwing a ReferenceError. A ReferenceError occurs when we try to reference a variable that we’ve not defined in our code.

This means that we haven’t defined a function named `getOrdinalNumber`, but we’re trying to use it.

To fix this, we can declare `getOrdinalNumber`.
```js
function getOrdinalNumber() {}

test("converts 1 to an ordinal number", function () {
  expect(getOrdinalNumber(1)).toEqual("1st");
});
``` 
Now we can run the tests again and check the test feedback.

### Assertion errors
We now get the following feedback:
![test-feedback-fail](../assets/test-feedback-fail.png)

Jest tells us 3 main things:

1. The test case that failed
2. The target output and the current output
3. The line number where error occurred
  
Jest defines __Expected__ and __Received__ in the test feedback:

- Expected: “1st”
- Received: undefined

### 🏋🏻‍♀️ Exercise 
- What are the values of Expected and Received in the test output?
- How do Received and Expected match up with the target output and expected output ?
- What line number did the test case fail on?


### Avoiding repetition
When we wrote `console.assert` tests before, we ended up extracting variables because we were re-using values.

Without Jest, this assertion would probably have looked more like:
```js
const input = 1;
const targetOutput = "1st";
const currentOutput = getOrdinalNumber(input);
console.assert(
  targetOutput === currentOutput,
  `Expected ${targetOutput} but got ${currentOutput}`
);
``` 
Because Jest makes a useful error message for us telling us what the target and current outputs are, we could write this all in one line. We didn’t need a variable so we could pass `"1st"` both to `getOrdinalNumber` and into the message. Jest helped us to avoid writing more repetitive code. 

We can now pass the test by implementing functionality for the first test case. We could write the following:
```js
function getOrdinalNumber() {
  return "1st";
}

test("converts 1 to an ordinal number", function () {
  expect(getOrdinalNumber(1)).toEqual("1st");
});
```
---

## 9. Generalising Further
### Learning Objectives 
- [ ] Extend an implementation based on more assertions

In English, ordinal numbers mostly follow the same pattern. Numbers ending in `1` will generally have an ordinal number ending in `“st”`.

Here are some examples of this pattern : 1st, 11th, 21st, 31st, 41st,…

All the numbers ending in `1` will continue to end in `"st"`, with the exception of `11`. `11` is slightly different and ends with a `"th"`.

We can now update our test case to check that `getOrdinalNumber` works for lots of different numbers ending in `1`.

```js
function getOrdinalNumber() {
  return "1st";
}

test("works for any number ending in 1", function () {
  expect(getOrdinalNumber(1)).toEqual("1st");
  expect(getOrdinalNumber(11)).toEqual("11th");
  expect(getOrdinalNumber(21)).toEqual("21st");
});
``` 

We’ve also updated the test description because we’re adding more assertions and checking slightly different functionality.

### 🧪 Try it yourself
Try implementing `getOrdinalNumber` so it passes the test case above.

---

## 10. Anonymous Functions
### Learning Objectives 
- [ ] Explain the difference between a named function and an anonymous function

We have seen functions written like this:

```js
function convertToPercentage(decimalNumber) {
  return `${decimalNumber * 100}%`;
}
``` 
In our Jest test, we wrote a function differently:
```js
function() {
  expect(getOrdinalNumber(1)).toEqual("1st");
  expect(getOrdinalNumber(11)).toEqual("11th");
  expect(getOrdinalNumber(21)).toEqual("21st");
}
```

### 🧪 Spot the difference
Stop and identify the difference in syntax between these two function definitions.

We didn’t give a name to the function in our Jest test.

This is ok, because we don’t need it to have a name. We don’t call the function by name. We passed the function as an argument to the test function. The `test` function takes the function as a parameter. And function parameters get their own names in the scope of the function.

We can imagine the test function is defined like this:
```js
function test(name, testFunction) {
  // Call the passed test function
  testFunction();
}
``` 
Inside `test` our function is labelled with the name `testFunction`. It would be labelled this whatever we named it before. Even if we didn’t label it ourselves at all, it is still labelled with the name `testFunction` inside test.

Because it doesn’t matter what we named the function (because we never call it by name), we didn’t give it a name.

Otherwise, these two functions act the same. The only difference between them is whether we created a variable name for the function in the scope where we defined it.


---

## 11. Arrow Functions
### Learning Objectives 
- [ ] Write an arrow function

As we write more code, we are going to write lots and lots of anonymous functions. 
An _anonymous function_ is a function which is not bound to a name in the scope where it is defined. .

JavaScript has even shorter ways of writing an anonymous function. These four functions all do the same thing:

```js
function convertToPercentage(decimalNumber) {
  return `${decimalNumber * 100}%`;
}
```
```js
// We can skip the name of the function if we don't need it to have a name.
function (decimalNumber) {
  return `${decimalNumber * 100}%`;
}
```
```js
// We can also skip the keyword 'function'.
// If we do this, we need an arrow between our parameters and the function body.
(decimalNumber) => {
  return `${decimalNumber * 100}%`;
};
```
```js 
// If our function just returns a single value,
// without needing any other statements in our function,
// we can even skip the return keyword.
(decimalNumber) => `${decimalNumber * 100}%`;
``` 

This can make it easier and quicker to write functions. It also reduces the number of things we need to read in a function.

Applying all of these techniques, we can rewrite our Jest test with fewer words:
```js
test("works for any number ending in 1", () => {
  expect(getOrdinalNumber(1)).toEqual("1st");
  expect(getOrdinalNumber(11)).toEqual("11th");
  expect(getOrdinalNumber(21)).toEqual("21st");
});
```
It doesn’t matter whether you use arrow functions or use the function keyword - they work the same.

Not all arrow functions are anonymous - you can assign them to a variable too:

```js
const convertToPercentage = (decimalNumber) => `${decimalNumber * 100}%`;
```

Anonymous vs named refers to whether the function is bound to a name, not whether it was defined with the `function` keyword or an `=>`.
---

## 12. Solving Problems While Testing
### Learning Objectives 
- [ ] Practice solving problems while testing

To get the most out of this workshop - don’t just watch [this testing in JS workshop video](https://www.youtube.com/watch?v=SMy1jWCg8kI&t=123s), code along. 

You can use the code samples below as a starting point.

#### Exercise 1
```js
// Create a function that takes three numbers as parameters
//   and returns the largest of the three
``` 

#### Exercise 2
- Start with an empty folder
- Create a new NodeJS project: `npm init -y`
- Install Jest as a dependency: `npm i jest --save-dev`
- In package.json, change `"test": "echo \"Error: no test - specified\" && exit 1"` to `"test": "jest"`
- Create a file for our first exercise: `example1.test.js`
- You can run your tests using `npm test`
