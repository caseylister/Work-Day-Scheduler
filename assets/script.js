var todaysDate = moment().format("dddd, MMM Do YYYY");
$("#currentDay").html(todaysDate);

$(document).ready(function () {
    $(".saveBtn").on("click", function () {
        var description = $(this).siblings(".description").val();
        var hour = $(this).parent().attr("id");

        localStorage.setItem(hour, description);
    });

    $("#time8 .description").val(localStorage.getItem("time8"));
    $("#time9 .description").val(localStorage.getItem("time9"));
    $("#time10 .description").val(localStorage.getItem("time10"));
    $("#time11 .description").val(localStorage.getItem("time11"));
    $("#time12 .description").val(localStorage.getItem("time12"));
    $("#time1 .description").val(localStorage.getItem("time1"));
    $("#time2 .description").val(localStorage.getItem("time2"));
    $("#time3 .description").val(localStorage.getItem("time3"));
    $("#time4 .description").val(localStorage.getItem("time4"));
    $("#time5 .description").val(localStorage.getItem("time5"));
});