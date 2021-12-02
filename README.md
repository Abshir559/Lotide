# Lotide

A mini clone of the [Lodash](https://lodash.com/) library.

## Purpose

BEWARE: This library was published for learning purposes. It is not intended for use in production-grade software.

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

Install it:

npm install @abshir559/lotide

Require it:

const _ = require('@abshir559/lotide');

Call it:

const results = _.tail([1, 2, 3]) // => [2, 3]

## Documentation

The following functions are currently implemented:

* head(array): first element of arry
* tail(array): everything except first element of array
* middle(array): middle element* of array. *: only for arrays.length > 2. Also returns 2 elements if length is even