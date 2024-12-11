# Incorrect Type in useState: Unexpected String Assignment

This repository demonstrates a common error in React applications involving the useState hook.  The error occurs when the state variable is unintentionally assigned a value of a different type than originally declared, leading to unexpected behavior and potential debugging challenges. This example focuses on setting a numerical state variable to a string.

## Bug Description
The `MyComponent` attempts to manage a numerical count using `useState`. However, the `useEffect` hook sets the `count` state variable to the string '0' instead of the number 0. This will lead to unexpected behavior, and potentially break any subsequent calculations or operations depending on the type of the state variable.

## How to reproduce the bug
1. Clone the repository
2. Navigate to the `bug` folder
3. Run `npm install`
4. Run `npm start`

## Bug Solution
The solution involves ensuring that the value assigned to the `useState` hook is the correct type. The updated code will explicitly set the count to a number (0).