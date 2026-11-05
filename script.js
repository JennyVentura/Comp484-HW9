// Date Display Section
var date = new Date(); // create date variable
document.querySelector("#date p").textContent += date.toLocaleDateString(); // use querySelector to target id and specifically the paragraph inside that div, then add the date, toLocaleDateString() gives us specific timezone date and format


/*const [month, day, year] = [
  date.getMonth(),
  date.getDate(),
  date.getFullYear(),
];

document.querySelector("#date p").textContent += month + "/" day + "/" year;*/





/*
var date = new Date(); //const?
document.body.innerHTML = "<p> Today is " + date.toLocalDateString() + "</p>";

OR

const now = date.toLocaleDateString();
document.getElementById('date').textContent = `Today is ${now}`;

OR

const [month, day, year] = [
  date.getMonth(),
  date.getDate(),
  date.getFullYear(),
];
document.getElementById('date').textContent = `Today is ${month}/${day}/${year}`;

OR

document.querySelector("#date").innerHTML = "<p> Today is " + date.toLocalDateString() + "</p>";
document.getElementById("#date").innerHTML = "<p> Today is " + date.toLocalDateString() + "</p>";
*/