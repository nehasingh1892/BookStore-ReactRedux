import 'babel-polyfill'

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore,applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-promise';
import bookReducer from './reducers'
import App from './components/App'

let bookList = [
    {
        "bookid": "1",
        "bookname": "JavaScript: The Good Parts 1 Edition",
        "bookauthor": "Crockford,Douglas",
        "bookdesc": "Nearly all programming languages have their share of pros and cons and JavaScript is no exception, as it was launched in a hurry, with not much time to refine thoroughly. JavaScript: The Good Parts is a thorough guide into making the most of this programming language, helping the readers move on to studying a subset of JavaScript that is essential to writing efficient and extensible code.",
        "bookpage": "405",
        "id": "5a3b7d7c3740cc0473c7f663"
    },
    {
        "bookid": "2",
        "bookname": "Mastering Node.js (Community Experience Distilled)",
        "bookauthor": "Sandro Pasquali",
        "bookdesc": "Node JS new world to connect with Database",
        "bookpage": "101",
        "id": "5a3b7ed83740cc0473c7f665"
    },
    {
        "bookid": "3",
        "bookname": "Jquery In Action, 2Nd Ed 2nd Edition",
        "bookauthor": "Bear Bibeault,Yehuda Katz",
        "bookdesc": "jQuery in Action, Second Edition is a fast-paced introduction to jQuery that will take your JavaScript programming to the next level..",
        "bookpage": "500",
        "id": "5a3b8d79c11591047ed908dd"
    },
    {
        "bookid": "4",
        "bookname": "DotNet",
        "bookauthor": "Kevil",
        "bookdesc": "All About Books",
        "bookpage": "100",
        "id": "5a3faffb53fafb04145f985a"
    },
    {
        "bookid": "5",
        "bookname": "React JS",
        "bookauthor": "Facebook",
        "bookdesc": "Getting started with React JS",
        "bookpage": "100",
        "id": "5aa4e7e7d6b06a0381cc30d7"
    }
];
localStorage.setItem('bookList',JSON.stringify(bookList));

const store = createStore(bookReducer,applyMiddleware(promiseMiddleware));
//let store = createStore(bookReducer)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)