# 1. How the internet works

## Learning Objectives

- [ ] Describe what happens when a user enters a url into a browser
- [ ] Explain the purpose of the HTTP protocol
- [ ] Define a GET request in the HTTP protocol

We’ve been using the internet for years, but how does it actually work? What happens when you type a URL into a browser? How does the browser know where to go? How does it know what to show? How does it know how to show it?<br>

## What is the Internet?

[![WII](https://i.ytimg.com/vi/Dxcc6ycZ73M/maxresdefault.jpg)](https://youtu.be/Dxcc6ycZ73M)

## Understanding networks

[![UN](https://i.ytimg.com/vi/ZhEf7e4kopM/maxresdefault.jpg)](https://youtu.be/ZhEf7e4kopM)

## HTTPS & HTML

[![UN](https://i.ytimg.com/vi/kBXQZMmiA4s/maxresdefault.jpg)](https://youtu.be/kBXQZMmiA4s)

# 2. Rendering Data as UI

### Learning Objectives

- [ ] Explain how data is rendered into a user interface

When we build user interfaces we often take data and render (`rendering is the process of building an interface from some code`) it in the user interface. We will model some real-life objects using data structures such as arrays and objects. However, end users don’t directly interact with data structures. Instead, they’ll interact with a rendering of these data structures through some user interface, typically a web browser. We’re going to start with some structured data and explore how we can render it on the page.

# 3. Cinema listings

### Learning Objectives

- [ ] Define an acceptance criterion for building a web page
- [ ] Use a wireframe to make a basic design for the web page

Suppose you’re building a user interface to display the films that are now showing on a film website. We need to render some cinema listings in the user interface. Let’s define an acceptance criterion:

_Given_ a list of film data<br>
_When_ the page first loads<br>
_Then_ it should display the list of films now showing, including the film title, times and film certificate.

## Wireframe

<img width="681" height="649" alt="image" src="https://github.com/user-attachments/assets/58335cfd-e32f-4985-8339-6a785a1d954e" />

**A grid of cards displaying film information** <br>

To visualise the user interface, we can use a wireframe. _A wireframe_ is a basic outline of a web page used for design purposes. This films wireframe is built by reusing the same _UI component_ which is a reusable, self-contained piece of the UI. UI components are like lego blocks you can use to build websites. Most websites are made by “composing” components in this way. Each film object is rendered as a card component. To build this user interface, we will start with data in the form of an array of objects(see below), each with similar properties.

Our task will be to build the film listings view from this list of data.

Create an `index.html` file and follow along.

Here are some example film data:<br>

```javascript
const films = [
  {
    title: "Killing of Flower Moon",
    director: "Martin Scorsese",
    times: ["15:35"],
    certificate: "15",
    duration: 112,
  },
  {
    title: "Typist Artist Pirate King",
    directory: "Carol Morley",
    times: ["15:00", "20:00"],
    certificate: "12A",
    duration: 108,
  },
];
```

To visualise the user interface, we can use a wireframe🧶(`A wireframe is a basic outline of a web page used for design purposes`). This films wireframe is built by reusing the same UI component🧶(`A UI component is a reusable, self-contained piece of the UI. UI components are like lego blocks you can use to build websites. Most websites are made by “composing” components in this way.`). Each film object is rendered as a card component. To build this user interface, we will start with data in the form of an array of objects, each with similar properties.<br>

Our task will be to build the film listings view from this list of data.<br>

Create an `index.html` file and follow along.

# 4. Step-through-pre-workshop

[![Video](https://i.ytimg.com/vi/afd8g8I4474/maxresdefault.jpg)](https://youtu.be/afd8g8I4474)

____ 

# 5. Rendering one card

### Learning Objectives

- [ ] Define a sub-goal for rendering data in the user interface

### 🎯 Sub-goal: Build a film card component

To break down this problem, we’ll render a single datum, before doing this for the whole list. Here’s one film:<br>

```javascript
const film = {
  title: "Killing of Flower Moon",
  director: "Martin Scorsese",
  times: ["15:35"],
  certificate: "15",
  duration: 112,
};
```

Starting with this object, we’ll focus only on building this section of the user interface:<br>

<details>
<summary> Open this wireframe of single film card </summary>
<img width="504" height="655" alt="image" src="https://github.com/user-attachments/assets/a7049c46-50b2-47ed-a11b-a9bf45e1042e" />
</details>


# 6. Composing elements

### Learning Objectives

- [ ] Compose UI elements to some specification
- [ ] Append DOM elements to other nodes in the DOM tree

We can start by calling `createElement` to create and compose DOM elements. (_To compose DOM elements_ means to combine DOM elements to form some part of the user interface).


For now, we’ll only consider rendering the `title` property from the `film` object. Create this script in your `index.html`:
```js 
const film = {
  title: "Killing of Flower Moon",
  director: "Martin Scorsese",
  times: ["15:35"],
  certificate: "15",
  duration: 112,
};

const filmTitle = document.createElement("h3");
filmTitle.textContent = film.title;
console.log(filmTitle);
``` 
### HTML
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Film View</title>
  </head>
  <body>
    <script>
      const film = {
        title: "Killing of Flower Moon",
        director: "Martin Scorsese",
        times: ["15:35"],
        certificate: "15",
        duration: 112,
      };
      const filmTitle = document.createElement("h3");
      filmTitle.textContent = film.title;
      console.log(filmTitle);
    </script>
  </body>
</html>
```
If we open up the console tab, we should be able to see this element logged in the console. However, it won’t yet appear in the browser.

### Appending elements

To display the film card, we need to append it to another element that is already in the DOM tree. For now let’s append it to the body, because that always exists.<br>

```javascript
const film = {
  title: "Killing of Flower Moon",
  director: "Martin Scorsese",
  times: ["15:35"],
  certificate: "15",
  duration: 112,
};

const filmTitle = document.createElement("h3");
filmTitle.textContent = film.title;

document.body.append(filmTitle);
```
We can extend this card to include more information about the film by creating more elements:

```javascript
const film = {
  title: "Killing of Flower Moon",
  director: "Martin Scorsese",
  times: ["15:35"],
  certificate: "15",
  duration: 112,
};

const card = document.createElement("section");

const filmTitle = document.createElement("h3");
filmTitle.textContent = film.title;
card.append(filmTitle);

const director = document.createElement("p");
director.textContent = `Director: ${film.director}`;
card.append(director);

const duration = document.createElement("time");
duration.textContent = `${film.duration} minutes`;
card.append(duration);

const certificate = document.createElement("data");
certificate.textContent = `Certificate: ${film.certificate}`;
card.append(certificate);

document.body.append(card);
```
Eventually, we will include all the information, to match the wireframe. This is a bit tedious, as we had to write lots of similar lines of code several times, but it works.

# 7. Creating elements with functions

## Learning Objectives

- [ ] Extract functions for common tasks
- [ ] Identify benefits of using reusable functions

We now have a card showing all of the information for one film. The code we have is quite repetitive and verbose. It does similar things lots of times.<br>

Let’s look at two ways we could simplify this code. First we will explore extracting a function. Then we’ll look at using `<template>` tags.<br>

## Refactoring: Extracting a function
One way we can simplify this code is to refactor it.

We can identify things we’re doing several times, and extract a function to do that thing for us.<br>

In this example, we keep doing these three things:<br>

1. Create a new element (sometimes with a different tag name).
2. Set that element’s text content (always to different values).
3. Appending that element to some parent element (sometimes a different parent).
   
We could extract a function which does these three things. The things which are different each time need to be parameters to the function.<br>

We could write a function like this:<br>

```javascript
function createChildElement(parentElement, tagName, textContent) {
  const element = document.createElement(tagName);
  element.textContent = textContent;
  parentElement.append(element);
  return element;
}
```
And then rewrite our code to create the card like this:

```javascript
const film = {
  title: "Killing of Flower Moon",
  director: "Martin Scorsese",
  times: ["15:35"],
  certificate: "15",
  duration: 112,
};

function createChildElement(parentElement, tagName, textContent) {
  const element = document.createElement(tagName);
  element.textContent = textContent;
  parentElement.append(element);
  return element;
}

const card = document.createElement("section");

createChildElement(card, "h3", film.title);

createChildElement(card, "p", `Director: ${film.director}`);

createChildElement(card, "time", `${film.duration} minutes`);

createChildElement(card, "data", `Certificate: ${film.certificate}`);

document.body.append(card);
```

This code does exactly the same thing as the code we had before. By introducing a function we have introduced some advantages:<br>

1. Our code is smaller, which can make it easier to read and understand what it’s doing.
2. If we want to change how we create elements we only need to write the new code one time, not for every element. We could add a class attribute for each element easily.
3. We can see that each element is being created the same way. Before, we would have to compare several lines of code to see this. Because we can see they’re calling the same function, we know they’re made the same way.
4. We’re less likely to make mistakes copying and pasting the code. In the first version of this content, we actually wrote `duration.textContent = Certificate: ${film.certificate};` instead of `certificate.textContent = Certificate: ${film.certificate};` because we were just copying and pasting and missed an update. The less we need to copy and paste and update code, the less likely we are to miss an update.<br>

There are also some drawbacks to our refactoring:<br>

1. If we want to change how we create some, but not all, elements, we may have made it harder to make these changes. When we want to include an image of the director, or replace the certificate text with a symbol, we will have to introduce branching logic.
2. To follow how something is rendered, we need to look in a few places. This is something you will need to get used to, so it’s good to start practising now.

# 8. Creating elements with `<template>`

### Learning Objectives

- [ ] Use template tags to simplify element initialisation
- [ ] Identify trade-offs between using functions vs template tags to create components

### Using `<template>` tags

We could simplify this code with a different technique for creating elements.<br>

Until now, we have only seen one way to create elements: `document.createElement`. The DOM has another way of creating elements - we can copy existing elements and then change them.<br>

HTML has a useful tag designed to help make this easy, [the <`template`> tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template). When you add a `<template>` element to a page, it doesn’t get displayed when the page loads. It is an inert fragment of future HTML.<br>

We can copy any DOM node, not just `<template>` tags. For this problem, we will use a `<template>` tag because it is designed for this purpose.<br>

When we copy an element, its children get copied. This means we can write our template card as HTML:<br>

```javascript
<template id="film-card">
  <section>
    <h3>Film title</h3>
    <p data-director>Director</p>
    <time>Duration</time>
    <data data-certificate>Certificate</data>
  </section>
</template>
```

   This is our template card. Place it in the body of your html. It doesn’t show up! [Template HTML](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template) is like a wireframe; it’s just a *plan*. We can use this template to create a card for any film object. We will clone (copy) this template and populate it with data. Replace the contents of your `<script>` tag with this:

```javascript
const film = {
  title: "Killing of Flower Moon",
  director: "Martin Scorsese",
  times: ["15:35"],
  certificate: "15",
  duration: 112,
};

const card = document.getElementById("film-card").content.cloneNode(true);
// Now we are querying our cloned fragment, not the entire page.
card.querySelector("h3").textContent = film.title;
card.querySelector(
  "[data-director]"
).textContent = `Director: ${film.director}`;
card.querySelector("time").textContent = `${film.duration} minutes`;
card.querySelector(
  "[data-certificate]"
).textContent = `Certificate: ${film.certificate}`;

document.body.append(card);
```
This code will produce the same DOM elements in the page as the two other versions of the code we’ve seen (the verbose version, and the version using `createChildElement`).<br>

The first two approaches (the verbose version, and the `createChildElement` version) did so by calling the same DOM functions as each other.<br>

This approach uses different DOM functions. But it has the same effect.<br>

### 🏋🏻‍♀️ Exercise: Consider the trade-offs

We’ve now seen two different ways of simplifying our function: extracting a function, or using a template tag.<br>

Both have advantages and disadvantages.<br>

Think of at least two trade-offs involved. What is better about the “extract a function” solution? What is better about the template tag solution? Could we combine them?<br>

Share your ideas about trade-offs in a thread in Slack.

# 9. Reusable components

### Learning Objectives
- [ ] Implement components for a user interface

Recall our sub-goal:<br>

### 🎯 Sub-goal: Build a film card component
---

Now that we have made a card work for one particular film, we can re-use that code to render any film object in the user interface with a general component. To do this, we wrap up our code inside a JavaScript function. JavaScript functions reuse code: so we can implement reusable UI components using functions.<br>

We could use either our `createChildElement` implementation or our `<template>` implementation - making a component function works the same for either. As an example, we will use the `<template>` implementation:<br>

```javascript
const film = {
  title: "Killing of Flower Moon",
  director: "Martin Scorsese",
  times: ["15:35"],
  certificate: "15",
  duration: 112,
};

const template = document.getElementById("film-card");
const createFilmCard = (film) => {
  const card = template.content.cloneNode(true);
  // Now we are querying our cloned fragment, not the entire page.
  card.querySelector("h3").textContent = film.title;
  card.querySelector(
    "[data-director]"
  ).textContent = `Director: ${film.director}`;
  card.querySelector("time").textContent = `${film.duration} minutes`;
  card.querySelector(
    "[data-certificate]"
  ).textContent = `Certificate: ${film.certificate}`;
  // Return the card, rather than directly appending it to the page
  return card;
};
const filmCard = createFilmCard(film);

// Remember we need to append the card to the DOM for it to appear.
document.body.append(filmCard);
```

### 🏋🏻‍♀️ Exercise: Use destructuring

Refactor the createFilmCard function to use object destructuring for the film parameters.<br>

# 10. One-to-one mappings

### Learning Objectives
- [ ] Describe how to render a list of data

We can now render any one film data object in the UI. However, to fully solve this problem we must render a list of all of the film objects. For each film object, we need to render a corresponding film card in the UI. In this case, there is a one-to-one mapping (`A one-to-one mapping associates every element in a set to exactly one element in another set`) between the data array and the UI components on the web page. Each item in the array matches a node in the UI. We can represent this diagrammatically by pairing up the data elements with their corresponding UI components:<br>

<img width="472" height="205" alt="image" src="https://github.com/user-attachments/assets/10790f5d-dcb1-43ad-8f57-7395ea6a1eb3" />

To create an array of card components we can iterate through the film data using a `for...of` loop:

```javascript
const filmCards = [];
for (const item of films) {
  filmCards.push(createFilmCard(item));
}

document.body.append(...filmCards);
// invoke append using the spread operator
```

However, there are alternative methods for building this array of UI components.<br>

# 11. Using map

### Learning Objectives
- [ ] Describe how to use map

We want to create a new array by applying a function to each element in the starting array. Earlier, we used a `for...of` statement to apply the function `createFilmCard` to each element in the array. However, we can also build an array using the [map array method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map). `Map` is a _higher order function._ (`A higher-order function is a function that takes another function as an argument or returns a new function`). In this case, it means we pass a function as an argument to `map`. Then `map` will use this function to create a new array.

Work through this `map` exercise. It’s important to understand map before we apply it to our film data.

```javascript
const arr = [5, 20, 30];

function double(num) {
  return num * 2;
}
```

Our goal is to create a new array of doubled numbers given this array and function. We want to create the array `[10, 40, 60]`. Look, it’s another “one to one mapping”.<br>

<img width="414" height="298" alt="image" src="https://github.com/user-attachments/assets/47daf2f6-48de-435d-b4f7-6bf8d125ca65" />

We are building a new array by applying `double` to each item. Each time we call `double` we store its return value in a new array:

```javascript
function double(num) {
  return num * 2;
}

const numbers = [5, 20, 30];
const doubledNums = [
  double(numbers[0]),
  double(numbers[1]),
  double(numbers[2]),
];
```

But we want to generalise this. Whenever we are writing out the same thing repeatedly in code, we probably want to make a general rule instead. We can do this by calling `map`:

```javascript
function double(num) {
  return num * 2;
}

const numbers = [5, 20, 30];
const doubledNums = numbers.map(double);
```
Use [the array visualiser](https://array-visualizer.codeyourfuture.io/?array=%5B5%2C20%2C30%5D&mode=map&valueFunction=function%28num%29+%7Breturn+num+*+2%3B%7D) to observe what happens when map is used on the arr. Try changing the elements of arr and the function that is passed to map. Answer the following questions in the visualiser:
- What does `map` do?
- What does `map` return?
- What parameters does the `map` method take?
- What parameters does the `callback` function take?

Or, use [pythontutor](https://pythontutor.com/render.html#mode=display) to see what happens when the `map` is called.

# 12. Applying Map to our problem

### Learning Objectives

- [ ] Use map to render multiple film cards

Now that we understand `map`, let’s ty to use it in our project.<br>

Given the list of film data:

```javascript
const films = [
  {
    title: "Killing of Flower Moon",
    director: "Martin Scorsese",
    times: ["15:35"],
    certificate: "15",
    duration: 112,
  },
  {
    title: "Typist Artist Pirate King",
    director: "Carol Morley",
    times: ["15:00", "20:00"],
    certificate: "12A",
    duration: 108,
  },
];
```

Use `createFilmCard` and `map` to create an array of film card components. In your local project, render this array of components in the browser.