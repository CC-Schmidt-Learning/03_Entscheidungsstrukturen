"use strict";

// Entscheidungsstrukturen | control flow

// Deklaration + Assignment
const ageJohn = 30;
const ageMark = 30;

// Deklaration

let isJohnOlder, isJohnYounger, isJohnEqual;

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

//if(isJohnOlder)
//{
 //  console.log("John ist älter ");
//}
//else 
//{
//   console.log("John ist jünger "); 
//};

/************  Ternäre (ternary) Schreibweise ************/
// console.log( (isJohnOlder) ? "John is older" : "Mark is older");

// If --> Else --> Elseif //

//if(isJohnOlder)
//{
  // console.log("John ist älter ");
//}
//else if (isJohnEqual)
//{
  //  console.log("John ist gleichalt ");  
//}
//else {
    //console.log("John ist jünger ");
//}

/****Fallunterscheidung / SwitchCase ****/

//const firstName = "Jane";

//let job;
//job="driver"; // fährt Taxi
//job="diver"; //... taucht im Rhein
//job="artist"; //... malt ein Bild!
//job="pilot"; // ... macht etwas anderes -->default. 
//job="teacher"; // ... unterrichtet.
//job="instructor"; //... unterrichtet. 

//switch (job) {
//    case "driver":
//        console.log(firstName + " fährt TAXI!");
//        break;
//    case "diver":
//            console.log(firstName + " taucht im Rhein");
//            break;
//    case "artist":
//            console.log(firstName + " malt ein Bild!");
//            break;
//    case "teacher":
//    case "instructor":
//            console.log(firstName + " unterrichtet!");
//            break;
//    default:
//        console.log(firstName + " macht etwas anderes");
//        break;
//}

/********  Fallunterscheidung / SWITCH|CASE 2 *******/



const cond = false;
const a = 2;



switch (cond) {
    case (a == 1):
        console.log("a ist gleich 1")
        break;
    case (a == 2):
        console.log("a ist gleich 2")
        break;
    default:
        console.log("a hat einen anderen Wert")
        break;
}