"use strict";
// Q.29 Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
//• Make a array of your three favorite fruits and call it favorite_fruits.
//• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
const favouriteFruits = ["banana", "apple", "strawberry", "cheeko"];
// check for cartain fruits using independent if statements
if (favouriteFruits.includes("banana")) {
    console.log("you really like bananas!");
}
if (favouriteFruits.includes("apple")) {
    console.log("you really like apples!");
}
if (favouriteFruits.includes("strawberry")) {
    console.log("you really like strawberries!");
}
if (favouriteFruits.includes("cheeko")) {
    console.log("you really like cheekoos!");
}
if (favouriteFruits.includes("orange")) {
    console.log("you are really like oranges!");
}
else {
    console.log("oranges are not in your favourite fruits list.");
}
