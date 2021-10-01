var todaysDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todaysDate);

$(document).ready(function () { 
    $(".saveBtn").on("click", function () {
        
        var description = $(this).siblings(".description").val();
        var hour = $(this).parent().attr("id");

        localStorage.setItem(hour, description);
    })
   
    $("#time8 .description").val(localStorage.getItem("time8"));
    $("#time9 .description").val(localStorage.getItem("time9"));
    $("#time10 .description").val(localStorage.getItem("time10"));
    $("#time11 .description").val(localStorage.getItem("time11"));
    $("#time12 .description").val(localStorage.getItem("time12"));
    $("#time13 .description").val(localStorage.getItem("time13"));
    $("#time14 .description").val(localStorage.getItem("time14"));
    $("#time15 .description").val(localStorage.getItem("time15"));
    $("#time16 .description").val(localStorage.getItem("time16"));
    $("#time17 .description").val(localStorage.getItem("time17"));

    function timeSlots() {

        var currentTime = moment().hour();

        
        $(".time-block").each(function () {
            var timeBlock = parseInt($(this).attr("id").split("time")[1]);

            
            if (timeBlock < currentTime) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (timeBlock === currentTime) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");

            }
        })
    }
    timeSlots();
});