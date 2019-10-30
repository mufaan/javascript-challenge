
var tableData = data;
tbody = d3.select("tbody")
function displayData(data) {
   tbody.text("");
   data.forEach(function (ufoSighting) {
       tablerows = tbody.append("tr")
           Object.entries(ufoSighting).forEach(function ([key, value]) {
           tabledata = tablerows.append("td").text(value)
       });
   })
};
displayData(tableData)
var button = d3.select("#filter-btn")
var dateEntry = d3.select("#datetime");
function clickSelect() {
   d3.event.preventDefault();
   console.log(dateEntry.property("value"));
    var filteredData = tableData.filter(ufoSighting => ufoSighting.datetime === dateEntry.property("value"))
    displayData(filteredData);
}
dateEntry.on("change", clickSelect);

// Get a reference to the table body
var tbody = d3.select("tbody");

//Console.log the weather data from data.js
console.log(data);

