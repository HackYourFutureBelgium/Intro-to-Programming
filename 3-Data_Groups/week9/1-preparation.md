# 1. User Interfaces

- [ ] Define static HTML
- [ ] Explain why we interact with user interfaces

User interfaces provide the gateway between a user and a complex application. When navigating the internet, we continually interact with web pages to access data and interact with complex web applications.

A web browser (provides a user interface to interact with web pages) is capable of fetching HTML documents from a server, and then rendering the document to create a user interface. If every time a user visits a website, they get the same plain HTML document back, we say this content is static. 

By static, we mean that the server’s job was just to hand over the HTML document, and then the browser takes over. A user may interact with the browser’s interface, e.g. to scroll, type in a text field, or drag-and-drop an image around, but this is done purely by interacting with the browser - the browser won’t talk to the server about this.

# 2. Implementing a character limit

## Learning Objectives

Let’s define a problem.<br>

Suppose we’re working on a website where users will need to **comment** on articles. In the user interface, they’ll be provided with a `textarea` element where they can type their comment. However, there is a character limit of `200` characters on their comment. As users type in to the `textarea` they should get feedback on how many characters they’ve got left for their comment.<br>

We can define acceptance criteria for this component:<br>

_Given_ an textarea and a character limit of 200<br>
_When_ a user types characters into the textarea<br>
_Then_ the interface should update with how many characters they’ve got left.
___

_Given_ an textarea and a character limit of 200<br>
_When_ a user has already typed 200 characters into the textarea<br>
_And_ the user tries to type another character<br>
_Then_ the extra character should not get added to the textarea.

___

### 🏁 Starting point

In the user interface, we will start off with some static html:<br>

```javascript
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <section>
      <h3>Example character limit comment component</h3>
      <label for="comment-input">
        Please enter your comment in the text area below
      </label>
      <textarea
        id="comment-input"
        name="comment-input"
        rows="5"
        maxlength="200"
      ></textarea>
      <p id="character-limit-info">You have 200 characters remaining</p>
    </section>
  </body>
</html>
```
To implement the acceptance criterion, we’ll need to interact with the elements on the page. We’ll need a way to **access** and **update** elements based off user interactions.

# 3. Step-Through-Prep-Workshop

