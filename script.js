
$(document).ready(function() {   //goes in every jQuery script
    
    var data = {
        
        hour9: "",
        hour10:"",
        hour11: "",
        hour12: "",
        hour1: "",
        hour2: "",
        hour3: "",
        hour4: "",
        hour5: "",
    }

    console.log(data.hour9);

    $(".saveBtn").on("click", function() {  //listener 

        var value = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time,value);
       
    });

    $("#hour-9 .description").val(localStorage.getItem('hour-9'));
    $("#hour-10 .description").val(localStorage.getItem('hour-10'));
    $("#hour-11 .description").val(localStorage.getItem('hour-11'));
    $("#hour-12 .description").val(localStorage.getItem('hour-12'));
    $("#hour-1 .description").val(localStorage.getItem('hour-1'));
    $("#hour-2 .description").val(localStorage.getItem('hour-2'));
    $("#hour-3 .description").val(localStorage.getItem('hour-3'));
    $("#hour-4 .description").val(localStorage.getItem('hour-4'));
    $("#hour-5 .description").val(localStorage.getItem('hour-5'));


    //display current date in p tag on html
    $('#currentDay').text(moment().format('MMMM Do YYYY'));

    function timeblockColor() {

        var time = new Date(); //current time
        var militaryTime = time.getHours(); //military time (just hour)
        console.log(militaryTime);
     
        if (militaryTime < 9 ) {  //current time is less than 
            console.log("future")
             $("#hour-9").find("textarea").addClass("future");
   
        } else if (militaryTime === 9) {
            console.log("present")
           $("#hour-9").find("textarea").addClass("present");
    
        } else if (militaryTime > 9) { //current time is greater than 
            console.log("past")
            $("#hour-9").find("textarea").addClass("past");
        }

        //--------------------------------------------------------------------------------
        if (militaryTime < 10 ) {  //current time is less than 
            console.log("futre")
             $("#hour-10").find("textarea").addClass("future");
   
        } else if (militaryTime === 10) {
            console.log("present")
           $("#hour-10").find("textarea").addClass("present");
    
        } else if (militaryTime > 10) { //current time is greater than 
            console.log("past")
            $("#hour-10").find("textarea").addClass("past");
        }

        //--------------------------------------------------------------------------------
        if (militaryTime < 11 ) {  //current time is less than 
            console.log("futre")
            $("#hour-11").find("textarea").addClass("future");
        
        } else if (militaryTime === 11) {
            console.log("present")
            $("#hour-11").find("textarea").addClass("present");
         
        } else if (militaryTime > 11) { //current time is greater than 
            console.log("past")
            $("#hour-11").find("textarea").addClass("past");
        }

        //--------------------------------------------------------------------------------
        if (militaryTime < 12 ) {  //current time is less than 
            console.log("futre")
            $("#hour-12").find("textarea").addClass("future");
           
        } else if (militaryTime === 12) {
            console.log("present")
            $("#hour-12").find("textarea").addClass("present");
            
        } else if (militaryTime > 12) { //current time is greater than 
            console.log("past")
            $("#hour-12").find("textarea").addClass("past");
        }

        //--------------------------------------------------------------------------------
        if (militaryTime < 13 ) {  //current time is less than 
            console.log("futre")
            $("#hour-1").find("textarea").addClass("future");
               
        } else if (militaryTime === 13) {
            console.log("present")
            $("#hour-1").find("textarea").addClass("present");
                
        } else if (militaryTime > 13) { //current time is greater than 
            console.log("past")
            $("#hour-1").find("textarea").addClass("past");
        }

            
        //--------------------------------------------------------------------------------
        if (militaryTime < 14 ) {  //current time is less than 
            console.log("futre")
            $("#hour-2").find("textarea").addClass("future");
               
        } else if (militaryTime === 14) {
            console.log("present")
            $("#hour-2").find("textarea").addClass("present");
                
        } else if (militaryTime > 14) { //current time is greater than 
            console.log("past")
            $("#hour-2").find("textarea").addClass("past");
        }

        //--------------------------------------------------------------------------------
        if (militaryTime < 15 ) {  //current time is less than 
            console.log("futre")
            $("#hour-3").find("textarea").addClass("future");
                   
        } else if (militaryTime === 15) {
            console.log("present")
            $("#hour-3").find("textarea").addClass("present");
                    
        } else if (militaryTime > 15) { //current time is greater than 
            console.log("past")
            $("#hour-3").find("textarea").addClass("past");
        }

        //--------------------------------------------------------------------------------
        if (militaryTime < 16 ) {  //current time is less than 
            console.log("futre")
            $("#hour-4").find("textarea").addClass("future");
               
        } else if (militaryTime === 16) {
            console.log("present")
            $("#hour-4").find("textarea").addClass("present");
                
        } else if (militaryTime > 16) { //current time is greater than 
            console.log("past")
            $("#hour-4").find("textarea").addClass("past");
        }

         //--------------------------------------------------------------------------------
         if (militaryTime < 17 ) {  //current time is less than 
            console.log("futre")
            $("#hour-5").find("textarea").addClass("future");
               
        } else if (militaryTime === 17) {
            console.log("present")
            $("#hour-5").find("textarea").addClass("present");
                
        } else if (militaryTime > 17) { //current time is greater than 
            console.log("past")
            $("#hour-5").find("textarea").addClass("past");
        }
    };
    
    timeblockColor();

});