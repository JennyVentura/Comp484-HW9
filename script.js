// Date Display Section
var date = new Date(); // create date variable

const [month, day, year] = [ // Extract the month, day, and year = made var for month day and year
  String(date.getMonth() + 1).padStart(2, '0'), // + 1 to get correct month bc stored in array
  String(date.getDate()).padStart(2, '0'), // .padStart(2, '0') makes it 2 digits, 2 for how many digits, pads with 0 if not 2 digits
  date.getFullYear(),
];

document.querySelector("#date p").textContent += `${month}/${day}/${year}`; // `${month}/${day}/${year}`is new way of month + "/" + day + "/" + year



// Number Conversion and Validation

var convertToNumber1 = "500";

var convertToNumber2 = "21";

var stringOnly = "yay";

var integer = "3.14"; //no string?


document.querySelector("#convert p").textContent += `We have the variables ${convertToNumber1}, ${convertToNumber2}, ${stringOnly}, ${integer}.`;

convertToNumber1.Number();


/*
document.querySelector("#f-convert").textContent += `${convertToNumber1}`;
document.querySelector("#s-convert").textContent += `${convertToNumber2}`;
document.querySelector("#string").textContent += `${stringOnly}`;
document.querySelector("#decimal").textContent += `${integer}`;
*/





