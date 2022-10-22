//on load trigger . when document loads, fetches current month and day
//$ means jquery - shorter way to get data from page than using JS 
$(document).ready(function(){
    $("#currentDay").text(moment().format("dddd, MMMM Do"));  //id currentDay from html page stores current day value
    
    updateHour();

}
)