
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

today.textContent = moment().format("dddd, MMMM Do, YYYY"); //use Moment.js to get today's date
currentDay.appendChild(today);

function colorHours() {
    //remove any previous classes from all timeblocks
    $("textarea").removeClass(".present .past .future");

    $(".time-block").each(function () {
        var blockTime = parseInt($(this).attr("id").split("hour")[1]);
        console.log(blockTime, currentTime);
        
        // use classes to change color related to current time
        if (currentTime > blockTime) {
            $("textarea").addClass(".past");
        } else if (currentTime < blockTime) {
            $("textarea").addClass(".future");
        } else {
            $("textarea").addClass(".present");
        }
        console.log($("textarea").attr("class"));
    })
}

function saveTask() {
    //save text entered on the same textarea as that button (check parent element?) to localStorage
        //get nearby values.
        console.log(this);
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
    
        //set items in local storage.
        localStorage.setItem(time, text);
}

$(".saveBtn").on("click", saveTask());

$("saveBtn").click(saveTask);

colorHours();