$(document).ready(function() { //needed to declare JQuery, everything has to be inside
 
    $("#currentDay").text(moment().format("dddd, MMMM Do")); //line for dates at the top of page

    $('.saveBtn').on('click', function() {


        var value = $(this).siblings('.description').val(); 
        var time = $(this).parent().attr('id');


        localStorage.setItem(time, value); // puting above var in local storage

        $(".notification").addClass("show"); //

            setTimeout(function () {
           $(".notification").removeClass("show");   
        }, 5000);
    });

    function hourUpdate() {
        var currentHour = moment().hours();

        $(".time-block").each(function() {
            var blockHour = parseInt($(this).attr("id").split("-")[1]);
            
            if (blockHour < currentHour) { 
                //Changes the classes to show where we are with time on the window
                //if blockHour is less than currentHour then add class past to 'this'
                $(this).addClass("past");
            } else if (blockHour === currentHour) {
                //else, if blackHour completely = currentHour remove the past CSS and add present CSS
                $(this).removeClass("past");
                $(this).addClass("present");
            } else{ // If above doesn't = then let it be in the future.
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
        });
    }
    hourUpdate();

    var interval = setInterval(hourUpdate, 15000);

//local storage information will be loaded with below lines

    
    $('#hour-8 .description').val(localStorage.getItem('hour-8'));
    $('#hour-9 .description').val(localStorage.getItem('hour-9'));
  $('#hour-10 .description').val(localStorage.getItem('hour-10'));
  $('#hour-11 .description').val(localStorage.getItem('hour-11'));
  $('#hour-12 .description').val(localStorage.getItem('hour-12'));
  $('#hour-13 .description').val(localStorage.getItem('hour-13'));
  $('#hour-14 .description').val(localStorage.getItem('hour-14'));
  $('#hour-15 .description').val(localStorage.getItem('hour-15'));
  $('#hour-16 .description').val(localStorage.getItem('hour-16'));
  $('#hour-17 .description').val(localStorage.getItem('hour-17'));

})