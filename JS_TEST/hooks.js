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
