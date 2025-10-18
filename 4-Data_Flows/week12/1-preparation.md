# 1. Fetching data

## Learning Objectives

- [ ] Define a client side Web API
- [ ] Define a server side API

So far we have displayed film data stored in our JavaScript code. But real applications fetch data from servers over the internet. We can restate our problem as follows:<br>

_Given_ an API that serves film data<br>
_When_ the page first loads<br>
_Then_ the page should `fetch` and display the list of film data, including the film title, times, and film certificate.

---

# Client side and Server side APIs

We will use [`fetch()`](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch), a client side Web API (`A client side Web API lives in the browser. They provide programmatic access to built-in browser functions from JavaScript.`). Fetch will fetch our data from the server side API (`A server side API lives on a server. They provide programmatic access to data or functions stored on the server from JavaScript`).<br>

APIs are useful because they let us get information which we don’t ourselves know. The information may change over time, and we don’t need to update our application. When we ask for the information, the API will tell us the latest version..<br>

We also don’t need to know how the API works in order to use it. It may be written in a different programming language. It may talk to other APIs we don’t know about. All we need to know is how to talk to it. This is called the **interface**.<br>

*Using* fetch is simple. But we want to understand what is happening more completely. So let’s take ourselves on a journey through time..<br>

See the journey (We will explain this in little pieces)
<details>
<summary>  Unfurl to see the journey (we will explain this in little pieces)</summary>

<img width="984" height="1254" alt="image" src="https://github.com/user-attachments/assets/7217efdf-a245-4a64-8284-cd96504cc5d8" />

</details>

# 2. Step-through-prep-workshop

