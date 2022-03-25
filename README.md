# Mars-Rover-Kata

## Introduction

This project is solution to kata for rovers movement on mars.
It is strictly written with TDD approach under jest framework in Typescript

## Features

* Given is the plateau and number of vehicles (here Rovers), we will calculate movement based on directions along with correspoding starting points.
  
  More details at https://kata-log.rocks/mars-rover-kata

* Should take any limit to plateau size and rover numbers


## Assumptions

Plateau is rectangular grid on which Rovers will rotate left if they receive the input 'L', rotate right if they receive the input 'R' and move forward if they receive the input 'M'".

Based on this, We pass input in unit test cases as an object of arrays in order of:
   * In start, first array is plateau dimension.
   * Rest all arrays represents rover inputs; each array represent each rover.
     In each array, first two values are x,y coordinates, 
     third indicates facing the direction currently and fourth will be expected directions to be taken.

   * We cater output in same way as array for rover to make consistent behaviour; 
      first two values in array will indicate x,y coordinates and third will tell about direction after computing.

## Approach

* Incorporated Object oriented approach in Typescript to make function modular and scalable.

* Interfaces to keep detail on abstraction level to have better architecture

* Each function in main class owns single responsiblity to have clean code.

* TDD approach will keep code intact and testable

* Testcases will cover different valid and non-valid inputs to test reliablity.      
 

## Pre-Requisites

* Typescript and jest installed

run `npm install` to configure the required enviournment.

## Running the Unit Tests

You can run the unit tests in your terminal by running:

`npm test`
