## Week 6 : 🔗 Problem Solving Workshop  
## Problem Solving 1: Drawing Stairs

### 1. Introduction
This series of problem solving exercises are based on problems found on [Codewars](https://www.codewars.com/) or [Hackerank](https://www.hackerrank.com/dashboard).

#### What you should already know
You should have attended the previous problem solving session. You will have learned the outline procedure for solving problems by:

- Understanding what the problem statement is asking you to do
- Using abstraction to identify what is important
- Using decomposition to break the problem down into smaller problems.
- Solve the smaller problems, one at a time
- You will get more practice on that today.

#### What you'll learn
- How to use abstraction
- ow to use decomposition
- How to use repetition
- What you'll need
- No specific tools are required, although you will need to make notes so either pencil and paper or a text editor on your laptop.

#### What you'll do
You will be presented with a problem. You will learn how to understand the problem and break the problem down into steps that help you work towards a solution.

### 2. Problem Description
Todays problem can be found here: https://www.codewars.com/kata/5b4e779c578c6a898e0005c5.

After the class finishes, you should submit a solution to the problem using the link above.

### Story
We want to output a drawing of some stairs.

### Problem
Given a number `n`, draw stairs using the letter `"I"`, `n` tall and `n` wide, with the tallest in the top left.

Examples:
We are given two examples.

Example 1
For example, `n = 3` would return:
```js
"I\n␣I\n␣␣I"
```

If you print that string in a `console.log` it would look look like this:
```js
I
␣I
␣␣I
``` 
_Note_ that the ␣ character represents a space and `\n` is a newline. These characters are part of a group of characters known as "white space" characters and when printed are invisible. Another white space character is a tab, written as `\t` in Javascript. The `␣` is only shown here so that we can see and count spaces. A space intended to be printed like this is part of a string in Javascript so should be surrounded by quote characters. Note that `""` is an empty string where as `" "` is a string containing one space.

### Example 2
Another example, a 7-step stairs should be drawn like this:
```js
I
␣I
␣␣I
␣␣␣I
␣␣␣␣I
␣␣␣␣␣I
␣␣␣␣␣␣I
```

### Code Template
```js
function drawStairs(n) {
  // your code here
}
```

### 3. Understanding the problem
- Make sure you understand the problem.
- Discuss any questions as a group before continuing.

### 4. Identify what is important
- Make a list of all the features that look important. Ignore anything that is not essential to solving the problem. In this problem, look for patterns.
- Discuss your solution to this step as a group. Does everyone have the same list of important elements or are there differences? Resolve your differences so everyone agrees what is important.

### 5. Important characteristics of the problem
- The input to the function is `n`, representing the number of steps.
- The function should return the complete string (although we could optionally print it before returning the string).
- We are building up a string containing only the characters; `space`, `I`, and `\n`.
- There will be exactly `n` occurences of `I` in each string.
- Every `I` except the final one will be followed by a `\n` and a number of spaces to correctly format the string.

### 6. Understand the examples
We are given two examples. Here they are again.

For example, `n = 3` would return:
```js
"I\n␣I\n␣␣I"
``` 

If you print that string in a `console.log` it would look look like this:
```js
I
␣I
␣␣I
```
Another example, a 7-step stairs should be drawn like this:
```js
I
␣I
␣␣I
␣␣␣I
␣␣␣␣I
␣␣␣␣␣I
␣␣␣␣␣␣I
```

1. In the 3-step example we are shown the actual string and what it looks like printed. In the 7-step example we are only shown what it looks like printed. Write down what the actual string will be for the 7-step example.
2. Write down the string generated when n is 1.
3. Write down the string generated when n is 5.
4. Do you notice any patterns?

### 7. Explanation of the examples
Lets put the examples in order of the value of `n`.

When `n = 1`, the return string is:
```js
"I"
```
When n = 3 the return string is:
```js
"I\n␣I\n␣␣I"
```
When n is equal to 5, the returned string is:
```js
"I\n␣I\n␣␣I\n␣␣␣I\n␣␣␣␣I"
```
When n is equal to 7, the returned string is:
```js
"I\n␣I\n␣␣I\n␣␣␣I\n␣␣␣␣I\n␣␣␣␣␣I\n␣␣␣␣␣␣I"
```
#### Patterns to notice
There are some patterns to note:

- The first character in EVERY returned string is `"I"`
- There is a `\n` following EVERY I EXCEPT the last. Our solution will need a way of knowing when we are adding the last I so we don't add too many `\n` characters.
- After the first `I`, there is ALWAYS a sequence of one or more spaces before the next `I`. Our solution will need a way of calculating the correct number of spaces before the next `I`. We might note here that there is ONE space after the FIRST `I`, TWO spaces after the SECOND `I`, THREE spaces after the THIRD `I`, and so on.
  
It is useful to note these patterns because we can use them when designing the solution later.

### 8. Decomposing the problem
1. Can you decompose this problem into smaller ones?
_Hint:_ Think about the characters we are adding to the result string. Decomposing a problem is all about not trying to do everything at once.
Describe your decomposition in English without reference to programming code of any kind, although you might want to use variable names to refer to certain values.
2. Discuss as group the different decompositions you have come up with. Resolve any differences.

### 9. Our decomposition
_Step 1:_ There is a simple version of the problem that we can solve first. Ignore all characters except the `I` and generate and return a string containing the correct number of `I` characters. This will be our version 1.

_Step 2:_ Modify version 1 so that the correct number of `\n` characters are added. This will be our version 2.

_Step 3:_ Modify version 2 so that the correct number of spaces are added. This will be our version 3 (final version).

### 10. A solution to Step 1
In version 1, we are going to return a string containing only the correct number of `I` characters.

- `n=0` we need to return `""`
- `n=1` we need to return `"I"`
- `n=2` we need to return `"II"`
- `n=3` we need to return `"III"`
  
and so on...

Here is a design for version 1.

- We are building a string so start with a variable called `result` which is an empty string `""`. We will append all the subsequent characters to `result`.
- If the value of `n` is less than `1`, there is nothing to do, so return `result`.
- Use a variable call `iCount` to count the number of `I` characters we have appended so far, currently its value should be `0`.
- `while iCount` is less than `n`, repeat:
  - Append an `I` to `result`
  - Increment the value of `iCount` by one
`return result`

Write the plan above in Javascript and check that it works. You might need to check the documentation for how to append to a string. There is more than one way to do that.

### 11. The code for Version 1
Here is the code for version 1:
```js
function drawStairs(n) {
	let result = "";
	if (n < 1) return result; // nothing to do, the function returns here
	// we only get past the above line when n >= 1, we don't need an else
	let iCount = 0;
	while (iCount < n) {
		// append an I
		result = result.concat("I");
			// or you could have ...
			// result = result + "I";
		// update the count
		iCount = iCount + 1;
	}
	return result;
}
``` 

If we run version 1 in codewars we will see the following output:
![codewars failed test](../assets/codewars-stair-test.png)

Version 1 passes the test for `n=1`. It fails when `n=3` and `n=5` but we expected that. If you read the message printed for the 3-step test, it says

```node
expected 'III' to equal 'I\n I\n  I'
``` 

We can see that version 1 is doing exactly what we intended. In the 3-step test, version 1 returns a string containing three `I` characters. In the 5-step test, version 1 returns a string containing five `I` characters.

### 12. Develop a solution to step 2.
Version 2 will return strings containing only `I` and `\n` characters. Here is what we are aiming at:

- `n=0` we need to return `""`
- `n=1` we need to return `"I"`
- `n=2` we need to return `"II"`
- `n=3` we need to return `"III"`
  
and so on...

We note that when we add an `I`, if it was not the last `I`, we add a `\n`. Here is the relevant code with a comment added:
```js
while (iCount < n) {
	// append an I
	result = result.concat("I");
	// update the count
	iCount = iCount + 1;
	// if that wasn't the last I, append a \n
}
```
Write the code indicated by our comment to complete version 2.

### 13. Adding a newline
To correctly add a newline when required, we need to add:
```js
if (iCount < n) {
	result = result.concat("\n");
}
```
We should test this and check the output is what we expect.

### 14. Developing a solution to step 3
The final version of our code will include space characters. This is what we are aiming at:

- `n=0` we need to return `""`
- `n=1` we need to return `"I"`
- `n=2` we need to return `"II"`
- `n=3` we need to return `"III"`
  
and so on...

We should notice that
- the spaces come after the `\n` character for every `I` except the last.
- the number of spaces is the same as the number of `I` characters we have appended so far.
- Modify version 2 so that it includes the code to append the correct number of spaces. _Hint:_ The algorithm to use is to count spaces and repeatedly add a space until you have enough.

### 15. Adding the right number of spaces
Here is the code to add the right number of spaces:
```js
// add the \n when required
if (iCount < n) {
	result = result.concat("\n");
	// add the spaces too
	let spaceCount = 0;
	while (spaceCount < iCount) {
		result = result.concat(" ");
		spaceCount = spaceCount + 1;
	}
}
```
You might have written the following:
```js
// add the \n when required
if (iCount < n) {
	result = result.concat("\n");
}
// now add the spaces
if (iCount < n) {
	let spaceCount = 0;
	while (spaceCount < iCount) {
		result = result.concat(" ");
		spaceCount = spaceCount + 1;
	}
}
```
but we don't need the second `if` statement because both `if` statements test whether `(iCount < n)` and the neither if statement changes `iCount` or `n`. Therefore we can merge the two into one `if` statement.

One `if` statement is simpler than two, simpler is almost always better.


### Mentored code review (Optional)
#### Learning Objectives
- [ ] Our learners get feedback on their work through code review. 

At work, colleagues review each others code to understand code, look for problems, and both share and learn better ways of doing things.

At HYF every learner should get code review on their work especially for the PR.

#### 🕹️Live Code Review
- The coach will review a pull request, and talk out loud about what they’re looking for and doing.
- The learner(s) will ask questions as they do.

<details>
<summary> Hints and tips </summary>

- How did you understand what the goal of the PR is? Reading the title and description, looking at the coursework exercises, etc.
- The uses of the different tabs in a PR: Conversation, Commits, Files changed.
- What made a PR easy or hard to review:
	- Where unrelated files/lines changed?
	- Was code consistently formatted? Did indentation help or hurt understanding?
- How did you review the code? Did you read top-to-bottom? Did you jump around into and out-of functions? Did you look at tests? Did you clone the code locally and try running it?
</details>


### 💬 Independent Study & Support Time
#### Students
This is time for you to get help with whatever you need help with.

If you didn’t understand something in the prep, ask about it.

If you were struggling with a coursework exercise, get help with it.

If you weren’t quite sure of something in a workshop, discuss it.

If you don’t have any problems, keep working through the coursework until you need help.

It can be useful to get into groups with others facing the same problem, or working on the same backlog item.

#### Volunteer Coaches
Don’t be scared to approach people and ask what they’re working on - see if you can help them out, or stretch their understanding.

If lots of people have the same problems, maybe you can put together a demonstration or a workshop to help them understand.

If absolutely no one needs help, consider reviewing some PRs. 