// Date Display Section
var date = new Date(); // create date variable

const [month, day, year] = [ // Extract the month, day, and year = made var for month day and year
  String(date.getMonth() + 1).padStart(2, '0'), // + 1 to get correct month bc stored in array
  String(date.getDate()).padStart(2, '0'), // .padStart(2, '0') makes it 2 digits, 2 for how many digits, pads with 0 if not 2 digits
  date.getFullYear(),
];

document.querySelector("#date p").textContent += `${month}/${day}/${year}`; // `${month}/${day}/${year}`is new way of month + "/" + day + "/" + year



// Number Conversion and Validation

var convertToNumber1 = "500"; // declare var and put String type in

var convertToNumber2 = "21";

var stringOnly = "yay";

var integer = "3.14"; // put it in string cause example had "" around it


document.querySelector(".og-numbers").textContent += `We have the variables ${convertToNumber1}, ${convertToNumber2}, ${stringOnly}, ${integer}. Which are all Strings right now.`;


var conNum1 = Number(convertToNumber1); // using Number() to convert type - here String to number
var conNum2 = Number(convertToNumber2);
var stNum = Number(stringOnly);
var intNum = Number(integer);


document.querySelector(".converted-numbers").textContent += `Now, I have converted each. Now, ${convertToNumber1} has become a ${typeof conNum1}, ${convertToNumber2} has become a ${typeof conNum2}, ${stringOnly} has become a ${typeof stNum}, and ${integer} has become a ${typeof intNum}.`; // used typeof to see data type


var truth = Number.isNaN(stNum);

document.querySelector(".lies").textContent += `But wait! ${stringOnly} shouldn't be a number. Let's test that. If the following comes back as 'true' then it's actually NaN = not a number. Number.isNaN(yay): ${truth}. Yay! yay is not a number!`;
document.querySelector(".not-lies").textContent += `Let's test the rest: ${convertToNumber1}: ${Number.isNaN(conNum1)}, ${convertToNumber2}: ${Number.isNaN(conNum2)}, ${integer}: ${Number.isNaN(intNum)}`; // could also do method inside



var int = Number.isInteger(intNum);

document.querySelector(".in").textContent += `Same with this, ${integer} should be an integer. Let's test that. Number.isInteger(3.14): ${Number.isInteger(intNum)}.`;



