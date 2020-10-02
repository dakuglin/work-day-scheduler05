
$(document).ready(function() {   //goes in every jQuery script

    //display current date in p tag on html
    $('#currentDay').text(moment().format('MMMM Do YYYY'));


     //each out on schedule military time
   

    function timeblockColor () {

        var time = new Date(); //current time
        var militaryTime = time.getHours(); //military time (just hour)
        console.log(militaryTime);

        var hours = ["9","10","11","12","13","14","15","16","17"];
        var hourIndex = 0; //index of hours array
    
        for (var i=0; i < hours.length; i++) {
            if (militaryTime < hours[hourIndex] ) {         //current time is less than 
                console.log("future")                       //future
                $(".description").addClass("future");
                hourIndex++;
                console.log(hours[hourIndex])
                 
            } else if (militaryTime === hours[hourIndex]) { //current time is equal to
                console.log("present")                      //present
                $(".description").addClass("present");
                hourIndex++;
        
            } else if (militaryTime > hours[hourIndex]) {   //current time is greater than 
                console.log("past")                         //past
                $(".description").addClass("past");
                hourIndex++;
            }
        }    
    }

    timeblockColor();

});





















//focus on data element firlst

    //only thing we need date library for is how to tell the time element with the css and at top of screen

    // how will wil store this data, how to write it to local storage, how to get it out of local storage 


//Pseduo Code

//User opens the browser to the day planner
    // Current date is displayed at the top

    //Time blocks are on the screen from 9am to 5pm
        //color shading 
        //blocks past current time are grey
        //block on current hour is green
        //blocks in future are red



