/*
Level 1 Instructions:

Using the UFO dataset provided in the form of an array of JavaScript objects, write code that 
appends a table to your web page and then 
adds new rows of data for each UFO sighting.
Make sure you have a column for date/time, city, state, country, shape, and comment at the very least.

Use a date form in your HTML document and write JavaScript code that will listen for events and 
search through the date/time column to find rows that match user input.
*/


// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");
console.log(data);



function dataDisplay(ufo){ 
    tbody.text("")
    ufo.forEach(function(et_sighting){
    new_tr = tbody.append("tr")
    Object.entries(et_sighting).forEach(function([key, value]){
        new_td = new_tr.append("td").text(value)	
    })
})}

displayData(tableData)

console.log("hello2")