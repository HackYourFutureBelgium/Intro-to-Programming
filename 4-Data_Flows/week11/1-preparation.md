# 1. Reacting to user input

## Learning Objectives

- [ ] Explain how JavaScript can react to user input from a search input

As users interact with web applications, they trigger events by doing things like clicking buttons, submitting forms, or typing text. We need to respond to these events. Let’s explore a common example: searching.<br>

```html
<label>
  Search <input type="search" id="q" name="q" placeholder="Search term" /> 🔍
</label>
```

When a user types text into a search box, we want to capture their input and use it to filter and redisplay search results. This means the **state** of the application changes as the user types. We need to **react** to this change by updating the UI.<br>

We’ll explore these ideas today. Code along with the examples in this lesson.<br>

# 2. Step-through-prep-workshop

[![Video](https://i.ytimg.com/vi/7kYwo6W89j4/maxresdefault.jpg)](https://youtu.be/7kYwo6W89j4)

# 3. Break down the problem

## Learning Objectives

- [ ] Identify and sequence sub tasks

We already have a website for displaying film listings.<br>

Let’s think through building this film search interface step-by-step. Write down your sequence of steps to build this interface.<br>

_Given_ a view of film cards and search box<br>
_When_ a user types in the search box<br>
_Then_ the view should update to show only matching films.

---

### Draw your plan

<img width="766" height="220" alt="image" src="https://github.com/user-attachments/assets/a61eda4e-b809-44d3-a922-2412833ceca5" />

### Write your plan

1. Display search box and initial list of films
2. Listen for user typing in search box
3. Capture latest string when user types
4. Filter films list based on search text
5. Update UI with filtered list

The key aspects we need to handle are capturing input and updating UI.

### Capturing Input
We need to listen for the `input` event on the search box to react as the user types. When the event fires, we can read the updated string value from the search box input element.

### Filtering Data
Once we have the latest search text, we can filter the list of films. We can use JavaScript array methods like `.filter()` to return films that match our search string.

### Updating UI
With the latest filtered list of films in hand, we re-render these films to display the updated search results. We can clear the current film list and map over the filtered films to add updated DOM elements.

Thinking through these aspects separately helps frame the overall task. Next we can focus on each piece:

1. Listening for input
2. Filtering data
3. Re-rendering UI with the films example.

__💡Tip:__ We clear the current film list and then add elements based on our new list.

### 💭 Why clear out the list and make new elements?

We could go through the existing elements, and *change* them. We could add a `hidden` CSS class to ones we want to hide, and remove a `hidden` CSS class from those we want to show.<br>

But we prefer to clear out the list and make new elements. We do not want to change existing ones.<br>

### 🧘🏽‍♂️ Do the simplest thing
It is simpler because we have fewer things to think about. With either approach, we need to solve the problem “which films do we want to show”. By clearing out elements, we then only have to solve the problem “how do I display a film?”. We don’t also need to think about “how do I hide a film?” or “how do I show a film that was hidden?”.<br>

### 🍱 A place for everything
In our pattern we only deal with how we turn data into a card in one place. If we need to worry about changing how a card is displayed, that would have to happen somewhere else.<br>

By making new cards, we avoid thinking about how cards change.<br>

We can focus.<br>

# 4. Identifying state

## Learning Objectives

- [ ] Identify the state in a given problem

### 🕞 State: data which may change over time.
---

We store each piece of state in a variable. When we render in the UI, our code will look at the state in those variables. When the state changes, we render our UI again based on the new state.<br>

“What the state used to be” or “How the state changed” isn’t something we pay attention to when we render. We always render based only on the current state.<br>

We want to have as few pieces of state as possible. We want them to be fundamental.<br>

Some guidelines for identifying the state for a problem:<br>

### ✔️ If something can change it should be state.
In our film example, the search term can change, so it needs some state associated with it.<br>

### ❌ But if something can be derived it should not be state.
In our film example, we would not store “is the search term empty” and “what is the search term” as separate pieces of state. We can work this answer out ourselves. This answer can be derived. We can answer the question “is the search term empty” by looking at the search term. We don’t need two variables: we can use one.<br>

### 🖇️ If two things always change together, they should be one piece of state.
If a website allows log-in, we would not have one state for “is a user logged in” and one state for “what user is logged in”. We would have one piece of state: The currently logged in user. We would set that state to `null` if there is no logged in user. We can answer the question “is a user logged in” by checking if the currently logged in user is `null`. We don’t need a separate piece of state.<br>

### State in our example
In our film example, we need two pieces of state:<br>

1. Our list of all films
2. The search term
   
When we introduce filtering films based on the search term **we will not introduce other new state.** We will not store a filtered list of films in state. Our filtered list of films can be derived from our existing state.<br>

# 5. Refactoring to state+render

## Learning Objectives

- [ ] Structure code to use state and render
- [ ] Define refactoring
- [ ] Refactor code

We are going to introduce a common pattern in writing UIs, which is to define and use a function called `render`.

Up until now, our film website has been **static**: it never changes. By introducing a search input, our website is becoming dynamic: it can change. This means that we may need to re-run the code which creates our UI elements.

So before we add the new functionality to our website, we are going to **refactor** (`Refactoring is when we change how our code is structured, without changing what it does. Even though we have changed our code, it does exactly the same thing it did before.`). Find your code that creates the film cards and adds them to the page. Move your code into a function called `render`:

```javascript
const films = [
  // You have this array from before.
];

function createFilmCard(filmData) {
  // You should have an implementation of this function from before.
}

function render() {
  const filmCards = films.map(createFilmCard);
  document.body.append(...filmCards);
}
```

We’re missing one thing: We’re never calling our `render` function! Call your `render` function after you define it:

```javascript
const films = [
  // You have this array from last week.
];

function createFilmCard(filmData) {
  // You should have an implementation of this function from last week.
}

function render() {
  const filmCards = films.map(createFilmCard);
  document.body.append(...filmCards);
}

render();
```

Your application should now work exactly the same as it did before. Because we moved our code into a function, this means we can call that function again if we need to, for instance when someone searches for something.<br>

We saw this same pattern when we made the character limit component. We called the same function on page load, and when someone typed something.<br>

### Storing our state somewhere

Up until now, we had a variable called `films`, and we created some cards based on that variable.<br>

Let’s move this `films` variable inside an object called `state`, to make it clear to us what the state is in our application.<br>

```javascript
const state = {
  films: [
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
  ],
};
```

Each time we need to store more information we should think: Is this a piece of state, or is this something we’re deriving from existing state? Whenever something in our state changes, we will tell our UI just to show “whatever is in the state” by calling the `render` function. In this way, we simplify our UI code by making it a function of the state.

_💡Tip:_ We don’t need to store our state in a variable called `state`. It was already `state` when it was called `films`. But naming this variable `state` can help us to think about it more clearly.

Make sure to update any references to the `films` variable you may have had before to instead reference `state.films`.<br>

This is another refactoring: we didn’t change what our application does, we just moved a variable.<br>

# 6. Introducing new state

We are introducing a new feature: being able to search for films. We have identified that this introduces one new element of state: the search term someone has asked for.<br>

Let’s add it to our state object:

```javascript
const state = {
  films: [
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
  ],
  searchTerm: "",
};
```

We needed to pick an initial value for this state. We picked the empty string, because when someone first loads the page, they haven’t searched for anything. When someone types in the search box, we will change the value of this state, and re-render the page.

We could pick any initial value. This actually allows us to finish implementing our render function *before we even introduce a search box into the page*. In real life, our `searchTerm` state will be empty at first, but we can use different values to help us with development. We can make the page look like someone searched for “Pirate”, even before we introduce a search box in the UI.<br>

This is because we have split up our problem into three parts:<br>

1. Identify what state we have.
2. Define how to render the page based on that state.
3. Change state (perhaps in response to some user action).<br>

Let’s try making our render function work for the search term “Pirate”. Change the initial value of the `searchTerm` field of the `state` object to “Pirate”:

```javascript
const state = {
  films: [
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
  ],
  searchTerm: "Pirate",
};
```
We expect, if someone is searching for “Pirate”, to only show films whose title contains the word Pirate.<br>

# 7. Rendering based on state

## Learning Objectives

- [ ] Filter films based on search terms
- [ ] Render a filtered list

For now, we have set the initial value of the `searchTerm` state to “Pirate”. This means that our render function should only create cards for films which contain the word “Pirate” in their title. But right now, our render function creates cards for all of the films.<br>

In our render function, we must filter our list down to the films that match our search term. This does not require us to introduce new state. We can derive a filtered list from our existing state.<br>

### Filter function
We can use the higher order array function [.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) to return a new array of films that include the search term:<br>

```javascript
const filteredFilms = state.films.filter((film) =>
  film.title.includes(state.searchTerm)
);
```

We can change our render function to *always* do this. If `searchTerm` is empty, our filter function will return all the films:

```javascript
function render() {
  const filteredFilms = state.films.filter((film) =>
    film.title.includes(state.searchTerm)
  );
  const filmCards = filteredFilms.map(createFilmCard);
  document.body.append(...filmCards);
}
```

### Predict the state
1. At this point in our codealong, when we open our page, what will we see?
2. 2 If we change the initial value of `state.searchTerm` back to the empty string and open the page again, what will we see?

### Check understanding

If we open our page, we should now only see cards for films containing “Pirate” in their title.<br>

If we change the initial value of `state.searchTerm` back to the empty string and open the page again, we should see cards for all of the films.<br>

We have now solved two of our three problems:

- [x] Identify what state we have.<br>
- [x] Define how to render the page based on that state.<br>
- [ ] Change state (perhaps in response to some user action).<br>

## Making our search more user friendly

_💡Things to consider:_ Users don’t always type perfectly. How will you match their typing to the film titles? What if they type in all caps? What is the simplest thing that could possibly work?

One of the nice things about breaking down the problem like this is that it allows us to change rendering without needing to interact with the page.<br>

If we want to improve our search functionality (e.g. to make it work if you searched for PIRATES in all-caps), we can set the initial value of `state.searchTerm` to `"PIRATES"` and make changes to our `render` function. Then every time we open the page, it will be like we searched for “PIRATES”.<br>

This can be a lot quicker than having to refresh the page and type in “PIRATES” in the search box every time we make a change want to see if our search works.<br>

### 🏋🏻‍♀️ Exercise: Make search more user friendly
Try to make your render function work even if someone searched for “pirates” or “PIRATES”.

# 8. Capturing the user event

## Learning Objectives

- [ ] Add an event listener to a user input

We’ve introduced our state, and our render works for different values of that state. But users of our website can’t change the `searchTerm` state themselves. We need to introduce a way for them to change the `searchTerm` state via the UI.<br>

To listen for the search input event, we can add an event listener. (`An event listener waits for a specific event to occur. It runs in response to things like clicks, and key presses. We register listeners with addEventListener by passing the event name and a handling function.`).

```javascript
const searchBox = document.getElementById("search");

searchBox.addEventListener("input", handleSearchInput);

function handleSearchInput(event) {
  // React to input event
}
```

These listeners wait for specific events to occur, and when they do, they trigger a callback function we’ve defined. This gives us a way to make our code respond to user actions rather than running all at once.<br>

```javascript
const search = document.getElementById("search");
search.addEventListener("input", handleInput);
```

When we call `addEventListener`, it doesn’t immediately execute the `handleInput` function. Instead, it sets up a listener that will run this function later. Event listeners are part of the web browser’s Event API. But event listeners themselves aren’t part of the core JavaScript language! When you create an event listener, you’re making a request to a Web API to handle this functionality for you. In this pattern, the callback function (`handleInput`) only executes when a user types. These callback functions need to execute in response to user interactions. This lets us tell the browser exactly what actions to take once a particular event occurs.<br>

Callback functions are essential for handling user interactions in web browsers. They allow our code to execute in response to an event. The browser listens for events and executes our callback functions at the right time. It is our job to define what should happen when those events occur.<br>

# 9. Re-rendering

## Learning Objectives

- [ ] Re-render a page based on user input
- [ ] Debug why a page isn’t re-rendering as expected

When the “input” event fires, our handler function will run. Inside the handler we can access the updated input value: `const searchTerm = event.target.value;`

So our key steps are:
1. Add an input event listener to the search box.
2. In the handler, get the `value` of input element.
3. Set the new state based on this value.
4. Call our `render` function again.

__⚠️One thing at a time!__

But we’re not going to do all of these at once! Stop and implement just the first two steps (adding the event listener, and getting the value), and `console.log` the search term.

We will make sure this works before we try to change the UI. Why? If we try to add the event listener and something doesn’t work, we will only have a little bit of code to debug.<br>

If we tried to solve the whole problem (updating the UI) and something didn’t work, we would have a lot of code to debug, which is harder!<br>

We’ve now demonstrated that we can capture search text on every keystroke:<br>

```javascript
const searchBox = document.getElementById("search");

searchBox.addEventListener("input", handleSearchInput);

function handleSearchInput(event) {
  const searchTerm = event.target.value;
  console.log(searchTerm);
}
```

Now that we’ve shown we can log the search text, we can set the new value of the searchTerm state, and re-render the page.<br>

We should have a page like this:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Film View</title>
  </head>
  <body>
    <label>Search <input type="text" id="search" /></label>
    <template id="film-card">
      <section>
        <h3>Film title</h3>
        <p data-director>Director</p>
        <time>Duration</time>
        <data data-certificate>Certificate</data>
      </section>
    </template>
    <script>
      const state = {
        films: [
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
        ],
        searchTerm: "",
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

      function render() {
        const filteredFilms = state.films.filter((film) =>
          film.title.includes(state.searchTerm)
        );
        const filmCards = filteredFilms.map(createFilmCard);
        document.body.append(...filmCards);
      }

      const searchBox = document.getElementById("search");

      searchBox.addEventListener("input", handleSearchInput);

      function handleSearchInput(event) {
        const searchTerm = event.target.value;
        console.log(searchTerm);
      }

      render();
    </script>
  </body>
</html>
```

We want to change our search input handler to update `state.searchTerm` and call `render()` again.<br>

Implement this and try searching what's happening or why what’s happening isn’t what we expected.<br>

# 10. Actually re-rendering

## Learning Objectives

- [ ] Group UI components by whether they need to re-render
- [ ] Control which UI components are re-rendered

We have seen that when we search, we’re only adding new elements, and not removing existing elements from the page.<br>

We previously identified our strategy of clearing old elements before adding new ones. But we are not doing this.<br>

We can clear out the existing children of an element by setting its `textContent` property to the empty string:<br>

```javascript
document.body.textContent = "";
```

Add this to your `render` function before you add new elements. Try using your page. Try searching for a particular film.<br>

Oh no, our search box is gone!<br>

### 🏋🏻‍♀️ Exercise: 
Work out why our search box is gone. Remember what we just changed, and what we were trying to do by making that change.

We removed our search box from the page because we removed everything from the entire document body.<br>

This was not our intention - we only wanted to remove any films we had previously rendered.<br>

A way to solve this is to introduce a container element which our `render` function will re-fill every time it’s called.<br>

We should identify which elements in our page should be re-drawn every time we render, and which should always be present.<br>

Introduce a new container, and keep any “always present” UI elements outside of it. Update your `render` function to clear and append to the container, not the whole body.<br>

Remember to use semantic HTML. Your container should be an appropriate tag for the contents it will have.<br>