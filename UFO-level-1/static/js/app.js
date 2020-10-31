/*
Level 1 Instructions:

Using the UFO dataset provided in the form of an array of JavaScript objects, write code that 
appends a table to your web page and then 
adds new rows of data for each UFO sighting.
Make sure you have a column for date/time, city, state, country, shape, and comment at the very least.

Use a date form in your HTML document and write JavaScript code that will 
listen for events and search through the date/time column to find rows that match user input.
*/


/* ----- Display the data ------ */

// from data.js
var tableData = data;

function dataDisplay(ufoSighting){ 
  // Get a reference to the table body
  var tbody = d3.select("tbody");
  console.log(data);
  tbody.text("");
  ufoSighting.forEach(function(i){
    // append a table to the web page and adds new rows of data for each UFO sighting
    var row = tbody.append("tr");
    Object.entries(i).forEach(function([key, value]){
        console.log(key, value);
        // Append a cell to the row for each value in the 'report' object
        var cell = row.append("td");
        cell.text(value);
    });
  });
};
// Call the function and display the data in the table on the web page
dataDisplay(tableData);


/* ----- Search for the events ------ */

// Listen for events and search through the 'date' column to find rows that match user input
var submitButton = d3.select("#filter-btn");

submitButton.on("click", function(event) {

  var tbody = d3.select("tbody");
  tbody.text("");

  // Prevent from refreshing the page
  d3.event.preventDefault();

  // Filter the database and display
  var dateInput = d3.select("#datetime").property("value");
  console.log(dateInput);
  console.log(tableData);

  // If the input field of 'date' is not entered with any character, display the whole table
  if (dateInput.trim() === "" ) {
      var filteredData = tableData;
  }
  // Otherwise, display the filtered dataset 
  else { 
      var filteredData = tableData.filter(ufoSighting => ufoSighting.datetime === dateInput);
  }

  console.log(filteredData);

  dataDisplay(filteredData);

  filteredData.forEach(function(filteredReport) {
    console.log(filteredReport);
    var row = tbody.append("tr");

  // Use d3 to update each cell's values with data.
    Object.entries(filteredReport).forEach(function([key, value]){
        console.log(key, value);
        var cell = tbody.append("td");
        cell.text(value);
      });
  });
});
