# PINC - Conversations that matter

## PINC frontend developer test

Hi there, if you ar solving this challenge, it means you have made headways. Awesome


# Test One Answers

> Linting is basically analyzing your code for potential errors, since we are human there are always syntax errors and it’s hard to maintain large codebases, which is where linting comes in.
Promises are similar to event listeners, they help a ton and got rid of callback hell. Promises also use async and await. Async is to guarantee that a promise is returned and then once the promise is returned await is there to return the data from the promise. Global state management is needed when the data in your application is always changing, redux eases and organizes how the data is presented in your application. In reference to redux you have a store that handles all the different states of your application and pushes those states to components as they are needed. Cascading CSS is essentially multiple styles that can be applied to HTML. Styled components solves the mapping between components and styles and keeps all the styles in a central and easily accessible location. Scoping in JS is how code gets chosen to run. There are different scopes such as global, local, lexical, and functional scope, each having their own context and priority when it comes to running code. Lexical scope is generally function scope, an example would be that some variables are only accessible from within a function, while variables outside of the function can be accessed anywhere anytime. The idea behind immutability is that a certain variable or object can’t be changed, like  a url for an api call, if you’re url never changes and should never be tampered with then that url is immutable.

## Coding Test

You will be required to convert this UI to frontend app.

Using: React and Redux.

Page One

![Alt text](https://monosnap.com/image/FgGejxjbjTj21B41Mve76Hg0vyWFU8)

Page Two

On click on the Start a conversation, the input box should disaplay like so

![Alt text](https://monosnap.com/image/4GFVaFHQvMgV2o4DXI7unm7oztgAg2)


Make Request to Our API to build display real questions, emojis, latest answerers



Connecting to Questions API



Method: GET

Endpoint:  [https://staging-api.pincapp.com/api/questions](https://staging-api.pincapp.com/api/questions)

Create a fork of this repo, update the Repo with your code, then put up a version on heroku.

Happy Coding
