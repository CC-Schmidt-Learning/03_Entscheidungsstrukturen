"use strict";

// Entscheidungsstrukturen | control flow

// Deklaration + Assignment
const ageJohn = 30;
const ageMark = 30;

// Deklaration
let isJohnOlder, isJohnYounger, isJohnEqual, isJohnUnequal;

// Test | Logische Aussage
isJohnOlder = (ageJohn > ageMark);
isJohnEqual = (ageJohn == ageMark);
isJohnYounger = (ageJohn < ageMark);

// Ausgabe
//console.log("ageJohn: " + ageJohn);
//console.log("ageMark: " + ageMark);
//console.log("isJohnOlder: " + isJohnOlder);
//console.log("isJohnEqual: " + isJohnEqual);
//console.log("------------------");

// TINA = There is no alternative; 
// Entweder JA oder NEIN; keine Alternative


//if(isJohnOlder)
//{
//    console.log("John ist älter ");
//}

// IF - Else Abfrage //

if(isJohnOlder)
{
   console.log("John ist älter ");
}
else 
{
    console.log("John ist jünger "); 
};