[![Video](https://i.ytimg.com/vi/J-0XkB54yp8/maxresdefault.jpg)](https://youtu.be/J-0XkB54yp8)

# 3. Latency

## Learning Objectives

- [ ] Define latency

<img width="678" height="173" alt="image" src="https://github.com/user-attachments/assets/08ce526b-3cd6-4b0e-a4e5-47c6e6deea48" />

Instead of already having our data, we are now sending a request over the network to another computer, and then waiting for that computer to send us a response back. Now that our data is going on a journey over a network, we introduce the problem of **latency**.<br>

Latency is the time taken for a request to traverse the network.<br>

### 💡 Network latency is travel time.
---

Why is latency a problem? Because it means we need to wait for our data. But our program can only do one thing at a time. If we stopped our program to wait for data, then we wouldn’t be able to do anything else (like show the rest of the page, or respond to a user clicking in the page). We need to handle this time problem.<br>

Programming often involves time problems, and latency is just one of them.<br>

# 4. Synchronous execution

## Learning Objectives

- [ ] Define asynchrony
- [ ] Explain how synchronous execution works

We can handle latency using asynchronous execution (`Asynchronous execution is running code in a different order than it was written.`). To understand asynchrony we first need to be clear about synchronous execution (`Synchronous execution is running code in the order it is written.`).<br>

We have written a lot of JavaScript programs that execute sequentially. This means that each line of code is run in order, one after the other.<br>

<img width="730" height="252" alt="image" src="https://github.com/user-attachments/assets/b1bb1a5c-8d96-4172-b750-cfcaac5599ae" />

Each line of code is run in order. This is synchronous execution. We do this because JavaScript is single threaded (`A single thread can do one thing at a time. JavaScript is a single threaded language.`).<br>

When we call a function, the function will run to completion before the next line of code is executed. But what if we need to wait for something to happen? What if we need to wait for our data to arrive before we can show it? In this case, we can use `asynchronous execution`.<br>

# 5. Callbacks

## Learning Objectives

- [ ] Define a callback
- [ ] Sketch the event loop
- [ ] Predict the order of logged numbers using the event loop model

Consider this visualisation of an asynchronous program:<br>

👉🏽 [Code running out of order and off the thread](http://latentflip.com/loupe/?code=c2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIjEiKTsKfSwgMjAwMCk7CnNldFRpbWVvdXQoZnVuY3Rpb24gdGltZW91dCgpIHsKICAgIGNvbnNvbGUubG9nKCIyIik7Cn0sIDUwMCk7CnNldFRpbWVvdXQoZnVuY3Rpb24gdGltZW91dCgpIHsKICAgIGNvbnNvbGUubG9nKCIzIik7Cn0sIDApOwo%3D!!!)

When we call [setTimeout](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout) we send a function call to a client side Web API. The code isn’t executing in our single thread any more, so we can run the next line. The countdown is happening, but it’s not happening in code we control.<br>

When the time runs out, the Web API sends a message to our program to let us know. This is called an event (`An event is a signal that something has happened.`). The API sends its message to our event loop (`The event loop is a JavaScript mechanism that handles asynchronous callbacks.`). And what message does the event loop send? It sends a callback. It sends our call back. It tells our thread to run the code in that function.<br>

## Sketch your mental model

With a pen and paper, draw a diagram of your mental model of the event loop.<br>

Use your model to predict the order of logged numbers in the following code snippet:<br>

```javascript
setTimeout(function timeout1() {
  console.log("1");
}, 2000);
setTimeout(function timeout2() {
  console.log("2");
}, 500);
setTimeout(function timeout3() {
  console.log("3");
}, 0);
console.log("4");
```
<details>
<summary> Compare your model</summary>

<img width="487" height="439" alt="image" src="https://github.com/user-attachments/assets/d7df01d0-4c55-4dcc-895a-b46b2bf5a708" />

Did yours look different? There are many ways to visualise the event loop. Work on building your own mental model that helps you predict how code will run.

</details>

# 6. Requesting from a server side API

## Learning Objectives

- [ ] Fetch data from a server side API using a client side Web API

So now we have these pieces of our giant concept map:<br>

1. We know that we can send a request using `fetch()`
2. We know that `fetch` is a client-side Web API that requires an HTTP connection
3. We know that sending requests over a network takes time
4. We know that we should not stop our program to wait for data
5. We know that we can use Promises to manage `asynchronous` operations
  
But we still don’t know how to use `fetch` to get data from a server side API.

### Loading html files

When you double-click an HTML file in your file explorer to open it directly in your browser, you’re using what’s called the “file protocol” or “file scheme.” In your browser’s URL bar, you’ll see something like:<br>

```node 
file:///Users/username/projects/my-website/index.html
```

The `file://` prefix indicates that your browser is reading the file directly from your computer’s filesystem, without going through a web server. While this approach might seem convenient for simple HTML files, it will prevent us from using `fetch`.<br>

### Web Server Access: The HTTP Protocol

Another approach involves using a local development server. You can create one using tools like [Python’s built-in server](https://realpython.com/python-http-server/) or [npm’s http-server](https://www.npmjs.com/package/http-server). These tools create a web server on your computer that serves your files using the HTTP protocol. Your browser will then access the files through a URL like:<br>

```node 
http://localhost:8000/index.html
```

The `http://` prefix shows that you’re accessing the file through a proper web server, even though that server is running on your own computer.<br>

You need to be using `http://` (or `https://`) not `file://` in order to use `fetch`.<br>

# Using fetch

Previously, we had a list of films hard-coded in our `state`. Now, let’s continue using our concept map to fetch data from a server.

```javascript
// Begin with an empty state
const state = {
  films: [],
  searchTerm: "",
};

const endpoint = "https://programming.codeyourfuture.io/dummy-apis/films.json";

const fetchFilms = async () => {
  const response = await fetch(endpoint);
  return await response.json();
};

fetchFilms().then((films) => {
  state.films = films;
  render();
});
```

## Serving files locally

Remember: If you see an error message about fetch not being allowed from `file://` URLs, that’s your signal to serve your files through a local development server instead of opening them directly in the browser.<br>

fetch returns a Promise; the Promise fulfils itself with a response; the response contains our data.<br>

Next, we’ll dig into `Promises`, `async`, `await`, and then in more detail to complete our concept map.<br>

# 7. Promises

## Learning Objectives

- [ ] Define a Promise
- [ ] Log a Promise to the console

<img width="752" height="270" alt="image" src="https://github.com/user-attachments/assets/13a9e1d5-8d5f-49ee-8647-689de3adba8a" />

To get data from a server, we make a request with `fetch`. We act on what comes back: the response. But what happens in the middle? We already know that JavaScript is single-threaded: it can only do one thing at a time.<br>

So do we just stop and wait? No! We have a special object to handle this time problem. Put this code in a file and run it with node:<br>

```javascript
const url = "https://api.github.com/users/SallyMcGrath"; // try your own username
const response = fetch(url);
console.log(response);
```

Your Promise should look like this:

```javascript
Promise {
  Response {
    [Symbol(realm)]: null,
    [Symbol(state)]: {
      aborted: false,
      rangeRequested: false,
      timingAllowPassed: true,
      requestIncludesCredentials: true,
      type: 'default',
      status: 200,
      timingInfo: [Object],
      cacheState: '',
      statusText: 'OK',
      headersList: [HeadersList],
      urlList: [Array],
      body: [Object]
    },
    [Symbol(headers)]: HeadersList {
      cookies: null,
      [Symbol(headers map)]: [Map],
      [Symbol(headers map sorted)]: null
    }
  },
  [Symbol(async_id_symbol)]: 54,
  [Symbol(trigger_async_id_symbol)]: 30
}
```

The `response variable in this code is not labelling [the data](https://api.github.com/users/SallyMcGrath). It’s labelling a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).<br>

A promise is exactly what it sounds like: a promise to do something. You can use this promise object to sequence your code. You can say, “When the data comes back, `then` do this.”<br>

You will explore Promises in more detail as you build more complex applications. For now, let’s move on to `.then()`.<br>

# 8. `.then()`

## Learning Objectives

- [ ] Chain `.then()` on to a Promise

<img width="762" height="188" alt="image" src="https://github.com/user-attachments/assets/dc667c8f-0b52-45d7-8a23-1bf238f87408" />

[.then()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) is a method that all Promises have. You can interpret this code:<br>

```javascript
const url = "https://api.github.com/users/SallyMcGrath";
const callback = (response) => response.json(); // .json() is an instance method that exists for all Response objects.
fetch(url).then(callback);
```

1. _Given_ a request to fetch some data
2. _When_ the response comes back / the promise resolves to a response object
3. _Then_ do this next thing with the data / execute this callback<br>

The `.then()` method takes in a [callback](https://www.w3schools.com/js/js_callback.asp) function that will run once the promise resolves.<br>

We can also inline the `callback` variable here - this code does exactly the same as the code above:<br>

```javascript
const url = "https://api.github.com/users/SallyMcGrath";
fetch(url).then((response) => response.json());
```
It’s a similar idea as the event loop we have already investigated, but this time we can control it clearly. The `.then()` method queues up callback functions to execute in sequence once the asynchronous operation completes successfully. This allows us to write code as if it was happening in time order.

__💡tip:__ The `then()` method of a `Promise` always returns a `new Promise`.

We can chain multiple `.then()` calls to run more logic, passing the resolved value to the next callback in the chain. This allows us to handle the asynchronous response in distinct steps. Let’s create a getProfile function in a file, call it, and try running the file with node:

```javascript
const getProfile = (url) => {
  return fetch(url)
    .then((response) => response.json()) // This callback consumes the response string and parses it as JSON into an object.
    .then((data) => data.html_url) // This callback takes the object and gets one property of it.
    .then((htmlUrl) => console.log(htmlUrl)); // This callback logs that property.
};
getProfile("https://api.github.com/users/SallyMcGrath");
```

So `then` returns a *new* `Promise`, and you can call `then` again on the new object. You can chain Promises in ever more complex dependent steps. This is called [Promise chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises#chaining).<br>

It’s important to understand some of what is happening with Promises and `then`. But for the most part, you will not be writing code in this style.<br>

# 9. Async / Await

## Learning Objectives

- [ ] Define syntactic sugar
- [ ] Write a function using async/await
- [ ] Explain what happens when an async function is awaited

These two blocks of code do exactly the same thing:

```javascript
const getProfile = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  const htmlUrl = data.html_url;
  console.log(htmlUrl);
};

getProfile("https://api.github.com/users/SallyMcGrath");
```
```javascript
const getProfile = (url) => {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => data.html_url)
    .then((htmlUrl) => console.log(htmlUrl));
};
getProfile("https://api.github.com/users/SallyMcGrath");
```

Async/await is syntactic sugar (`A simpler, or “sweeter” way to write the same thing. The code works the same under the hood, but it’s easier to read.`) for Promises.<br>

We group `async` and `await` together: async/await, because we use them together. We can only use await inside an async function or at the [top level](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await#top_level_await) of a module.

We use the [async](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function) [keyword](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#keywords) to define a function that returns a Promise. An async function always returns a Promise.<br>

We can see this with a simple function which doesn’t need to await anything. Save this in a file and run it with node:<br>

```javascript
const getProfile = async (url) => url;

console.log(getProfile("hello")); // Logs a Promise.

getProfile("hello").then((value) => console.log(value)); // Logs a value
```

Even though the function above doesn’t have a time problem, the fact that we define the function as an `async` function means it returns a `Promise`.

But let’s do something more interesting - let’s actually solve a time problem.

```javascript
const getProfile = async (url) => {
  // the async keyword tells us this function handles a time problem
};
```

We use the [await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await) operator to say “don’t move on until this is done”. Importantly, we are not actually waiting for a Promise to resolve. We are scheduling a callback that will be called when the Promise resolves. But this allows us to write code that looks like it’s happening in time order (as if we are waiting), without actually blocking our main thread.<br>

```javascript
const getProfile = async (url) => {
  const response = await fetch(url);
  return response.json();
};

getProfile("https://api.github.com/users/SallyMcGrath").then((response) =>
  console.log(response)
);
```
Save this to a file and run with with node. It works the same as before.<br>

# 10. Fetch Films

## Learning Objectives

- [ ] Apply fetch to get data from an API

Now that we have a basic understanding of Web APIs and Promises, let’s use look again at our code for fetching film data:

```javascript
const endpoint = "https://programming.codeyourfuture.io/dummy-apis/films.json";

const fetchFilms = async () => {
  const response = await fetch(endpoint);
  return await response.json();
};

fetchFilms().then((films) => {
  // When the fetchFilms Promise resolves, this callback will be called.
  state.films = films;
  render();
});
```

We are defining `fetchFilms`: an `async` function - a function which returns a `Promise`.<br>

When we call `fetchFilms`, what we get is an unresolved `Promise`.<br>

What `fetchFilms` does is fetch a URL (with our call to `fetch` itself returning a `Promise` resolving to a `Response`). When the `Promise` from `fetch` resolves, `fetchFilms` reads the body of the `Response` (a string), and parses is as JSON. The `Promise` returned by `fetchFilms` then resolves with the result of parsing the string as JSON.<br>

When the `Promise` from `fetchFilms` resolves, our next callback is called: We update our `state`, and call `render()`.<br>

After this is done, the rest of our code works exactly the same as it did before. We have our list of films in our state, so we never need to fetch the list of films again.<br>

`render` works the same - it only cares that `state.films` is an array of films, it doesn’t care where they came from.<br>

When we change our filter by typing, events fire and our event handler will be called back exactly the same as it did before.<br>