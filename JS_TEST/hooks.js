// 12. Arguments binding
//Arrow functions do not have an arguments binding. However, they have access to the arguments object of the closest non-arrow parent function. Named and rest parameters are heavily relied upon to capture the arguments passed to arrow functions.
//Use of this keyword
// Unlike regular functions, arrow functions do not have their own this. The value of this inside an arrow function remains the same throughout the lifecycle of the function and is always bound to the value of this in the closest non-arrow parent function.

// 14. 15. //Prototypes are the mechanism by which JavaScript objects inherit features from one another.
//Every object in JavaScript has a built-in property, which is called its prototype. The prototype is itself an object, so the prototype will have its own prototype, making what's called a prototype chain. The chain ends when we reach a prototype that has null for its own prototype.

// 17. A higher-order component (HOC) is an advanced technique in React for reusing component logic. HOCs are not part of the React API, per se. They are a pattern that emerges from React’s compositional nature.
//Concretely, a higher-order component is a function that takes a component and returns a new component.

// 18.Hooks are the new feature introduced in the React 16.8 version. It allows you to use state and other React features without writing a class. Hooks are the functions which "hook into" React state and lifecycle features from function components. It does not work inside classes.
//Only call Hooks at the top level. Don’t call Hooks inside loops, conditions, or nested functions.
//Only call Hooks from React function components. Don’t call Hooks from regular JavaScript functions. (There is just one other valid place to call Hooks — your own custom Hooks. We’ll learn about them in a moment.)

// 19. The equivalent of componentDidMount in hooks is the useEffect function.
//Functions passed to useEffect are executed on every component rendering—unless you pass a second argument to it.
//If the second argument is an empty array, like the example above, it will behave exactly like the componentDidMount, only executing on the first rendering.
//Alternatively, you can pass one or more values inside the array, which will make useEffect execute every time those value changes.
//By returning an anonymous function with useEffect, it will run before the component unmounting. And the empty array passed as second argument tells to useEffect to run when the component will be mounted or unmounted.

// 21. In Redux, a reducer is a pure function that takes an action and the previous state of the application and returns the new state. The action describes what happened and it is the reducer's job to return the new state based on that action

// 23. Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components

// 24. Keys help React identify which items have changed, are added, or are removed

// 25. The useReducer Hook accepts two arguments. useReducer(<reducer>, <initialState>) The reducer function contains your custom state logic and the initialState can be a simple value but generally will contain an object. The useReducer Hook returns the current state and a dispatch method

// 26. HTTP response status codes
// Informational responses (100–199)
// Successful responses (200–299)
// Redirection messages (300–399)
// Client error responses (400–499)
// Server error responses (500–599)

// 28.1 What is HTTP?
//The Hypertext Transfer Protocol (HTTP) is the foundation of the World Wide Web, and is used to load web pages using hypertext links. HTTP is an application layer protocol //designed to transfer information between networked devices and runs on top of other layers of the network protocol stack. A typical flow over HTTP involves a client machine //making a request to a server, which then sends a response message.

//  What’s in an HTTP request?
//  An HTTP request is the way internet communications platforms such as web browsers ask for the information they need to load a website.
//  Each HTTP request made across the Internet carries with it a series of encoded data that carries different types of information. A typical HTTP request contains:
// 1.HTTP version type
// 2.a URL
// 3.an HTTP method
// 4.HTTP request headers
// 5.Optional HTTP body.

// 28.2 HTTPS is HTTP with encryption. The only difference between the two protocols is that HTTPS uses TLS (SSL) to encrypt normal HTTP requests and responses. As a result, HTTPS is far more secure than HTTP

// 29.  SSL stands for Secure Sockets Layer, a security protocol that creates an encrypted link between a web server and a web browser.

// 30. JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.

// 34.
// 1. Encapsulation Encapsulation is the mechanism of hiding of data implementation by restricting access to public methods. Instance variables are kept private and accessor methods are made public to achieve this
// 2. Abstraction
// 3. Inheritance
// 4. Polymorphism

// 43. Scrum is a framework that helps teams work together.

// 44. Gitflow is a legacy Git workflow that was originally a disruptive and novel strategy for managing Git branches

// 45. TCP is a connection-oriented protocol, whereas UDP is a connectionless protocol. A key difference between TCP and UDP is speed, as TCP is comparatively slower than UDP. Overall, UDP is a much faster, simpler, and efficient protocol, however, retransmission of lost data packets is only possible with TCP

// 48. Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources.

// 50. The Javascript DOM (Document Object Model) is an interface that allows developers to manipulate the content, structure and style of a website
