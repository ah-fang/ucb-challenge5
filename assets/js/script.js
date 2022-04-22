
/*Logic sequence 
DISPLAY
1. Display header, current day, all hours
2. Check current time
3. Highlight ul in block matching current hour in red
4. Color all uls above(before, in Moment) in gray
5. Color all uls below(after, in Moment) in green
(6) Bonus: Should reset at the start of each day

*/

var currentDay = document.getElementById("currentDay");
var today = document.createElement("p");
var currentTime = moment().hour();

today.textContent = moment().format("dddd, MMMM Do, YYYY"); //use Moment.js to get today's date
currentDay.appendChild(today);

function colorHours() {
    $("textarea").each(function () {
        var blockTime = parseInt($(this).attr("id").split("hour")[1]);
        console.log(blockTime, currentTime);
            //remove any previous classes from all timeblocks
        $(this).removeClass(".past .present .future");
        
        // use classes to change color related to current time
        if (currentTime > blockTime) {
            $(this).addClass("past");
        } 
        else if (currentTime < blockTime) {
            $(this).addClass("future");
        } 
        else {
            $(this).addClass("present");
        }
    })
}

//Retrieves any text saved from localStorage
$("#hour9").val(localStorage.getItem("hour9"));
$("#hour10").val(localStorage.getItem("hour10"));
$("#hour11").val(localStorage.getItem("hour11"));
$("#hour12").val(localStorage.getItem("hour12"));
$("#hour13").val(localStorage.getItem("hour13"));
$("#hour14").val(localStorage.getItem("hour14"));
$("#hour15").val(localStorage.getItem("hour15"));
$("#hour16").val(localStorage.getItem("hour16"));
$("#hour17").val(localStorage.getItem("hour17"));

function saveTask() {
    //save text entered on the same textarea as that button's parent to localStorage
    var text = $(this).siblings(".description").val();
    var time = $(this).siblings(".description").attr("id");
    
    //set items in localStorage
    localStorage.setItem(time, text);
}

$(".saveBtn").click(saveTask);

colorHours();