[![Prep](https://i.ytimg.com/vi/0tI34jHLpkY/maxresdefault.jpg)](https://youtu.be/0tI34jHLpkY)

# 4. Breaking down the strategy

## Learning Objectives

- [ ] Break down a problem into a series of steps

<img width="226" height="408" alt="image" src="https://github.com/user-attachments/assets/d3dd6496-4b83-4e00-ae08-b7cd2e7578c0" />

There are two times we may want to do this:

1. When the page first loads we should show the initial limit.
2. Whenever the user adds or removes a character from the textarea, we want to update to show the remaining limit.

<img width="601" height="389" alt="image" src="https://github.com/user-attachments/assets/db27a7e2-50bc-4af8-b5c9-21313df682fd" />

Steps 2-4 will be the same, whether we’re doing this for the initial load or a subsequent update.<br>

This strategy gives us a rough guide for the road ahead. However, as we learn more about this problem, we may need to update our strategy.<br>

# 5. The DOM

## Learning Objectives

- [ ] Define the Document Object Model

Let’s consider the starting HTML. We need a way of interacting with the elements of this page once it is rendered.<br>

```javascript
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <section>
      <h3>Character limit</h3>
      <label for="comment-input">
        Please enter your comment in the text area below
      </label>
      <textarea
        id="comment-input"
        name="comment-input"
        rows="5"
        maxlength="200"
      ></textarea>
      <p id="character-limit-info">You have 200 characters remaining</p>
    </section>
  </body>
</html>
```

## 🌳 HTML tree

HTML documents form a [tree-like structure](https://en.wikipedia.org/wiki/Tree_structure). We start at the top `html` element and from there other html elements are nested inside.<br>

<img width="618" height="501" alt="image" src="https://github.com/user-attachments/assets/1807ee73-6c2f-49f8-adff-e444a7f5aa95" />

When we use a web browser, it takes this HTML document, and provides us with an interface - a visual representation of the document, which we can read, and interact with (e.g. with a keyboard and mouse).

### Document Object Model
When the browser first renders a web page it also creates the DOM - short for Document Object Model (The Document Object Model is a data representation of the content in a web page. All HTML elements are represented as objects that can be accessed, modified and deleted.)<br>

Just like a web browser provides us a visual interface, the DOM is an interface. But it is not an interface for humans to see and interact with, it is an interface for JavaScript to interact with. We can write JavaScript programs to interact with the Document Object Model so we can make the page interactive.<br>

#### 💡Tip :  Inspect with dev tools
We can use [Dev Tools to inspect the DOM](https://developer.chrome.com/docs/devtools/dom) and look at the elements on the page. Use Dev Tools to inspect the character limit component from earlier.


# 6. Querying the DOM
## Learning Objectives

- [ ] Access elements in the DOM using selector methods

Inside the `body` of the html document, we start with the following html:

```javascript
<section>
  <h3>Character limit</h3>
  <label for="comment-input">
    Please enter your comment in the text area below
  </label>
  <textarea
    id="comment-input"
    name="comment-input"
    rows="5"
    maxlength="200"
  ></textarea>
  <p id="character-limit-info">You have 200 characters remaining</p>
</section>
```

## querySelector()

__💡Recall:__ 
In the plan defined earlier, we had the following step: Step 2: Access the `textarea` element.

The DOM is an interface. It represents HTML elements as objects and provides functions to access these objects. Let’s start by accessing the `textarea` element and its value. To access DOM elements, we can use a method on the DOM API - [document.querySelector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector).

We can create a Javascript file, `script.js`, and link it to the HTML document using a `script` element:<br>

```javascript
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <script defer src="script.js"></script>
  </head>
  <body>
    <section>
      <h3>Character limit</h3>
      <label for="comment-input">
        Please enter your comment in the text area below
      </label>
      <textarea
        id="comment-input"
        name="comment-input"
        rows="5"
        maxlength="200"
      ></textarea>
      <p id="character-limit-info">You have 200 characters remaining</p>
    </section>
  </body>
</html>
```
Inside `script.js`, we can call `document.querySelector`:

```javascript
const textarea = document.querySelector("textarea");
```

`document.querySelector` takes a single argument a string containing a CSS selector (just like we use when defining what elements a CSS rule should apply to).<br>

`document.querySelector`returns an element object representing the first element in the page which matches that CSS selector. This element object lets us inspect and modify the element in the page.<br>

Here we have given it the string `"textarea"`, which is the CSS selector used to look up the elements with tag name `textarea`. The function returns an element object, which represents the first `textarea` in the web page. Once we can access the `textarea` object, we can access its properties. In particular we want to access the value a user types into the `textarea box`. We can do this by accessing the value property:

```javascript
const textarea = document.querySelector("textarea");
console.log(textarea.value); // evaluates to the value typed by the user
```

### 🕹️🖲️ Follow along
1. On your local machine, set up a new directory with an `index.html` and `script.js`.
2.  Make sure you start with the same static HTML as the example above.
3. Double-check your script file is linked to your html file.
4. Try querying the DOM and accessing various elements like the `textarea` element.
5. Try typing in the `textarea` element, and then accessing its `value` property in Dev Tools.

# 7. Calculating the remaining characters
## Learning Objectives
- [ ] Access properties representing HTML attributes

We want to implement Step 3: Calculate the number of characters left.<br>

Let’s break down Step 3 into sub-goals:

<img width="206" height="267" alt="image" src="https://github.com/user-attachments/assets/83c3f778-5605-4593-9b32-b4c0bdf198df" />

## Getting information from the DOM
We have seen that the DOM exposes live information about HTML elements in the page via properties on the objects it returns.<br>

We wrote `textarea.value` to get the characters already typed. This solves Step 3.2 - we can write `textarea.value.length`.<br>

We can also access the character limit, because it’s defined as the `maxlength` attribute of the HTML textarea.<br>

In the Dev Tools console, if you type `textarea.max` you should see autocomplete for a property called `maxLength`.<br>

Most HTML attributes are exposed in the DOM as a property with the same name (but in camelCase). Let’s try:

```javascript
console.log(textarea.maxLength);
```
Now that we have the character limit (from `textarea.maxLength`), and the number of characters already typed (from `textarea.value.length`):

```javascript
const remainingCharacters = textarea.maxLength - textarea.value.length;
console.log(remainingCharacters);
```

Try typing in your textarea, then running this in the Dev Tools console.<br>

# 8. Updating the interface

## Learning Objectives

- [ ] Access and modify the textContent of a html element

We know we don’t want to always have the number “200” in the text “You have 200 characters remaining”.<br>

We’ve solved Step 3: Calculate the number of characters left. So we know what value we want to show..<br>

All that remains is:.<br>

1. To solve Step 4: Update the interface with the number of characters left.
2. To make this happen on page load.
3. To make this also happen when the textarea changes..<br>

Instead of writing that text exactly in our HTML, we can use the DOM to set the contents of our `p` tag.<br>

We can do this by querying the DOM for the element we want to update, and setting its `innerText` property. `innerText` is a property that represents “the text inside the element”.

If we change the value of a property in the DOM, it will update the page we’re viewing.

Try writing adding this to your `script.js`:

```javascript
const limitDisplay = document.querySelector("#character-limit-info");
limitDisplay.innerText = "You have loaded the page.";
```

Even though our HTML said the paragraph should contain “You have 200 characters remaining”, we replaced this text by using the DOM.<br>

### Step 4: Update the interface with the number of characters left.

To achieve this goal, we’ll need to access the `p` element with id `"character-limit-info"` and then update its text content. As before, we can use `document.querySelector` to access an element in the DOM using an appropriate CSS selector:

```javascript
const textarea = document.querySelector("textarea");
const remainingCharacters = textarea.maxLength - textarea.value.length;

const charactersLeftP = document.querySelector("#character-limit-info");
charactersLeftP.textContent = `You have ${remainingCharacters} characters remaining`;
```

And we can remove the initial text from the `p` tag from our HTML.

We want to do this because we have another way of setting this. If we wanted to change the text (e.g. to “You **only** have 200 characters remaining”), or change the character limit, we only want to change that one place (in our JavaScript). If we leave the initial value in the HTML, it could get out of date.

```javascript
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <section>
      <h3>Character limit</h3>
      <label for="comment-input">
        Please enter your comment in the text area below
      </label>
      <textarea
        id="comment-input"
        name="comment-input"
        rows="5"
        maxlength="200"
      ></textarea>
      <p id="character-limit-info"></p>
    </section>
  </body>
</html>
```

We are now *computing* and *setting* the character limit info using the DOM on page load.

# 9. Timers
## Learning Objectives
- [ ] Explain how we can call functions back after a set amount of time
- [ ] Describe how to use setTimeout
- [ ] Define a callback

To update the DOM, it’s helpful to understand the idea of timers and callbacks. _A callback_ is a function you pass as an argument to another function. The callback runs after the main function has finished its execution.

```javascript
function printMessage(name) {
  console.log(`My name is ${name}`);
}

printMessage("Sally");
printMessage("Daniel");
```

In this example, we have 2 different parts: **function declaration** and **function calls**. We define the function `printMessage` and we call this function twice. However, sometimes we may want to define a function but have it called back at a later point in time. Consider another example:

```javascript
function printMessage(name) {
  console.log(`My name is ${name}`);
}

setTimeout(printMessage, 3000, "Sally"); // <-- Call printMessage after at least 3000ms, with the argument "Sally"
printMessage("Daniel");
```

In this example, we define the function and call `printMessage` just once. We also call it ourselves once. We’re also using a built-in function called `setTimeout`. `setTimeout` allows us to set a minimum amount of time after which a function will be called back.

```javascript
setTimeout(printMessage, 3000, "Sally");
```
Let’s break this down this call to `setTimeout`. It is saying:<br>

`“After at least 3000 ms, call the function printMessage, and when you call back printMessage, pass the input of "Sally" to printMessage.”`

Notice we’re saying at least 3000 ms because `setTimeout` guarantees a minimum amount of time: it doesn’t say that `printMessage` must be called exactly after 3000 ms. In this example, we say that `printMessage` is a callback function as it is called back after 3000 milliseconds. (A callback function is a function that is passed as an argument to another function. We ourselves don’t call the callback function - something else will call it for us at the right time.)

Run this code in your terminal. In the terminal, you’ll see “Daniel” appear first. After at least a 3000 ms delay, you will see console log of “Sally”. Now play computer with some different combinations of timeouts and function calls. Set timeouts on a series of simple functions you can write yourself. Play with the numbers and line orders, and see if you can predict the execution order reliably.<br>

We will explore callbacks in more detail later on.

# 10.   DOM Events
## Learning Objectives
- [ ] Describe an event in the browser environment
- [ ] Update the strategy for implementing a character limit component

In the case of the `textarea` element, we want to update the `p` element text **every time the user types inside the textarea.** In other words, we want our application to **react** to the **user typing on the keyboard.** Currently our plan looks like this:<br>

<img width="588" height="387" alt="image" src="https://github.com/user-attachments/assets/90fb6cf7-c424-45bb-a9f4-4c99afa565ff" />

### 📖Definition: events

An [event](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events) is something that occurs in a programming environment that can be observed or responded to.<br>

Events are things that happen in the browser, which your code can ask to be told about, so that your code can react to them. In a browser context, an event could be:<br>

- a user clicking on a button
- a user typing something into a textarea box
- a user submitting a form
- and so on.
  
Not all events are in response to user actions. You can think of events as “interesting changes”. For instance, there is an event for the browser completing its initial render of the page. You can find a [complete reference all the different event types](https://developer.mozilla.org/en-US/docs/Web/Events) on MDN.<br>

When a user presses a key in our `textarea`, the browser will create an event. If we asked the browser to tell us about it, we can respond to it. So we can update our plan as follows:

<img width="609" height="288" alt="image" src="https://github.com/user-attachments/assets/91be9411-8a23-4dbb-aa7d-d3322db3100c" />

Notice a few things here:<br>

- There’s no arrow between Step 3 and Step 4. The trigger for Step 4 is a user doing something. If the user doesn’t type anything in the textarea, Step 4 will not run after the first load (and neither will Step 5 and Step 6).
- We don’t run Step 4. The browser runs Step 4. In Step 3 we asked the browser to do something for us in the future. **This is something new.** Up until now, we have always been the ones telling JavaScript what to do next.

# 11. Reacting to events
## Learning Objectives
- [ ] Identify the syntactic features of a call to `addEventListener`
- [ ] Explain when an event listener is called

As a user, we interact with the elements on a web page. We _click on buttons, input text, submit forms etc._<br>

To react to an event, we can declare a function that we want to run whenever a certain event occurs. We call this function an **event handler.** 

In the example below, we name this function `updateCharacterLimit`:

```javascript
const textarea = document.querySelector("textarea");

function updateCharacterLimit() {}
```
We need to tell the browser to call `updateCharacterLimit` whenever a keyup event fires/an event is triggered. We do this using `addEventListener`:

```javascript
const textarea = document.querySelector("textarea");

function updateCharacterLimit() {}

textarea.addEventListener("keyup", updateCharacterLimit);
```

Let’s break down the arguments that are passed to `addEventListener`.<br>

- `"keyup"` - this is the type of event we want to be notified about
- `updateCharacterLimit` - the second argument is a function. It is a function that is called when an event occurs.
  
In JavaScript, we can pass functions as arguments to other functions. In this case, we’re passing a function `updateCharacterLimit` to `addEventListener` as an input. We can think of this as saying: whenever a key is released on the `textarea` element, then the browser will call the function `updateCharacterLimit`. Any code we want to run in response to the `keyup` event will need to be inside the `updateCharacterLimit` function.<br>

### Javascript

We can add a log to `updateCharacterLimit` to check it is called every time the `"keyup"` event fires.

```javascript
// We already had the top part of this code before.

const textarea = document.querySelector("textarea");
const remainingCharacters = textarea.maxLength - textarea.value.length;

const charactersLeftP = document.querySelector("#character-limit-info");
charactersLeftP.innerText = `You have ${remainingCharacters} characters remaining`;

// From here down is new.

function updateCharacterLimit() {
  console.log(
    "keyup event has fired... The browser called updateCharacterLimit..."
  );
}

textarea.addEventListener("keyup", updateCharacterLimit);
```
### HTML-CSS
```js
<section>
  <h3>Character limit</h3>
  <label for="comment-input"
    >Please enter your comment in the text area below
  </label>
  <textarea
    id="comment-input"
    name="comment-input"
    rows="5"
    maxlength="200"
  ></textarea>
  <p id="character-limit-info"></p>
</section>
```
### Check 
In your local project, define your own event handler and then use `addEventListener` to register that event handler for a `keyup` event. Add a `console.log` to the event handler and check the event handler is being called when the event fires. Check the console tab in dev tools to see the log appear in the console.

# 12. Check progress

## Learning Objectives

- [ ] Use a plan to check progress in solving a problem

Let’s use the plan from earlier to check our progress.

<img width="611" height="291" alt="image" src="https://github.com/user-attachments/assets/9a454fc9-1903-46b5-b5b5-2d01e89c960c" />

Let’s consider our code at the moment:

```javascript
const textarea = document.querySelector("textarea");
const remainingCharacters = textarea.maxLength - textarea.value.length;

const charactersLeftP = document.querySelector("#character-limit-info");
charactersLeftP.innerText = `You have ${remainingCharacters} characters remaining`;

function updateCharacterLimit() {
  console.log(
    "keyup event has fired... The browser called updateCharacterLimit..."
  );
}

textarea.addEventListener("keyup", updateCharacterLimit);
```

We’ve done the following:<br>

- [x] Step 1: Defined a `characterLimit`
- [x] Step 2: Accessed the `textarea` element
- [x] Step 3: Registered an event handler `updateCharacterLimit`<br>
- [x] Step 5: Calculate the number of characters left<br>
- [x] On initial page load, update the user interface with the number of characters left<br>

The browser will do the following for us:<br>

- [x] Step 4: The browser will tell us when a user has pressed a key<br>

We must still complete the following steps:<br>

- [ ] Step 6: Update the user interface with the number of characters left<br>

We can re-use our existing code to update the user interface when the browser tells us the user has pressed a key:

```javascript
const textarea = document.querySelector("textarea");
const remainingCharacters = textarea.maxLength - textarea.value.length;

const charactersLeftP = document.querySelector("#character-limit-info");
charactersLeftP.innerText = `You have ${remainingCharacters} characters remaining`;

function updateCharacterLimit() {
  const remainingCharacters = textarea.maxLength - textarea.value.length;
  const charactersLeftP = document.querySelector("#character-limit-info");
  charactersLeftP.innerText = `You have ${remainingCharacters} characters remaining`;
}

textarea.addEventListener("keyup", updateCharacterLimit);
```

Typing in to the `textarea` element, we should see the page get updated to say e.g. “You have 118 characters left”.<br>

# 13. Refactor

- [ ] Identify and remove duplicated code

We have two identical blocks of code. Do you see? 

```javascript
const textarea = document.querySelector("textarea");
// identical block 1
const remainingCharacters = textarea.maxLength - textarea.value.length;

const charactersLeftP = document.querySelector("#character-limit-info");
charactersLeftP.innerText = `You have ${remainingCharacters} characters remaining`;

function updateCharacterLimit() {
 // identical block 2 
  const remainingCharacters = textarea.maxLength - textarea.value.length;
  const charactersLeftP = document.querySelector("#character-limit-info");
  charactersLeftP.innerText = `You have ${remainingCharacters} characters remaining`;
}

textarea.addEventListener("keyup", updateCharacterLimit);
```

We know that functions can be used to avoid duplication. We have actually already extracted a function for this functionality for the event handler! Now let’s call it from the other place we do the same thing:

```javascript
const textarea = document.querySelector("textarea");

updateCharacterLimit();

function updateCharacterLimit() {
  const remainingCharacters = textarea.maxLength - textarea.value.length;
  const charactersLeftP = document.querySelector("#character-limit-info");
  charactersLeftP.innerText = `You have ${remainingCharacters} characters remaining`;
}

textarea.addEventListener("keyup", updateCharacterLimit);
```
__💡Remember :__
When we think we’ve completed a goal or sub-goal, we should look at our code and see if we can improve it before we continue.


# 14. Fundamentals of DOM 
This tutorial covers the fundamentals of the Document Object Model (DOM) in JavaScript. 
[![Watch the video](https://img.youtube.com/vi/c6IyCwAV6BY/0.jpg)](https://www.youtube.com/watch?v=c6IyCwAV6BY)

