# Introduction to Mars-Rover-Kata

## Introduction

This project is solution to kata for rovers movement on mars.
It is strictly written with TDD approach under jest framework in Typescript

## Features

<<<<<<< HEAD
- Should take any limit to plateau size and rover numbers

- Given is the plateau and number of vehicles (here Rovers), we will calculate movement based on directions along with correspoding starting points.

=======
* Should take any limit to plateau size and rover numbers

* Given is the plateau and number of vehicles (here Rovers), we will calculate movement based on directions along with correspoding starting points.
  
>>>>>>> 4f13c4771703e5a795b87538853f7e40882a777f
  More details at https://kata-log.rocks/mars-rover-kata

## Assumptions

Plateau is rectangular grid and rovers will move their cameras based on 'L' and 'R' and will move position based on 'M' inside the direction input.
<<<<<<< HEAD
Based on this, We will pass input in unit test cases as an object of arrays in order of

- In start, first array will be plateau dimension
  rest of the arrays will represent rover inputs; each array will represent each rover.
  In each array, first two values will be x,y coordinates, third will indicate current direction and fourth will be expected directions to be taken.
=======
Based on this, We will pass input in unit test cases as an object of arrays in order of 
   * In start, first array will be plateau dimension
     rest of the arrays will represent rover inputs; each array will represent each rover.
     In each array, first two values will be x,y coordinates, third will indicate current direction and fourth will be expected directions to be taken.

   * We will cater output in same way as array for rover to make consistent behaviour; 
      first two values in array will indicate x,y coordinates and third will tell about direction after computing.
>>>>>>> 4f13c4771703e5a795b87538853f7e40882a777f

- We will cater output in same way as array for rover to make consistent behaviour;
  first two values in array will indicate x,y coordinates and third will tell about direction after computing.

<<<<<<< HEAD
## Approach

- Incorporated Object oriented approach in Typescript to make function modular and scalable.

- Each function in main class will own single responsiblity to have clean code.
=======
* Incorporated Object oriented approach in Typescript to make function modular and scalable.

* Each function in main class will own single responsiblity to have clean code.

* Testcases will cover different valid and non-valid inputs to test code reliablity.      
>>>>>>> 4f13c4771703e5a795b87538853f7e40882a777f

- Testcases will cover different valid and non-valid inputs to test code reliablity.

## Pre-Requisites

<<<<<<< HEAD
- Typescript installed
  Run install typescript --save-dev
- Node installed
  (Kindly refer package.json for more details for versions)

=======
* Typescript installed
   Run install typescript --save-dev
* Node installed 
(Kindly refer package.json for more details for versions)



>>>>>>> 4f13c4771703e5a795b87538853f7e40882a777f
## Running the Unit Tests

You can run the unit tests in your terminal by running:

`npm install`

Followed by:

`npm test`
