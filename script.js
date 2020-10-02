
$(document).ready(function() { 

    //display current date in p tag on html
    $('#currentDay').text(moment().format('MMMM Do YYYY'));


    function timeblockColor() {

        var time = new Date(); //current time
        var militaryTime = time.getHours(); //military time (just hour)
        console.log(militaryTime);
        

        var row =  $(".hour9").text(); //9am
        console.log(row)
        var hourNine = parseInt(row);
        var TEST = time.hourNine;
        console.log(TEST)
        console.log(hourNine);

        if (militaryTime < hourNine ) {  //current time is less than 
         
        //    var test =  $(".hour9").find("textarea")
        //    console.log(test)
            $(".hour9").hide()
        

               
        } else if (militaryTime === hourNine) {

            //$(".hour9").find("textarea").addClass(".present")
            $(".hour9").hide()

        } else if (militaryTime > hourNine) {
            console.log("true")

            //$("hour9 > textarea").addClass("past")
            //$(".hour9").find("textarea").addClass(".present")
            //$(".description9").css('color','red')
        //    var test3 =  $("#hour-9").find("textarea").addClass('.past');
        //    $(".description9").append(test3)

        
            //var test = $(".description9").css("background-color","red")
             var test = $(".description9").css("display" ,"visible")
            .past
            $(".description9").append(test)
        }
    };
    
    timeblockColor();


    // var test = $(".saveBtn").css("background-color","red")

    // $(".saveBtn").append(test)
 
    //focus on data element firlst

    //only thing we need date library for is how to tell the time element with the css and at top of screen

    // how will wil store this data, how to write it to local storage, how to get it out of local storage 

});




//Pseduo Code

//User opens the browser to the day planner
    // Current date is displayed at the top

    //Time blocks are on the screen from 9am to 5pm
        //color shading 
        //blocks past current time are grey
        //block on current hour is green
        //blocks in future are red



