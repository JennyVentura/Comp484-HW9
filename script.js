// Date Display Section

const date = new Date(); // create date constant

const [month, day, year] = [ // Extract the month, day, and year = made const for each
  String(date.getMonth() + 1).padStart(2, '0'), // + 1 to get correct month bc stored in an array = 1 number off
  String(date.getDate()).padStart(2, '0'), // .padStart(2, '0') makes it 2 digits, 2 for how many digits, pads front with 0 if 1 digit
  date.getFullYear(),
];

document.querySelector("#date p").textContent += `${month}/${day}/${year}`; // `${month}/${day}/${year}`is new way of month + "/" + day + "/" + year



// Number Conversion and Validation

var convertToNumber1 = "500"; // declare var and put String type in

var convertToNumber2 = "21";

var stringOnly = "yay";

var decimal = "3.14"; // put it as a String cause example had "" around it


document.querySelector(".og-numbers").textContent += `We have the variables ${convertToNumber1}, ${convertToNumber2}, ${stringOnly}, ${decimal}. Which are all Strings right now.`;


var conNum1 = Number(convertToNumber1); // using Number() to convert type - here String to number
var conNum2 = Number(convertToNumber2);
var stNum = Number(stringOnly);
var decNum = Number(decimal);


document.querySelector(".converted-numbers").textContent += `Now, I have converted each. ${convertToNumber1} has become a ${typeof conNum1}, ${convertToNumber2} has become a ${typeof conNum2}, ${stringOnly} has become a ${typeof stNum}, and ${decimal} has become a ${typeof decNum}.`; // used typeof to see data type


var truth = Number.isNaN(stNum); // made a boolean

document.querySelector(".lies1").textContent += `But wait! ${stringOnly} shouldn't be a number. Let's test that. If the following comes back as 'true' then it's actually NaN = not a number.`;

if(Number.isNaN(stNum) == true) {
  document.querySelector(".lies2").textContent += `Number.isNaN(yay): ${truth}. Yay! yay is not a number!`;
} else {
  document.querySelector(".lies2").textContent += `Number.isNaN(yay): ${truth}. Oh, it was a valid number`;

}

document.querySelector(".not-lies").textContent += `Let's test the rest: ${convertToNumber1}: ${Number.isNaN(conNum1)}, ${convertToNumber2}: ${Number.isNaN(conNum2)}, ${decimal}: ${Number.isNaN(decNum)}`; // could also do method inside


var dec = Number.isInteger(decNum);

document.querySelector(".not-int1").textContent += `What about integers? Specifically, is ${decimal} an integer? Let's test that.`;

if(Number.isInteger(decNum) == true) {
  document.querySelector(".not-int2").textContent += `Number.isInteger(3.14): ${dec}. Oh, it is an integer.`;
} else {
  document.querySelector(".not-int2").textContent += `Number.isInteger(3.14): ${dec}. It's actually a decimal.`;

}

document.querySelector(".int-check").textContent += `As for the rest: ${convertToNumber1}: ${Number.isInteger(conNum1)}, ${convertToNumber2}: ${Number.isInteger(conNum2)}, ${stringOnly}: ${Number.isInteger(stNum)}`;


document.querySelector(".overall1").textContent += `Overall: Original value: ${convertToNumber1} -> Converted: ${conNum1} -> isNaN: ${Number.isNaN(conNum1)} -> isInteger: ${Number.isInteger(conNum1)}`;
document.querySelector(".overall2").textContent += `Overall: Original value: ${convertToNumber2} -> Converted: ${conNum2} -> isNaN: ${Number.isNaN(conNum2)} -> isInteger: ${Number.isInteger(conNum2)}`;
document.querySelector(".overall3").textContent += `Overall: Original value: ${stringOnly} -> Converted: ${stNum} -> isNaN: ${truth} -> isInteger: ${Number.isInteger(stNum)}`;
document.querySelector(".overall4").textContent += `Overall: Original value: ${decimal} -> Converted: ${decNum} -> isNaN: ${Number.isNaN(decNum)} -> isInteger: ${dec}`;



// Number Formatting and Math Results

const shirtCost = 7.99;

const shipping = 4;

const tax = shirtCost * .1; // tax is 10% = .1

const subtotal = shirtCost; // subtotals usually don't include the shipping, so I just made it = to the shirtCost

const total = subtotal + shipping + tax;


const subCurrForm = new Intl.NumberFormat("en-US", { // looked around mdn for a number formatter and I'm assuming this is ok for "at least one formatted numeric result"
  style: "currency", 
  currency: "USD" 
}).format(subtotal);

const shipCurrForm = new Intl.NumberFormat("en-US", { // formats the numbers, in this case as currency and specifically USD
  style: "currency", 
  currency: "USD" 
}).format(shipping);

const taxCurrForm = new Intl.NumberFormat("en-US", { 
  style: "currency", 
  currency: "USD" 
}).format(tax);

const totCurrForm = new Intl.NumberFormat("en-US", { 
  style: "currency", 
  currency: "USD" 
}).format(total);


document.querySelector(".subtotal").textContent += `${subCurrForm}`;
document.querySelector(".shipping").textContent += `${shipCurrForm}`;
document.querySelector(".tax").textContent += `${taxCurrForm}`;
document.querySelector(".total").textContent += `${totCurrForm}`;

document.querySelector(".summary").textContent += `${total.toFixed(2)}`;
