
/*Logic sequence 
DISPLAY
1. Display header, current day, all hours
2. Check current time
3. Highlight ul in block matching current hour in red
4. Color all uls above(before, in Moment) in gray
5. Color all uls below(after, in Moment) in green
(6) Bonus: Should reset at the start of each day

INTERACTIVITY
1. Clicking any UL turns it into textarea
2. Clicking save button in that row creates an li on that ul IF text has been typed. If not nothing happens
*/

var currentDay = document.getElementById("currentDay");
var today = document.createElement("p");
var currentTime = moment().hour();
var timeBlox = document.getElementsByTagName("textarea");

today.textContent = moment().format("dddd, MMMM Do, YYYY"); //use Moment.js to get today's date
currentDay.appendChild(today);

function colorHours() {
    //check in a loop?
    
    var hour = $(".hour").text().trim();

    var time = moment(hour, "LT");
    console.log(time);

    //remove any previous classes from all timeblocks
    $(".hour").removeClass(".present .past .future");

    // use classes to change color related to current time
    if (moment().isAfter(time)) {
        $(".hour").addClass(".past");
    } else if (moment().isBefore(time)) {
        $(".hour").addClass(".future");
    } else {
        $(".hour").addClass(".present");
    }
}

function saveTask() {
    //save text entered on the same textarea as that button (check parent element?) to localStorage
}

$("saveBtn").click(saveTask);
colorHours();