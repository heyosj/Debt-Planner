# debt-planner

This is a monthly payment calculator for personal debt. Input the amount of debt that you have, and the time frame in years for which you wish to pay it off and this will lay out a plan of monthly installments to pay off that debt.

## Reason For This Project

I built this application to help me plan out monthly expenses. I also wanted to practice the logic, as well as some ES6 features.

## Getting Started

Start by going to the website itself at https://osj007.github.io/Debt-Planner/

Once the page loads input the amount of debt you have, and directly underneath that input how many years you would want to pay it off.

Then press Submit. A time period along with the dollar amount for monthly installments will be displayed.

## Behind The Scene

Below I will explain some of the thought processes as well as how the code is working behind the scenes.

### User Interface (UI/UX)

The UI was built using Bootstrap, in paticular a template in Bootswatch. I took this approach to get a quick, up and running display on the application.

The process for the timeframe to calculate into months was a simple one. I felt that the common user like myself would rather like to think in the long term as in "I want to be debt free in 2 years" rather than someone explicitly stating they would rather pay their debt off in 24 months.

### JavaScript

This process begins with the basic DOM manipulation, by pulling the values from the selected amount then converting the strings into integers. 

Once converting those values into integers, the yearly option was then multiplied by 12 to store the monthly value. After that, the debt was then divided by the months to output a timeline.

The function would require to notice if no input was placed then do not incure an error. So an if/else statement was used, if the user input was not placed to display one message, while if the statement is placed the calculate. 
