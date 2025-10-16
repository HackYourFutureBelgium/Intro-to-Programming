## Week 5 : 🔗 Problem Solving Workshop  
## Problem Solving 1: How much Toast?

In groups, we will work through a Codewars problem. Split into groups of up to 3-4 people.

Remember: Our goals are to: Understand the problem and make a plan to solve it. These are more important steps than actually writing the code (though we should do that too, after we have a plan).

### 1. Introduction
This series of problem solving exercises are based on problems found on Codewars https://www.codewars.com/ or Hackerank https://www.hackerrank.com/dashboard.

### What you should already know
This is the first problem in the course. There is no need for any prior knowledge.

### What you'll learn
- How to use abstraction to identify the key elements of the problem
- How to use decomposition to break the problem down into smaller, easier problems.
- How to manage complexity.
  
### What you'll need
No specific tools are required, although you will need to make notes so either:
- pencil and paper
- text editor on your laptop.
  
### What you'll do
You will be presented with a problem. You will learn how to understand the problem and break the problem down into steps that help you work towards a solution.

### 2. Problem Description
Todays problem can be found here: https://www.codewars.com/kata/5834fec22fb0ba7d080000e8.

After the class finishes, you should submit a solution to the problem using the link above.

### Story
You are going to make toast fast, you think that you should make multiple pieces of toast at once. So, you try to make 6 pieces of toast at once using all the toasters available.

### Problem
You forgot to count the number of toast you put in there, you don't know if you put exactly six pieces of toast into the toasters.

Define a function that counts how many more (or less) pieces of toast you need in the toasters. Even though you need more or less, the number will still be positive, not negative.

### Examples:
You must return the number of toast the you need to put in (or to take out). In case of 5 you can still put 1 toast in:
```js
5 --> 1
```
And in case of 12 you need 6 toasts less (but not -6):
```js
12 --> 6
```

### Code Template
```js
function sixToast(num) {
  // you code goes below this line
  
}
``` 
### 3. Understanding the language used in the problem description

The first step in solving any problem is understanding that problem.

Are there any words or phrases in the problem description that you don't understand? If so, write them down and find out what they mean.

When you are sure that you know the meaning of all the words or phrases in the problem desicription, move on to the next step.

