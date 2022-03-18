# Mars-Rover-Kata

## Introduction

This project is solution to kata for rovers movement on mars.
It is strictly written with TDD approach under jest framework in Typescript

## Features

* Given is the plateau and number of vehicles (here Rovers), we will calculate movement based on directions along with correspoding starting points.
  
  More details at https://kata-log.rocks/mars-rover-kata

* Should take any limit to plateau size and rover numbers


## Assumptions

Plateau is rectangular grid and rovers will move their cameras based on 'L' and 'R' and move position based on 'M'.

Based on this, We will pass input in unit test cases as an object of arrays in order of:
   * In start, first array will be plateau dimension.
   * Rest all arrays will represent rover inputs; every array will represent each rover.
     In each array, first two values will be x,y coordinates, 
     third will indicate current facing direction and fourth will be expected directions to be taken.

   * We will cater output in same way as array for rover to make consistent behaviour; 
      first two values in array will indicate x,y coordinates and third will tell about direction after computing.

## Approach

* Incorporated Object oriented approach in Typescript to make function modular and scalable.

* Each function in main class will own single responsiblity to have clean code.

* Testcases will cover different valid and non-valid inputs to test code reliablity.      


## Pre-Requisites

* Typescript installed
   Run install typescript --save-dev
* Node installed 
(Kindly refer package.json for more details for versions)


## Running the Unit Tests

You can run the unit tests in your terminal by running:

`npm install`

Followed by:

`npm test`
