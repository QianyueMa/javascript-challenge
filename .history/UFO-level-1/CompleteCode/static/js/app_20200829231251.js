/*
Level 1 Instructions:

Using the UFO dataset provided in the form of an array of JavaScript objects, write code that 
appends a table to your web page and then 
adds new rows of data for each UFO sighting.
Make sure you have a column for date/time, city, state, country, shape, and comment at the very least.

Use a date form in your HTML document and write JavaScript code that will 
listen for events and search through the date/time column to find rows that match user input.
*/


// from data.js
var tableData = data;

// Display the data
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


var button = d3.select("#filter-btn");

// filter the database and display
button.on("click", function(event) {
  d3.event.preventDefault();
  deleteTbody();
  var dateInput = d3.select("#datetime").property("value");
  
  if (dateInput.trim() === "" ) {
    // display the whole database if the date field has no date
    var filteredData = tableData;
  } else {
    // otherwise, display the filtered dataset  
    var filteredData = tableData.filter(ufoSighting => 
      ufoSighting.datetime === dateInput.trim());
  };

  // display message if no records found
  if (filteredData.length == 0) {
    d3.select("tbody")
      .append("tr")
      .append("td")
        .attr("colspan", 7)
        .html("<h4>No Records Found</h4>");
  };

  console.log(filteredData);
  dataDisplay(filteredData);

/*
// Listen for events and search through the 'date' column to find rows that match user input
d3.select("#filter-btn").on("click", handleClick);

function handleClick() {

    // Prevent from refreshing the page
    d3.event.preventDefault();

    var inputValue = d3.select("#datetime").property("value");
    var filteredDate = tableData.filter(ufoSighting => ufoSighting.datetime === inputValue);

    //print the value that was input
    console.log("Hi, a button was clicked!");
    console.log(inputValue);

    //display the new table
    dataDisplay(filteredDate);
};

dataDisplay(filteredDate);


/* 
Level 2 Instructions: Multiple Search Categories (Optional)

Complete all of Level 1 criteria.
Using multiple input tags and/or select dropdowns, write JavaScript code so the user can to set 
multiple filters and search for UFO sightings using the following criteria based on the table columns:
date/time, city, state, country, shape
*/

/*
// Listen for events and search through the 'date' column to find rows that match user input
var inputValue = d3.select("#datetime").property("value");
var filteredDate = tableData.filter(ufoSighting => ufoSighting.datetime === inputValue.trim());


// Select all the buttons to work on them
//var button = d3.selectAll("#filter-btn");
d3.selectAll("#filter-btn").on("click", function(event) {
    console.log("Hi, a button was clicked!");
    console.log(this);
    //console.log(d3.event.target);

    // Count the number of classes with document.getElementsByClassName().length
    var columns = document.getElementsByClassName('form-control');

    for (var i = 0; i < columns.length; i++) {
        var columnName = columns[i].id;
        };

  });
*/