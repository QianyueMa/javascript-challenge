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



// filter the database and display

var button = d3.select("#filter-btn");

button.on("click", function(event) {

    // Prevent from refreshing the page
    d3.event.preventDefault();

    var dateInput = d3.select("#datetime").property("value");
  
    // If the input field of 'date' is not entered with any character, display the whole table
    if (dateInput.trim() === "" ) {
        var filteredData = tableData;
    }
    // otherwise, display the filtered dataset 
    else { 
        var filteredData = tableData.filter(ufoSighting => 
        ufoSighting.datetime === dateInput);
    }

    //console.log(filteredData);
    dataDisplay(filteredData);

    });