### 4. Identify what is important
This next step is called using _abstraction_. That is just a fancy word for the process of filtering out - ignoring - the characteristics of problems that are not needed in order to concentrate on those that are needed. It is also the filtering out of specific details. From this, we can create an idea of what is to be solved (see https://www.bbc.co.uk/bitesize/guides/zmhpfcw/revision/1 for more information).

Identify the parts of the problem description that are important for our solution and the parts we can just ignore. Here are some hints to guide you:
- Is the toast important?
- Are the toasters important?
- Are there any input values we need to use, if so what?
- What is the output value we are being asked to create?
- Are there any values apart from the input and output that are important?
- Is there anything that might be difficult?
  
Make a note of each important piece of information you have identified that is important to the problem description.

Discuss your solution to this step as a group. Does everyone have the same list of important elements or are there differences? Resolve your differences so everyone agrees what is important.

### 5. Important characteristics of the problem
When we solve problems with code, there is often `input` that is required. Input is data that changes depending on the circumstances.

For each set of input, our solution should return an `output` value. The output is what you might describe as the "correct answer given the input".

- We have an input value which is referred to in the code template as `num`. 
- We are comparing the input to the value `‘6'`.
- Our output is a number which tells by how much the value of `num` is bigger than, or smaller than, `6`.
- The output is always a positive number. Actually this aspect is the "difficult" part of this problem.

### 6. Understand the examples
The problem description almost always has some examples that show various different problem _inputs_ and the _output_ that goes with each input.

1. Look at the examples that are provided. Can you explain how and/or why the output was generated from the input?
2. Make a new version of each example that has different input and provide the output that should result from that input.

### 7. Explanation of the examples.
### Example one
The first example is this one:
```js
5 --> 1
```

The _input_ value that we are calling `num`, is `5` and the output value is `1`. We can compute the _output_ by calculating the result of `6 - num` which becomes `6 - 5` which gives the output value `1`.

### Example two
The second example is:
```js
12 --> 6
```
The input value that we are calling `num`, is `12` and the output value is `6`. If we follow the same process as the first example we get `6 - num` which becomes `6 - 12` which gives us the (incorrect) result `-6`. To get to the correct answer we need to turn `-6` into `6` (multiply by -1).

### Two more examples
This is another version of the first example:
```js
2 --> 4
```

Here is another version of the second problem:
```js
9 --> 3
``` 

### 8. Break down the problem
It often helps to decompose the problem into smaller problems. We call this step decomposition.

1. From your analysis of the examples, can you spot TWO different cases or sub-problems within this problem?
2. Discuss the two different cases within your class. Is one case easier than the other?

### 9. The two different cases
- In the first example, the input value `num` is less than `6`. The solution is obtained by the formula `6 - num`.
- In the second example, the input value num is greater than `6`. The solution is more complicated because we either need to calculate `num - 6` or calculate `6 - num` and multiply the result by `-1`.

The second case is "more difficult" in that we need to do something different to the "easier" first case.

Are there any other cases? What if `num` is equal to `6`?

### 10. Starting to develop a solution
It is acceptable (and often important) to solve the decomposed smaller problems one by one. In this first step we will develop a solution that works ONLY in the case that `num` is less than `6`.

It is important to note that up until now there has been no programming code written or even mentioned. There was a bit of mathematics involved in calculating the result.

When we develop a solution we often use __pseudo-code__. This is a cross between program code where that code is easy to write and an English description when the step is not easy to write in one program code statement.

1. Here is a partly finished pseudo-code solution to the easier part of the problem:
```js
return __________
```
Fill in the gap in the example above. Don't worry about getting the code correct, just fill in what the step needs to achieve using English.

### 11. A plan for the solution
Here is the pseudo-code with the gaps filled in:
```js
return 6 - num
```

We could put this solution into the training step on Codewars and we may see that sometimes it produces the correct output and passes a test and other cases it produces the wrong output and fails a test. That behaviour is ok, we expected that.

### 12. Improving the solution
To improve our solution we need to include a check in our solution to identify whether we are solving the simple case when `num` is less than `6`, or not.

1. Write a new version of our plan that includes an `if` statement that checks whether `num` is less than `6` and when that condition is true returns the value of `num - 6`.

### 13. Improved solution
Here is some improved pseudo-code. Note that is less than is not valid Javascript but while we are beginners, we won't worry yet about the correct Javascript code for the statement :
```js
if (num is less than 6) {
	return 6 - num
}
``` 
We can use this new version in the Codewars training screen after translating `is less than` into correct Javascript. Although the solution is improved, it may not pass more tests.

### 14. Solving the second case
Our solution so far detects the easier case and returns the correct value for that case. Here we develop a solution for the alternative case.

Complete the following:
```js
if (num is less than 6) {
	return 6 - num
} else {
	const difference = 6 - num;
	return ______________________
}
``` 

###  15. A plan for the second case

Here is our complete plan for a solution in pseudo-code:
```js
if (num is less than 6) {
	return 6 - num
} else {
	const difference = 6 - num;
	return difference * -1;
}
```
We will stop here.

In your own time:

- Turn this plan into actual code and test your solution code here: https://www.codewars.com/kata/5834fec22fb0ba7d080000e8
- Do some research into the function `Math.abs` and try to come up with a neater solution.
- Challenge: Can you use `Math.abs` to come up with a version that doesn't have an if statement?
  


## Problem Solving 2: Which Elevator?
### 1. Introduction
This series of problem solving exercises are based on problems found on [Codewars](https://www.codewars.com/) or [Hackerank](https://www.hackerrank.com/dashboard).

You have attended the previous session on problem solving where we introduced the concepts of _abstraction_ and _decomposition_. We will revisit these concepts again today.

#### What you'll learn
- How to use _abstraction_ to reduce a problem to its important factors
H- ow to use _decomposition_ to break down a problem into smaller, easier problems that can be solved independently

#### What you'll need
No specific tools are required, although you will need to make notes so either pencil and paper or a text editor on your laptop.

#### What you'll do
You will be presented with a problem. You will learn how to understand the problem and break the problem down into steps that help you work towards a solution.

### 2. Problem Description
Todays problem can be found here: https://www.codewars.com/kata/5c374b346a5d0f77af500a5a.

After the class finishes, you should submit a solution to the problem using the link above.

#### Story: Closest Elevator. 
Given the floors of 2 elevators and a calling floor, return the elevator closest to the calling floor.

#### Problem
Given 2 elevators (named "left" and "right") in a building with 3 floors (numbered 0 to 2), write a function accepting 3 arguments (in order):

- `left` - The current floor of the left elevator
- `right` - The current floor of the right elevator
- `call` - The floor that called an elevator
Your function should `return` the name of the elevator closest to the called floor ("left"/"right").

In the case where both elevators are equally distant from the called floor, choose the elevator to the right.

You can assume that the inputs will always be valid integers between 0-2.

#### Examples:
Here are some examples of the input with the result that is returned in each case:
```js
left right call   result
  0    1     0    "left"
  0    1     1    "right"
  0    1     2    "right"
  0    0     0    "right"
  0    2     1    "right"
```

#### Code Template
```js
function elevator(left, right, call){
  // Your code will go here
}
```
### 3. Understanding the problem
The first step in solving any problem is understanding that problem.

We are not solving the problem here, we are just ensuring we understand what the problem is before we think about solving it.

- Are there any words or phrases in the problem description that you don't understand? If so, write them down and find out what they mean.
- Do you have any questions about the problem? If so, make a note of them and ask the coach.

### 4. Identify what is important
Make a list of all the aspects of this problem that are important. Ignore anything that is not essential to solving the problem.

Discuss your solution to this step as a group. Does everyone have the same list of important elements or are there differences? Resolve your differences so everyone agrees what is important.

### 5. Important characteristics of the problem
In this problem, there are really only three pieces of information that are important:

- the floor number of the left hand lift
- the floor number of the right hand lift
- the floor number calling the lift.
These three numbers correspond to our input.

The return value will be one of two different strings; `"left"` or `"right"`.

Reducing the problem to our three input values, which are all numbers in the range 0 to 2, is an example of abstraction. We can "forget" the stuff about elevators and floors, we are reducing the problem to a comparison of three numbers.

How we do that comparison is something we will look at in the next steps.

### 6. Understand the examples

```js
left right call   result
  0    1     0    "left"
  0    1     1    "right"
  0    1     2    "right"
  0    0     0    "right"
  0    2     1    "right"
``` 
1. Look at the examples that are provided. Can you explain how and/or why the output was generated from the input?
2. Make a new example that has different input and provide the output that should result from that input.

### 7. Explanation of the examples.
#### Example one
```js
left right call   result
  0    1     0    "left"
```

In this example, `left` and `call` are equal, `right` is larger than `call`, so `"left"` is returned because the `left` lift is closest (in this case the same as) the calling floor.

This example is important because it allows us to see three example input numbers and we should have noticed that we need to find whether `call` is closer to `left` or closer to `right`. We can perform the following two calculations that will help us:
```js
call - left = 0
call - right = -1
``` 
We should make a note that if the result of either calculation is 0, it means the lift is being called from the same floor. Therefore, we return `"left"` in this case because the value of `call` and `left` are identical.

#### Example two
```js
left right call   result
  0    1     1    "right"
```
Lets do the same calculations:
```js
call - left = 1
call - right = 0
```
We get a value of `0` from the second calculation so, the returned value is `"right"`.

#### Example three
```js
left right call   result
  0    1     2    "right"
``` 
The calculations this time give us:
```js
call - left = 2
call - right = 1
```
The values show that the `right` hand lift is closest so we return `"right"`.

#### Example four
```js
left right call   result
  0    0     0    "right"
```
The calculations this time are:
```js
call - left = 0
call - right = 0
```

Both calculations give us the same value, `0`. In this case, a condition of the problem comes into play. The problem description says:
```js
In the case where both elevators are equally distant from the called floor, choose the elevator to the right.
```
so for this case, we should return `"right"`.

#### Example five
```js
left right call   result
  0    2     1    "right"
```
Our calculations this time give us the following values:
```js
call - left = 1
call - right = -1
```

In terms of "how far away", `1` and `-1` are actually identical. A value of `1` means "one floor down" and a value of `-1` means "one floor up.

This example is important. It tells us TWO things:

1. The minus value isn't really important, we need the absolute value of the difference between the calling floor and the lift floor. The absolute value of `-1` is `1`.
   
	Can you find a Javascript function that, given a number, will return its absolute value? We might need that later.

2. This is just another case of the previous example when we compare the two absolute values because comparing absolute values gives us `1` compared with `1`. The two elevators are equally distant, so the right elevator should be chosen.
   
We should return `"right"` in this example.

### 8. Decomposing the problem
Can you decompose this problem into the TWO steps required so deliver the correct return value?

Describe your decomposition in English without any reference to programming code of any kind, although you might want to use variable names to refer to certain values.

### 9. Our decomposition
There are actually two steps to the solution to this problem and these are:

1. Do the calculations to find the difference between `call` and `left` and `call` and `right`. This gives us two numbers, and we will refer to them as `differenceLeft` and `differenceRight`.
2. Make a decision based on comparing `differenceLeft` with `differenceRight` and return either `"left"` or `"right"`.
   
In step 1 the names we chose to refer the the results of the calculations are not important. What is important is that we read the name and know immediately what it is referring to.

Breaking down the problem into these TWO steps is important because we can solve each step independently. Each step is a simpler problem than the whole problem.

### 10. Developing a solution to step 1
1. Write the Javascript code to find the values of the two variables, `differenceLeft` and `differenceRight`. Be sure to remember everything we discovered when we looked at the examples.

### 11. A solution to step 1.
Here is the code you should have written:
```js
const differenceLeft = Math.abs(call - left);
const differenceRight = Math.abs(call - right);
```
We might add a `console.log` statement to print out the values of the two variables so we can check they look correct.


### 12. More on developing a solution: Step 2
After a few minutes to allow everyone to come to their own conclusions, go around the class and get answers to the following:

1. Can you describe the decision based on `differenceLeft` and `differenceRight` that needs to be made in order to determine whether the returned result should be `"left"` or `"right"`?
	1. If you can't describe in English what the decision is, you can't write it in Javascript.
	2. In Javascript a decision may be translated into an `if` statement.

### 13. A design for step 2
The decision is this:
```js
IF the value of differenceRight is less than or equal to the value of differenceLeft THEN
	return "right"
ELSE
	return "left"
``` 
Translate our design for step 2 into Javascript.

### 14. Implementing step 2
Here is a translation of our design into code:
```js
if (differenceRight <= differenceLeft) {
	return "right";
} else {
	return "left";
}
``` 

### 15. Summary
- We solved this problem by using abstraction and decomposition
- Using _abstraction_ we reduced the problem description down to a comparison of three numbers and that comparison gave us two values.
- Using _decomposion_ allowed us to identify two steps required to solve the problem:
	- calculate the differences
	- make a decision on what value to return

Each step could be solved separately and then put together to give a working solution.
- Our eventual solution is simpler than the analysis of the five examples might have suggested. That is a good reason why we didn't write any code until we had completed our problem _abstraction_ and _decomposition_.
- Be sure to submit your solution on codewars.