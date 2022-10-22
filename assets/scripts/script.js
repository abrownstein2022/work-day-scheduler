//on load trigger . when document loads, fetches current month and day
//$ means jquery - shorter way to get data from page than using JS 
$(document).ready(function(){
    $("#currentDay").text(moment().format("dddd, MMMM Do"));  //id currentDay from html page stores current day value
    function updateHour(){
        let currentHour = moment().hours() - 5;  //gets current hours from moment which is date/time in JS
        $(".time-block").each(function(){  //loop through id attributes 
             let blockHour = Number($(this).attr("id"));  //get id attribute for each timeblock element - convert to Number from default string data type
             if(blockHour < currentHour){  //this means current timeblock in the past, so add the css class "past" to this timeblock
                 $(this).addClass("past"); 
                 $(this).removeClass("present");
                 $(this).removeClass("future");
             }
             else if(blockHour === currentHour){  //this means current timeblock in the present, so add the css class "present" to this timeblock
                 $(this).addClass("present"); 
                 $(this).removeClass("past");
                 $(this).removeClass("future");
             }
             else {  //this means current timeblock in the future, so add the css class "future" to this timeblock
                 $(this).addClass("future"); 
                 $(this).removeClass("past");
                 $(this).removeClass("present");
             }
 
        }) 
 
     }
     updateHour();

}
)