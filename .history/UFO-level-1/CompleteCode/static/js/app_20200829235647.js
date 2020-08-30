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


// Listen for events and search through the 'date' column to find rows that match user input

var button = d3.select("#filter-btn");

button.on("click", function(event) {

    // Prevent from refreshing the page
    d3.event.preventDefault();

    // Filter the database and display
    var dateInput = d3.select("#datetime").property("value");
  
    // If the input field of 'date' is not entered with any character, display the whole table
    if (dateInput.trim() === "" ) {
        var filteredDates = tableData;
    }
    // Otherwise, display the filtered dataset 
    else { 
        var filteredDates = tableData.filter(ufoSighting => ufoSighting.datetime === dateInput);
    }

    //console.log(filteredData);
    dataDisplay(filteredDates);

});


/* -------------------------------------- */

/*
Level 2 Instructions: Multiple Search Categories (Optional)

Complete all of Level 1 criteria.
Using multiple input tags and/or select dropdowns, write JavaScript code so the user can to set 
multiple filters and search for UFO sightings using the following criteria based on the table columns:
date/time, city, state, country, shape
*/


// Select all the buttons to work on them
//var button = d3.selectAll("#filter-btn");
d3.selectAll("#filter-btn").on("click", function(event) {

    // Prevent from refreshing the page
    d3.event.preventDefault();

    // Count the number of 'classes' in html with document.getElementsByClassName().length
    var columns = document.getElementsByClassName('form-control');

    for (var i = 0; i < columns.length; i++) {

        // Grasp the id names which are the column names
        var columnName = columns[i].id;

        // Filter the table
        var filteredData = tableData.filter(ufoSighting => ufoSighting[columnName]);

        };

        console.log("Hi, a button was clicked!");
        console.log(this);
        dataDisplay(filteredData);
});

